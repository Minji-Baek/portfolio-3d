import * as THREE from 'three';
import { convertLatLngToPos, getGradientCanvas } from '../utils/utils.js';

export default class Earth {
  constructor({baseR, glowR, earthTexture, starTexture}){
    const createEarth1 = () => {
        //basicMaterial 은 빛 X but Standard는 빛 O
      const meterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
        side: THREE.FrontSide,
        opacity: 0.6,
        transparent: true
      });
      const geometry = new THREE.SphereGeometry(baseR, 30, 30);
      const mesh = new THREE.Mesh(geometry, meterial);
      mesh.rotation.y = -Math.PI /2;
      return mesh;
    };
  
    const createEarth2 = () => {
      const meterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
        opacity: 0.9,
        transparent: true,
        side: THREE.BackSide
      });
      const geometry = new THREE.SphereGeometry(glowR, 30, 30);
      const mesh = new THREE.Mesh(geometry, meterial);
      mesh.rotation.y = -Math.PI /2;
  
      return mesh;
  
    };
  
    const createStar = (count = 500)=> {
      const positions = new Float32Array(count * 3);
      for(let i = 0; i < count; i++){
        positions[i] = (Math.random() -0.5 )* 5;     //x (-3~3) => 카메라와의 거리까지
        positions[i + 1] = (Math.random() -0.5 )* 5; //y
        positions[i + 2] =(Math.random() -0.5 )* 5; //z
      }
  
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
  
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.01,
        color: 0xbcc6c6,
        transparent: true,
        map: starTexture,
        alphaMap: starTexture, //png의 투명한 부분도 설정
        depthWrite: false, //깊이 조절 않아고 렌더링 하겠다
      });
  
      const star = new THREE.Points(particleGeometry, particleMaterial);
      return star;
    }
  
    const createPoint1 = () => { 
      const point = {
        lat: 37.56668 * (Math.PI / 180),
        lng: 126.97841 * (Math.PI / 180),
      }
      const position = convertLatLngToPos(point, 1.3);
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.02, 0.002, 20, 20),
        new THREE.MeshBasicMaterial({color: 0x263b64})
      );
      mesh.position.set(position.x, position.y, position.z);
      mesh.rotation.set(0.9, 2.49, 1);
      return mesh;
    }
  
    const createPoint2 = () => { 
      const point = {
        lat: 5.55363 * (Math.PI / 180),
        lng: -0.196481 * (Math.PI / 180),
      }
      const position = convertLatLngToPos(point, 1.3);
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.02, 0.002, 20, 20),
        new THREE.MeshBasicMaterial({color: 0x263b64})
      );
      mesh.position.set(position.x, position.y, position.z);
      mesh.rotation.set(0.9, 2.46, 1);
  
  
      return mesh;
    }
    const createCurve = (startPos, endPos) => {
      const points = [];
      for (let i = 0; i <= 100 ; i ++){
        const pos = new THREE.Vector3().lerpVectors(startPos, endPos, i/100 );
        pos.normalize(); //1 미만으로 정리해주고 반지름 나중에 곱해주면 됨
  
        const wave = Math.sin((Math.PI * i) /100);
  
        pos.multiplyScalar(1.3 + 0.4 * wave);
        points.push(pos);
      }
  
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 20, 0.003);
  
      const gradientCanvas = getGradientCanvas('#757f94', '#263d74');
      const texture = new THREE.CanvasTexture(gradientCanvas);
  
  
      const material = new THREE.MeshBasicMaterial({map: texture});
      const mesh = new THREE.Mesh(geometry, material);
      return mesh;
    }


    this.earthGroup = new THREE.Group();
    this.stars = createStar();

    const insideEarth = createEarth1();
    const outsidEarth = createEarth2();
    const koreaPoint = createPoint1();
    const hawaiPoint = createPoint2();
    const curve = createCurve(koreaPoint.position,hawaiPoint.position );

    this.earthGroup.add(insideEarth, outsidEarth, koreaPoint, hawaiPoint, curve);

  }
  update(){
    this.earthGroup.rotation.x += 0.0005;
    this.earthGroup.rotation.y += 0.0005;

    this.stars.rotation.x += 0.001;
    this.stars.rotation.y += 0.001;
  }

}

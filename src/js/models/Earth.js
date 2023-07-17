import * as THREE from 'three';
import vertexShader from '../../shaders/earth/vertex.glsl?raw';
import fragmentShader from '../../shaders/earth/fragment.glsl?raw';
import pointsVertexShader from '../../shaders/earthPoints/vertex.glsl?raw';
import pointsFragmentShader from '../../shaders/earthPoints/fragment.glsl?raw';
import glowVertexShader from '../../shaders/earthGlow/vertex.glsl?raw';
import glowFragmentShader from '../../shaders/earthGlow/fragment.glsl?raw';

export default class Earth {
  constructor({baseR, glowR, texture}){
    const createEarth = () => {
      const material = new THREE.ShaderMaterial({ 
        uniforms:{
          uTexture:{
            value: texture,
          }
        },
        side: THREE.DoubleSide,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
      });
      // const geometry = new THREE.PlaneGeometry(2, 2); //test
      const geometry = new THREE.SphereGeometry(baseR, 30, 30);
  
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name ='earthBase'
      
      return mesh;
    };
  
    const createEarthPoints = () => {
      const material = new THREE.ShaderMaterial({
        uniforms:{
          uTexture:{
            value: texture,
          },
          uTime: {
            value: 0
          },
        },
        vertexShader: pointsVertexShader,
        fragmentShader: pointsFragmentShader,
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });
      const geometry = new THREE.IcosahedronGeometry(0.8, 10, 10); //균일한 삼각형의 sagment를 가지고 있음
      geometry.rotateY(-Math.PI);
      const mesh = new THREE.Points(geometry, material);
      mesh.name ='earthPoints'
      return mesh;
    }
  
    const createEarthGlow = () => {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uZoom: {
            value: 1,
          }
        },
        vertexShader: glowVertexShader,
        fragmentShader: glowFragmentShader,
        side: THREE.DoubleSide,
        transparent: true,
        wireframe: false,
      });
      const geometry = new THREE.SphereGeometry(glowR, 40, 40); //균일한 삼각형의 sagment를 가지고 있음
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name ='earthGlow'
      return mesh;
    }

    this.base = createEarth();
    this.points = createEarthPoints();
    this.glow = createEarthGlow();
    this.earth = new THREE.Group();
    this.earth.add(this.base, this.points, this.glow);
  } 


  update(controls, time){
    this.base.rotation.x += 0.0005;
    this.base.rotation.y += 0.0005;

    this.points.rotation.x += 0.0005;
    this.points.rotation.y += 0.0005;

    this.points.material.uniforms.uTime.value = time;
    this.glow.material.uniforms.uZoom.value = controls.target.distanceTo(controls.object.position);
  }
}


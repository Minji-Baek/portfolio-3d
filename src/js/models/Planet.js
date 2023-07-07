import * as THREE from 'three';
import gsap from 'gsap';

export default class Planet {
  constructor({cubeR, skeleR, texture} ){
    this.radius = cubeR;
    const createCube = ()=>{
      const cubeGeometry = new THREE.IcosahedronGeometry(cubeR);
      const cubeMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x00ffff,
        emissive: 0xcc99ff,
        transparent: true
      });
    
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.name = 'cube';
      return cube
    }
  
    const createSkeletone = ()=> {
      const skeletonGeometry = new THREE.IcosahedronGeometry(skeleR);
      const skeletonMaterial = new THREE.MeshBasicMaterial({
        wireframe: true,
        transparent: true,
        opacity: 0.2,
        color: 0xaaaaaa
      });
      const skeletone = new THREE.Mesh(skeletonGeometry, skeletonMaterial);
      skeletone.name = 'skeletone';
      skeletone.userData = {
        isHover : false
      }
      return skeletone;
    }
    const createPlane = () => {
      const geometry = new THREE.PlaneGeometry(cubeR, cubeR, 10, 10);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        fog: true,
        
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = 'picture';
      return mesh;
    }

    this.cube = createCube();
    this.skeletone = createSkeletone();
    this.picture = createPlane();

  }

  update(clock){
    this.cube.rotation.x = clock * 0.8; 
    this.cube.rotation.y = clock * 0.8;
    this.skeletone.rotation.x = clock * 1.3;
    this.skeletone.rotation.y = clock * 1.3;
    if(this.skeletone.userData.isHover){
      gsap.to(this.skeletone.scale,{
          x : 0,
          y : 0,
          z : 0,
          duration: 2
        });
      gsap.to(this.cube.scale, {
        x : 1.8,
        y : 1.8,
        z : 1.8,
        duration: 1,
      });
      gsap.to(this.cube.material, {
        opacity : 0.4,
        transparent: true,
        duration: 1,
      });
      gsap.to(this.picture.scale, {
        x : 3,
        y : 3,
        z : 3,
        duration: 1,
        onStart: ()=>{
          this.picture.visible = true;
        }
      });
      
    }else{
      gsap.to(this.skeletone.scale,{
        x : 1,
        y : 1,
        z : 1,
        duration: 1
      });
      gsap.to(this.cube.scale, {
        x : 1,
        y : 1,
        z : 1,
        duration: 1
      });
      gsap.to(this.cube.material, {
        opacity : 1,
        transparent: false,
        duration: 1,
      });
      gsap.to(this.picture.scale, {
        x : 1,
        y : 1,
        z : 1,
        duration: 1,
        onStart: ()=>{
          this.picture.visible = false;
        }
      });
    }
  }
}

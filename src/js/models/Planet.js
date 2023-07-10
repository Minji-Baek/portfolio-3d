import * as THREE from 'three';
import gsap from 'gsap';

export default class Planet {
  constructor({cubeR, skeleR, texture, index, planetRadius: planetRadius} ){
    this.radius = cubeR;
    this.texture = texture;
    this.index = index / 60 - 1;
    this.radian = index * (Math.PI / 180);
    this.planetRadius = planetRadius;
    // this.texture.magFilter = THREE.LinearMipmapLinearFilter;
    const createCube = ()=>{
      const cubeGeometry = new THREE.IcosahedronGeometry(cubeR);
      const cubeMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x00ffff,
        emissive: 0xcc99ff,
        transparent: true
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.name = 'cube';
      cube.userData = {
        index: this.index
      }
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
        index: this.index
      }
      return skeletone;
    }
    const createPlane = () => {
      const geometry = new THREE.PlaneGeometry(cubeR, cubeR * 0.75, 10, 10);
      const material = new THREE.MeshBasicMaterial({
        map: texture ,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = 'picture';
      return mesh;
    }

    this.cube = createCube();
    this.skeletone = createSkeletone();
    this.picture = createPlane();
    this.picture.visible = false;
    this.picture.rotation.set(-4.5, -0.3, 2.8);

    this.planet = new THREE.Group();
    this.planet.userData = {
      dataIndex : this.index,
    }

    this.planet.add(this.cube, this.skeletone, this.picture);
    this.planet.position.set( planetRadius * Math.cos( this.radian ), planetRadius * Math.sin( this.radian ), 0);
    const hover = gsap.timeline({
      id: `hover-${index}`,
      smoothChildTiming: true,
      autoRemoveChildren: true,
    });
    this.hover = hover;
  }
  animation(to){
    if(this.hover.isActive()) {
      this.hover.clear();
    };

    if(to === 'big'){     
      console.log("커짐")
      this.hover.to(this.skeletone.scale, {
        x : 0,
        y : 0,
        z : 0,
        duration: 0.5
      }, '<')
      .to(this.cube.scale, {
      x : 1.8,
      y : 1.8,
      z : 1.8,
      duration: 0.3,
      }, '<')
      .to(this.cube.material, {
        opacity : 0.4,
        transparent: true,
        duration: 0.4,
      }, '<')
      .to(this.picture.scale, {
        x : 2.3,
        y : 2.3,
        z : 2.3,
        duration: 0.3,
        onStart: ()=>{
          this.picture.visible = true;
        },
        onComplete: ()=>{
          this.hover.clear();
        },
      }, '<');

    }else{
      console.log("작아짐")
      this.hover.to(this.skeletone.scale,{
        x : 1,
        y : 1,
        z : 1,
        duration: 0.5
      }, '<')
      .to(this.cube.scale, {
        x : 1,
        y : 1,
        z : 1,
        duration: 0.4,
      }, '<')
      .to(this.cube.material, {
        opacity : 1,
        transparent: false,
        duration: 0.4,
      }, '<')
      .to(this.picture.scale, {
        x : 1,
        y : 1,
        z : 1,
        duration: 0.3,
        onComplete: ()=>{
          this.picture.visible = false;
          this.hover.clear();
        },
      }, '<');
    }
  }
  

  update(clock){
    this.cube.rotation.x = clock * 0.8; 
    this.cube.rotation.y = clock * 0.8;
    this.skeletone.rotation.x = clock * 1.3;
    this.skeletone.rotation.y = clock * 1.3;

  }

 
}

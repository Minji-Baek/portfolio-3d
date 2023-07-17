import * as THREE from 'three';
import gsap from 'gsap';
import {TextGeometry} from 'three/addons/geometries/TextGeometry';

export default class Planet {
  constructor({cubeR, skeleR, texture, index, planetRadius: planetRadius, font: font, data: data} ){
    this.radius = cubeR;
    this.texture = texture;
    this.index = index / 60 - 1;
    this.radian = index * (Math.PI / 180);
    this.planetRadius = planetRadius;
    this.font = font;
    this.data = data;
    this.isClick = false;

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
        map: texture,
        transparent: false
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = 'picture';
      return mesh;
    }

    const createText = (content) => {
      const textGeometry = new TextGeometry(content,{ 
        font : font,
        size: 0.5,
        height: 0.1,
        bevelEnabled: true,
        bevelSegments: 5,
        bevelSize: 0.01,
        bevelThickness: 0.02
      });
      textGeometry.computeBoundingBox(); //boundingbox의 값 계산하는 함수, 그 전엔 값 안나옴
      textGeometry.center();
      const textMeterial = new THREE.MeshLambertMaterial({
        color: 0x33ffdd,
        emissive: 0xccff77,
      });
      const text = new THREE.Mesh(textGeometry, textMeterial);
      return text;
    }

    this.cube = createCube();
    this.skeletone = createSkeletone();

    this.picture = createPlane();
    this.picture.visible = false;
    this.picture.rotation.set(-4.5, -0.3, 2.8);
    
    let showIndex = this.index - 3;
    if(showIndex < 0){
      showIndex += this.data.data.length;
    }
    this.showIndex = showIndex + 1;
    this.numberText = createText((this.showIndex).toString());
    this.titleText = createText(this.data.data[this.index].title);
    this.titleText.scale.set(0.2, 0.2, 0.2);

    // this.numberText.scale.set(4, 4, 4);
    this.titleText.rotation.set(2.081, -0.655, 2.928);
    this.numberText.rotation.set(1.642, -1.308, -3.274);

    this.numberText.visible = false;
    this.titleText.visible = false;

    this.planet = new THREE.Group();
    this.planet.name = 'planet';
    this.planet.userData = {
      dataIndex : this.index,
    }

    this.planet.add(this.cube, this.skeletone, this.picture, this.numberText, this.titleText );
    this.planet.position.set( planetRadius * Math.cos( this.radian ), planetRadius * Math.sin( this.radian ), 0);
    // this.titleText.position.set( -0.049, -0.325, 0.205);
    // this.numberText.position.set(0.871 ,-0.244 ,-0.767 );
    const hover = gsap.timeline({
      id: `${this.index}`,
      // smoothChildTiming: true,
      // autoRemoveChildren: true,
    });
    this.hover = hover;
  }

  
  animation(to){
    if(this.hover.isActive()) {
      this.hover.clear(true);
    }
    
    if(to === 'big'){     
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
      duration: 0.4,
      }, '<')
      .to(this.cube.material, {
        opacity : 0.4,
        duration: 0.4,
      }, '<')
      .to(this.numberText.scale, {
        x : 1,
        y : 1,
        z : 1,
        duration: 0.3,

      }, '<')
      .to(this.numberText.position, {
        x : 0.871,
        y : -0.244,
        z : -0.767,
        duration: 0.3,

      }, '<')
      .to(this.titleText.scale, {
        x : 0.2,
        y : 0.2,
        z : 0.2,
        duration: 0.3,

      }, '<')
      .to(this.titleText.position, {
        x : -0.049,
        y : -0.325,
        z : 0.205,
        duration: 0.3,
        onStart: ()=>{
          // if(document.querySelector(`#planet-${this.showIndex-1}`).scr()){
            this.numberText.visible = true;
            this.titleText.visible = true;
          // }
        },
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
          this.hover.clear(true);
        },
      }, '<');

    }else{
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
        duration: 0.4,
      }, '<')
      .to(this.numberText.scale, {
        x : 0,
        y : 0,
        z : 0,
        duration: 0.3,

      }, '<')
      .to(this.numberText.position, {
        x : this.planet.position.x,
        y : this.planet.position.y,
        z : this.planet.position.z,
        duration: 0.3,

      }, '<')
      .to(this.titleText.scale, {
        x : 0,
        y : 0,
        z : 0,
        duration: 0.3,

      }, '<')
      .to(this.titleText.position, {
        x : this.planet.position.x,
        y : this.planet.position.y,
        z : this.planet.position.z,
        duration: 0.3,

        onStart: ()=>{
          this.numberText.visible = false;
          this.titleText.visible = false;
        },
      }, '<')
      .to(this.picture.scale, {
        x : 1,
        y : 1,
        z : 1,
        duration: 0.3,
        onComplete: ()=>{
          this.picture.visible = false;
          // this.numberText.visible = false;
          // this.titleText.visible = false;
          this.hover.clear(true);
        },
      }, '<');
    }
  }
  

  update(clock){
    this.cube.rotation.x = clock * 0.8; 
    this.cube.rotation.y = clock * 0.8;
    this.skeletone.rotation.x = clock * 1.3;
    this.skeletone.rotation.y = clock * 1.3;
    if(!this.hover.isActive() && !this.picture.visible){
      if(this.skeletone.scale.x !== 1)
        this.skeletone.scale.set(1, 1, 1);
    }
   
  }

 
}

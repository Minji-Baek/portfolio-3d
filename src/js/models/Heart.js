
import * as THREE from 'three';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import gsap from 'gsap';

export default class Heart {
  constructor({  index, texture, font: font, data: data}){
    this.index = index / 90 - 1;
    this.texture = texture;
    this.font = font;
    this.data = data;
    this.isClick = false;

    const createHeart = ()=>{
      const shape = new THREE.Shape();
      const x = -2.5;
      const y = -5;
      shape.moveTo(x + 2.5, y + 2.5);
      shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
      shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
      shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
      shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
      shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
      shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
      
      const extrudeSettings = {
        steps: 1,  
        depth: 3,  
        bevelEnabled: true,  
        bevelThickness: 0.5,  
        bevelSize: 0.5,  
        bevelSegments: 1,  
      };
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const material = new THREE.MeshLambertMaterial({ 
        color: 0x00ffff,
        emissive: 0xcc99ff,
        transparent: true,
      });
      const mesh = new THREE.Mesh(geometry, material)
      mesh.name = 'heart';
      mesh.userData = {
        index: this.index
      }
      return mesh
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
   
    this.heart = createHeart();
    this.heart.scale.set(3, 3, 3);
    this.heart.rotation.set(3.116, 0, 0);


    this.numberText = createText((this.index).toString());
    console.log(this.data.data[this.index].title)
    this.titleText = createText(this.data.data[this.index].title);
    this.titleText.scale.set(0.1, 0.1, 0.1);

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

    this.planet.add(this.heart, this.numberText, this.titleText );

    this.planet.position.set( -200 + index / 9 * 8, 20, 0);
    
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
      this.hover.to(this.heart.scale, {
        x : 2,
        y : 2,
        z : 2,
        duration: 0.1,
        onStart: ()=>{
          console.log("도는디")
          this.heart.material.map = this.texture;
        }
        })
      .to(this.heart.scale, {
        x : 2.5,
        y : 2.5,
        z : 2.5,
        duration: 0.1,
      }, )
      .to(this.heart.scale, {
        x : 2,
        y : 2,
        z : 2,
        duration: 0.1,
      }, )
      .to(this.heart.scale, {
        x : 3,
        y : 3,
        z : 3,
        duration: 0.1,
      },)
      // .to(this.numberText.position, {
      //   x : 0.871,
      //   y : -0.244,
      //   z : -0.767,
      //   duration: 0.3,

      // }, '<')
      // .to(this.titleText.scale, {
      //   x : 0.2,
      //   y : 0.2,
      //   z : 0.2,
      //   duration: 0.3,

      // }, '<')
      // .to(this.titleText.position, {
      //   x : -0.049,
      //   y : -0.325,
      //   z : 0.205,
      //   duration: 0.3,
      //   onStart: ()=>{
      //     // if(document.querySelector(`#planet-${this.showIndex-1}`).scr()){
      //       this.numberText.visible = true;
      //       this.titleText.visible = true;
      //     // }
      //   },
      // }, '<')
      // .to(this.picture.scale, {
      //   x : 2.3,
      //   y : 2.3,
      //   z : 2.3,
      //   duration: 0.3,
      //   onStart: ()=>{
      //     // this.picture.visible = true;
      //   },
      //   onComplete: ()=>{
      //     this.hover.clear(true);
      //   },
      // }, '<');

    }else{
      this.hover.to(this.heart.scale, {
        x : 3,
        y : 3,
        z : 3,
        duration: 0.2,
        onStart: ()=>{
          this.heart.material.map = null;
        }
      }, '<')
      // .to(this.numberText.scale, {
      //   x : 0,
      //   y : 0,
      //   z : 0,
      //   duration: 0.3,
      // }, '<')
      // .to(this.numberText.position, {
      //   x : this.planet.position.x,
      //   y : this.planet.position.y,
      //   z : this.planet.position.z,
      //   duration: 0.3,
      // }, '<')
      // .to(this.titleText.scale, {
      //   x : 0,
      //   y : 0,
      //   z : 0,
      //   duration: 0.3,
      // }, '<')
      // .to(this.titleText.position, {
      //   x : this.planet.position.x,
      //   y : this.planet.position.y,
      //   z : this.planet.position.z,
      //   duration: 0.3,
      //   onStart: ()=>{
      //     this.numberText.visible = false;
      //     this.titleText.visible = false;
      //   },
      // }, '<')
      // .to(this.picture.scale, {
      //   x : 1,
      //   y : 1,
      //   z : 1,
      //   duration: 0.3,
      //   onComplete: ()=>{
      //     this.picture.visible = false;
      //     // this.numberText.visible = false;
      //     // this.titleText.visible = false;
      //     this.hover.clear(true);
      //   },
      // }, '<');
    }
  
  }

  update(clock){
    this.heart.position.y = Math.sin(clock *  3);
    // this.cube.rotation.y = clock * 0.8;
  }






}
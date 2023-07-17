
import * as THREE from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry';
import gsap from 'gsap';

export default class Heart {
  constructor({  index, font: font, data: data}){
    this.index = index / 90 - 1;
    this.radian = index * (Math.PI / 180);

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
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xcc99ff,
        reflectivity: 0.2,
        fog: true
        
      });
      this.material = material;
      const mesh = new THREE.Mesh(geometry, material);
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
        bevelSegments: 10,
        bevelSize: 0.025,
        bevelThickness: 0.04
      });
      textGeometry.computeBoundingBox(); //boundingbox의 값 계산하는 함수, 그 전엔 값 안나옴
      textGeometry.center();
      const textMeterial = new THREE.MeshLambertMaterial({
        color: 0xccff77,
        fog: true,
        reflectivity: 0.4,
      });
      const text = new THREE.Mesh(textGeometry, textMeterial);
      return text;
    }
   
    this.heart = createHeart();
    this.heart.scale.set(3, 3, 3);

    this.numberText = createText((this.index+1).toString());
    this.titleText = createText(this.data.data[this.index].title);

    this.numberText.scale.set(0, 0, 0);
    this.titleText.scale.set(0, 0, 0);

    this.numberText.rotation.set(0.89, 0, 0);

    this.numberText.visible = false;
    this.titleText.visible = false;
    this.planet = new THREE.Group();
    this.planet.name = 'planet';
    this.planet.userData = {
      dataIndex : this.index,
    }

    this.planet.add(this.heart );
    this.planet.position.set( -8 * 3 * Math.cos( this.radian ), -8 * 3 * Math.sin( this.radian ), 0);
    this.heart.rotation.set(0, 0, Math.PI / 2 * (this.index));


    
    const heartScaler = gsap.timeline({
      id: `${this.index}`,
      // repeatRefresh: true,
      repeatDelay: 0.001,
      // smoothChildTiming: true,
      // autoRemoveChildren: true,
    });
    this.heartScaler = heartScaler;

    
    const hover = gsap.timeline({
      id: `${this.index}`,
      smoothChildTiming: true,
      // autoRemoveChildren: true,
    });
    this.hover = hover;
  }
  heartAnime(to){
    if(this.heartScaler.isActive()) {
      this.heartScaler.clear(true);

    }if(to === 'hover'){
      this.heartScaler.to(this.heart.scale, {
        x : 2.5,
        y : 2.5,
        z : 2.5,
        duration: 0.2,
        onStart: ()=>{
          this.heart.material.color = new THREE.Color(0xff6699);
          this.heart.material.needsUpdate =true;
          this.heartScaler.repeat(Infinity);
        }
        })
      .to(this.heart.scale, {
        x : 3.2,
        y : 3.2,
        z : 3.2,
        duration: 0.2,
      }, )
      .to(this.heart.scale, {
        x : 2.8,
        y : 2.8,
        z : 2.8,
        duration: 0.2,
      }, )
      .to(this.heart.scale, {
        x : 3,
        y : 3,
        z : 3,
        duration: 0.2,
      },)
      
    }else{
      this.heartScaler.to(this.heart.scale, {
        x : 3,
        y : 3,
        z : 3,
        duration: 0.3,
        onStart: ()=>{
          this.heart.material.color = new THREE.Color(0xcc99ff);
          this.heart.material.needsUpdate =true;
        },
        onComplete: ()=>{
          this.heartScaler.clear(true);
          this.heartScaler.repeat(0);
        },
        }, 
      )
    }
  }

  animation(to){
    if(this.hover.isActive()) {
      this.hover.clear(true);
    }
    if(to === 'big'){
      this.hover.to(this.numberText.scale, {
        x : 70,
        y : 70,
        z : 70,
        duration: 0.3,
      }, '<')
      .to(this.numberText.position, {
        z : 8,
        duration: 0.3,
      }, '<')
      .to(this.titleText.scale, {
        x : 22,
        y : 22,
        z : 22,
        duration: 0.3,
      }, '<')
      .to(this.titleText.position, {
        z : 1,
        duration: 0.3,
        onStart: ()=>{
            this.heart.material.color = new THREE.Color(0xff6699);
            this.heart.material.needsUpdate =true;
            this.numberText.visible = true;
            this.titleText.visible = true;
          // }
        },
        onComplete: ()=>{
            this.hover.clear(true);
          },
      
      }, '<')

    }else{
      this.hover.to(this.numberText.scale, {
        x : 0,
        y : 0,
        z : 0,
        duration: 0.3,
      }, '<')
      .to(this.numberText.position, {
        z : - 5,
        duration: 0.3,
      }, '<') 
      .to(this.titleText.scale, {
        x : 0,
        y : 0,
        z : 0,
        duration: 0.3,
      }, '<')
      .to(this.titleText.position, {
        z : -5,
        duration: 0.3,
        onStart: ()=>{
          this.heart.material.color = new THREE.Color(0xcc99ff);
          this.heart.material.needsUpdate =true;
        },
        onComplete: ()=>{
          this.numberText.visible = false;
          this.titleText.visible = false;
          this.hover.clear(true);
        },
      }, '<')
    }
  
  }

  update(clock){
    this.heart.position.y = Math.sin(clock *  3);
    this.heart.position.x = Math.cos(clock *  2);
    // if(this.hover.isActive()){
    //   console.log("hover gsap animaion acitve")
    // }

    // if(this.heartScaler.isActive()){
    //   console.log("heartScaler gsap animaion acitve")
    // }
  }






}
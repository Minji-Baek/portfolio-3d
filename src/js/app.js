/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Earth from './models/Earth';
import Planet from './models/Planet';
import GUI from 'lil-gui';
import Data from './data/data';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


export default async function init () {

  const container = document.querySelector('#app');
  gsap.registerPlugin(ScrollTrigger); // scrollTrigger을 사용할수있음
  const canvas = document.querySelector('#canvas');

  const renderer = new THREE.WebGLRenderer({
    antialias: true, //pixel 다듬기?
    alpha: true,
    canvas: canvas, 
  });

  renderer.setClearColor(0x333333, 1);
  renderer.shadowMap.enabled = true;
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const clock = new THREE.Clock();
  const projectTextureLoader = new THREE.TextureLoader();
  const fontLoader = new FontLoader();

  projectTextureLoader.setPath('../../assets/projects/');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    90, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );
 
  // -0.073, -0.017, 3.689
  camera.position.set( -0.073, -0.017, 3.689);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxAzimuthAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI ;
  controls.enableZoom = false;
  controls.dampingFactor = 0.1;
  controls.saveState();
 
  const raycatster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const data = new Data({about:'carrer'});
  const font =  await fontLoader.loadAsync('../../assets/fonts/Gugi_Regular.json');
  let numberText = null;
  let titleText = null;
  let scrollCont = 0;
  let changeObjArry = [];
  let vecArry = [];
  const clickAni = gsap.timeline({
    id: 'click',
    smoothChildTiming: true,
    autoRemoveChildren: true,

  });

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

  const create = (gui) => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();
    const planetRadius = 3;
    let plantArry = [];
    for (let i = 60; i <= 360; i += 60) {
      const planetG = new Planet({cubeR: 0.22, skeleR: 0.4, texture: projectTextureLoader.load(data.data[i/60 - 1].img), index: i, planetRadius: planetRadius });
      planetGroup.name = 'renderPlanet';
      planetGroup.add( planetG.planet);
      plantArry.push(planetG);
      
      //font test

  /*
      // if(i/60 === 4){
        
      //   const text = gui.addFolder('titleText').close();
         
      //   text.add(titleText.rotation, 'x')
      //   .min(-10)
      //   .max(10)
      //   .step(0.001);
    
      //   text
      //   .add(titleText.rotation, 'y')
      //   .min(-10)
      //   .max(10)
      //   .step(0.001);
    
    
      //   text
      //   .add(titleText.rotation, 'z')
      //   .min(-10)
      //   .max(10)
      //   .step(0.001);

      //   const textrotat = gui.addFolder('titleText').close();
         
      //   textrotat.add(titleText.position, 'x')
      //   .min(-10)
      //   .max(10)
      //   .step(0.001);
    
      //   textrotat
      //   .add(titleText.position, 'y')
      //   .min(-10)
      //   .max(10)
      //   .step(0.001);
    
    
      //   textrotat
      //   .add(titleText.position, 'z')
      //   .min(-10)
      //   .max(10)
      //   .step(0.001);
      // }
    */
     
    
    };
    planetGroup.rotation.set(4.733, 2.702, 0.49 );


    //font 추후 추가
    /*
    // scene.add(earth.earth, planetGroup );
    // numberText = createText('1');
    // titleText = createText(data.data[3].title);
    // numberText.position.set(planetGroup.children[3].position.x, planetGroup.children[3].position.y, planetGroup.children[3].position.z);
    // numberText.rotation.set(-1.832, 4.23, -0.273);
    // numberText.position.set(-1.026, -2.895, -0.504);
 
    // numberText.rotation.set(-1.832, 4.23, -0.273);
    // titleText.rotation.set(-1.468, 3.582, -0.299);
    // numberText.visible = false;
    // const text = gui.addFolder('titleText').close();
    //    text.add(numberText.rotation, 'x')
    //     .min(-10)
    //     .max(10)
    //     .step(0.001);
    
    //     text
    //     .add(numberText.rotation, 'y')
    //     .min(-10)
    //     .max(10)
    //     .step(0.001);
    
    
    //     text
    //     .add(numberText.rotation, 'z')
    //     .min(-10)
    //     .max(10)
    //     .step(0.001);

    //     const textrotat = gui.addFolder('titleText').close();
         
    //     textrotat.add(numberText.position, 'x')
    //     .min(-10)
    //     .max(10)
    //     .step(0.001);
    
    //     textrotat
    //     .add(numberText.position, 'y')
    //     .min(-10)
    //     .max(10)
    //     .step(0.001);
    
    
    //     textrotat
    //     .add(numberText.position, 'z')
    //     .min(-10)
    //     .max(10)
    //     .step(0.001);
    // titleText.visible = false;

    
          // gsap.fromTo(numberText.rotation, {x: 0, y: 0, z: 0 }, {
          //   x: -1.832, y:  4.23, z:-0.299, duration: 1,
          //   // onUpdate: () => {
          //   //   numberText.rotation.x = clock.getElapsedTime * 2;
          //   //   numberText.rotation.y = clock.getElapsedTime * 2;
          //   // }
          // })
          // gsap.fromTo(numberText, {opacity: 0, scale: new THREE.Vector3(0,0,0), position: object.position }, {
          //   visible : true,
          //   opacity: 0,
          //   scale: new THREE.Vector3(1,1,1),
          //   position: new THREE.Vector3(-1.026, -2.895, -0.504),
          //   duration: 1,
          // })
          // gsap.fromTo(numberText,{
          //   visible : 1,
          //   y : 1,
          //   z : 1,
          //   duration: 1,
          //   onStart: ()=> {
          //     numberText.visible = true;
          //     titleText.visible = true;
          //     numberText.position.set(-1.026, -2.895, -0.504);
          //     titleText.position.set(-1.522, -2.853, 0.252);
          //     titleText.scale.set(0.3, 0.3, 0.3);
          //   }
          // });
          */

    scene.add(planetGroup);
    // scene.add(planetGroup, numberText, titleText);
   
    // console.log( camera.position.dot(plantArry[3].planet.position))
    // controls.target.distanceTo(controls.object.position)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.castShadow = true;
    scene.add( directionalLight);

    vecArry = plantArry.flatMap((arr, index)=>{
      const div = document.createElement('div');
      div.className = 'scroll-planet';
      div.id = `planet-${index}`;
      container.appendChild(div);
      return arr.planet.position;
    });

    
    return {
      planetGroup, plantArry
    }
  }
  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  function handlerPointerMove(event, plantArry) {
    pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer

    raycatster.setFromCamera(pointer, camera);
    const intersects = raycatster.intersectObjects(scene.children);

    if(intersects.length > 0){
      const object = intersects[0].object;
      // console.log(object)
        if(object.name === 'skeletone' || object.name === 'cube'){
          const selectArr =  plantArry.filter((arry) => {return arry.planet.id === object.parent.id} );
          selectArr[0].animation('big'); //animation

          const changeArr = changeObjArry.filter((obj)=> { return obj.parent.id === object.parent.id});
          if(changeArr.length > 0){ //같은게 있는 상황
            // console.log("중복")
            return;
          }
          //같은게 없어서 array에 넣음
         
          // console.log(selectArr[0]);
          changeObjArry.push(object);// 커지는거 
        }

    }else if(changeObjArry.length > 0 ){
      // console.log("나갈때 여기 아니냐",changeObjArry )//작아지는거
      changeObjArry = [];
      plantArry.forEach(arr=>{arr.animation('small')}) //animation
      
    }else{
      // console.log('비었답니다')
    }
  }

  function handlerPointerDown (event, plantArry) {
    // pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    // pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer
    
    // raycatster.setFromCamera(pointer, camera);
    const intersects = raycatster.intersectObjects(scene.children);
    console.log(vecArry)
    if(intersects.length > 0  && !clickAni.isActive()){
      const object = intersects[0].object;
        if(object.name === 'skeletone' || object.name === 'cube'){
          controls.reset();
          let repeatCount = (object.userData.index -3);
          
          if(repeatCount < 0){
            repeatCount = repeatCount + 6;
          }
          console.log(repeatCount);
          // gsap.getById(`#${container.children[repeatCount].id}`).scrollTrigger.scroll(`#${container.children[repeatCount].id}`);
          // 현재 보이는 index랑 click한 index와의 차이 == i
         
        }
        
        
    }else{
     
    }  
  }

  const textUpdate = ()=> {
    if(changeObjArry > 0){
      gsap.to(numberText.position, { x: -1.026, y: -2.895, z:-0.504,
        onStart: ()=> {
          numberText.visible = true
        },} );
    }else{

      gsap.fromTo(numberText.scale, {x: 0, y: 0, z: 0 }, {
        x: 1, y: 1, z:1, duration: 1,
        onStart: ()=> {
          numberText.visible = true
        },
      })
      gsap.fromTo(numberText.position, {x: object.position.x, y: object.position.y, z: object.position.y }, {
        x: -1.026, y: -2.895, z:-0.504, duration: 1,
        onStart: ()=>{
          numberText.position.set(  -1.026,  -2.895,-0.504);
        }
      })
    }

    gsap.to(numberText.position, {x: obj.position.x, y: obj.position.y, z: obj.position.y, duration: 1 }, 
      )
  }


  const addScrollEvent = (plantArry) => {
    for(let i = 0; i < container.children.length; i++ ){
      const scrollTimeline = gsap.timeline({
        id: `#${container.children[i].id}`,
        scrollTrigger: {
        trigger: `#${container.children[i].id}`,
        start: 'top top', // 언제 어딜 지나면 시작할지
        end: 'bottom top', 
        ariaLabel: `#${container.children[i].id}`,
        markers: true,
        scrub: true, //바로바뀜이 아니라 지정만큼 천천히
      }});
      const plus = (i + 1) % container.children.length ;
      if(i === (container.children.length - 1)){
        return ; // 마지막 인자로 끝나도록
      }
      vecArry.forEach((vec, index)=> {
        let planetIndex = (index + plus) %  plantArry.length;
        if(planetIndex === (vecArry.length)){
          planetIndex = 0;
        }
        scrollTimeline
          .to(plantArry[planetIndex].planet.position, {
            x: vec.x,
            y: vec.y,
            z: vec.z,
            duration: 3,
          }, '<')
      });
    }
  }

  const addEvent = (obj) => {
    const {  planetGroup, plantArry  } = obj;   
    window.addEventListener('resize', resize);
    addScrollEvent(plantArry);

    window.addEventListener('pointermove',(event) =>  handlerPointerMove(event, plantArry));
    window.addEventListener('pointerdown',(event) =>  handlerPointerDown(event, plantArry));
    
   
  };

  const draw = (obj) => {
    const {  planetGroup, plantArry  } = obj;   
    // earth.update(controls, clock.getElapsedTime());
    plantArry.forEach(planet => planet.update(clock.getElapsedTime()))
    // camera.lookAt(planetGroup.children[5].position);
    controls.update();
    renderer.render(scene, camera);   
    requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = async() => {
    const gui = new GUI();
    
    // container.appendChild(renderer.domElement);
    const obj = create(gui);
    addEvent(obj);
    console.log(obj)
    resize();
    draw(obj);

    // obj.planetGroup.rotation.set(4.8, 2.73, 0.37 );
   

   
    const planetFold = gui.addFolder('objPosition').close();
    planetFold.add(obj.planetGroup.rotation, 'x')
    .min(-10)
    .max(10)
    .step(0.001);

    planetFold
    .add(obj.planetGroup.rotation, 'y')
    .min(-10)
    .max(10)
    .step(0.001);


    planetFold
    .add(obj.planetGroup.rotation, 'z')
    .min(-10)
    .max(10)
    .step(0.001);



    const imgFold = gui.addFolder('imgPosition').close();
    imgFold.add(obj.planetGroup.children[1].rotation, 'x')
    .min(-10)
    .max(10)
    .step(0.001);

    imgFold
    .add(obj.planetGroup.children[1].rotation, 'y')
    .min(-10)
    .max(10)
    .step(0.001);


    imgFold
    .add(obj.planetGroup.children[1].rotation, 'z')
    .min(-10)
    .max(10)
    .step(0.001);

  };

  await initialize();
}

// window.addEventListener('load', async() => await init() )

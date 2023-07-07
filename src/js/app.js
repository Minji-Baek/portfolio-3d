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


export default async function init () {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setClearColor(0x333333, 1);
  renderer.shadowMap.enabled = true;
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const clock = new THREE.Clock();
  const textureLoader = new THREE.TextureLoader();
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
  camera.position.set( -0.073, -0.017, 3.689);
  // -0.073, -0.017, 3.689

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  const planetRadius = 3;

  const raycatster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const data = new Data({about:'carrer'});
  const font =  await fontLoader.loadAsync('../../assets/fonts/Gugi_Regular.json');
  let numberText = null;
  let titleText = null;
  let changeObjArry = [];



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
    let plantArry = [];
    for (let i = 60; i <= 360; i += 60) {
      const rad = i * (Math.PI / 180);
      const index = i/60 - 1;
      const planetG = new Planet({cubeR: 0.22, skeleR: 0.4, texture: projectTextureLoader.load(data.data[i/60 - 1].img) });
      planetG.picture.visible = false;
      planetG.picture.rotation.set(-4.5, -0.3, 2.8);
      planetG.planet.position.set( planetRadius * Math.cos( rad ), planetRadius * Math.sin( rad ), 0);
    
      //font test
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
     
      planetG.planet.userData.dataIndex = index;
      planetGroup.name = 'renderPlanet';
      planetGroup.add( planetG.planet);
      plantArry.push(planetG);
    };


    //font 추후 추가
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

    scene.add(planetGroup);
    // scene.add(planetGroup, numberText, titleText);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
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

  function handlerPointerDown(event) {
    pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer

    raycatster.setFromCamera(pointer, camera);
    const intersects = raycatster.intersectObjects(scene.children);
    if(intersects.length > 0){
      const object = intersects[0].object;
      // console.log(object)
        if(object.name === 'skeletone' || object.name === 'cube'){
          object.userData.isHover= true;
          if(changeObjArry.filter((obj)=> { return obj.id === object.id}).length > 0){ //같은게 있는 상황
            // console.log("중복이다 중복");
            return;
          }
          //같은게 없어서 array에 넣음
          changeObjArry.push(object);
        }
        
        if(object.userData.isHover = true){
         
        }
       
    }else{
      changeObjArry.forEach(obj => {
        obj.userData.isHover = false;
        console.log("ㅇ/ㅐ는>")
       
      });
      changeObjArry = [];
      console.log("이게 돌아서 그른가..")
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




  const addEvent = () => {
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlerPointerDown);
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
    
    const container = document.querySelector('#app');
    container.appendChild(renderer.domElement);
    addEvent();
   
    const obj = create(gui);
    console.log(obj)
    resize();
    draw(obj);

    // obj.planetGroup.rotation.set(4.8, 2.73, 0.37 );
    obj.planetGroup.rotation.set(4.733, 2.702, 0.49 );

   
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


    const cameraPos = gui.addFolder('cameraPosition').close();
    cameraPos
    .add(camera.position, 'x')
    .min(-10)
    .max(10)
    .step(0.001);

    cameraPos
    .add(camera.position, 'y')
    .min(-10)
    .max(10)
    .step(0.001);


    cameraPos
    .add(camera.position, 'z')
    .min(-10)
    .max(10)
    .step(0.001);

    // const cameraRotate = gui.addFolder('cameraRotate');
    // console.log(controls)
    // cameraRotate
    // .add(controls.rotation, 'x')
    // .min(-10)
    // .max(10)
    // .step(0.001);

    // cameraRotate
    // .add(controls.rotation, 'y')
    // .min(-10)
    // .max(10)
    // .step(0.001);


    // cameraRotate
    // .add(controls.rotation, 'z')
    // .min(-10)
    // .max(10)
    // .step(0.001);

  };

  await initialize();
}

// window.addEventListener('load', async() => await init() )

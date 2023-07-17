/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { SEventEmitter } from '../utils/EventEmitter.js';


export default async function Charactor () {
  const eventEmitter = SEventEmitter;
  const canvas = document.querySelector('#canvas');
  const activeEle =  document.querySelector('#actions');
  // const gui = new GUI();
  // const loadingManger = new THREE.LoadingManager();
  // loadingManger.onProgress = (url, loaded, total) => {
  //   //총량: total, 진행상태: loaded
  //   bar.value = (loaded / total) * 100;
  // }
  // loadingManger.onLoad = () => {
  //   barContainer.style.display = 'none';
  // }
  
  const renderer = new THREE.WebGLRenderer({
    antialias: true, //pixel 다듬기?
    alpha: true,
    canvas: canvas, 
  });

  renderer.setClearColor(0xffffff, 1);
  renderer.shadowMap.enabled = true;
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const clock = new THREE.Clock();
  const raycatster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf0f0f0, 0.1, 500);

  const camera = new THREE.PerspectiveCamera(
    75, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    1,
    500
  );

  camera.position.set(0, 5, 20);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 15;
  controls.maxDistance = 25;
  controls.minPolarAngle = Math.PI /4;
  controls.maxPolarAngle = Math.PI /3;



  const bar = document.querySelector("#progress-bar");
  const barContainer = document.querySelector("#progress-bar-container");

  if(activeEle.hasAttribute('class')){
    activeEle.removeAttribute('class', 'disable');
    barContainer.removeAttribute('class', 'disable');

  }
  const loadingManger = new THREE.LoadingManager();
  loadingManger.onProgress = (url, loaded, total) => {
    //총량: total, 진행상태: loaded
    bar.value = (loaded / total) * 100;
  }
  loadingManger.onLoad = () => {
    barContainer.style.display = 'none';
  }
  const gltfLoader = new GLTFLoader(loadingManger);
 
  const gltf = await gltfLoader.loadAsync('../../model/character.gltf');
  const conbatAnimations = gltf.animations.slice(0, 5);
  const dancingAnimations = gltf.animations.slice(5);

  let charactorFrame = '';
  let currentAction;

  const createModel = ()=> {
    const model =  gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
  
    model.traverse(object => {
      if(object.isMesh){
        object.castShadow = true;
      }
    })
    return model;
  }

  const createBackground = ()=> {
    const planeGeometry = new THREE.PlaneGeometry(10000, 10000, 10000);
    const planeMatrial = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMatrial);
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI/2;
    plane.position.y = -7.5;
    return plane;
  }

  const createLight = () => {
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x333333);
    hemisphereLight.position.set(0, 20, 10);
    const spotLight = new THREE.SpotLight(0xffffff, 1.5, 30, Math.PI*0.15, 0.5, 0.5);
    spotLight.position.set(0, 20, 0);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    return {hemisphereLight,spotLight }
  }


  const create = () => {
    const model = createModel();
    camera.lookAt(model.position);
    const ground = createBackground();
    const { hemisphereLight, spotLight } = createLight();

    const mixer = new THREE.AnimationMixer(model);

    scene.add( model, ground, hemisphereLight, spotLight );
    
    return {
      mixer
    }
  }

  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);
  };


  function handlerPointerDown (event, mixer) {
    pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer

    raycatster.setFromCamera(pointer, camera);
    const intersects = raycatster.intersectObjects(scene.children);
    const object = intersects[0].object;
    if(object?.name === 'Ch03'){
      const preAction = currentAction;

      const index = Math.round(Math.random() * (dancingAnimations.length - 1));
  
      currentAction = mixer.clipAction(dancingAnimations[index]);
      currentAction.loop = THREE.LoopOnce; //LoopRepeat 기본
      currentAction.clampWhenFinished = true;

      if(preAction !== currentAction){
        preAction.fadeOut(0.5);
        currentAction.reset().fadeIn(0.5).play();
      }
      mixer.addEventListener('finished', handleFinished);
      function handleFinished() {
        const preAction = currentAction;
        currentAction = mixer.clipAction(conbatAnimations[0]);
        preAction.fadeOut(0.5);
        currentAction.reset().fadeIn(0.5).play();
      }
    }
  }


  const addEvent = (obj) => {
    const { mixer  } = obj;   
    window.addEventListener('resize', resize);
    // addScrollEvent(plantArry, wave);
   
    canvas.addEventListener('pointerdown',(event) =>  handlerPointerDown(event, mixer));
    const buttons = document.querySelector('.actions');
    conbatAnimations.forEach(animation => {
      const button = document.createElement('button');
      button.innerText = animation.name;
      buttons.appendChild(button);
      button.addEventListener('click', ()=> {
        const preAction = currentAction;
        currentAction = mixer.clipAction(animation);
        if(preAction !== currentAction){
          preAction.fadeOut(0.5);
          currentAction.reset().fadeIn(0.5).play();
        }
      })
    });
    const hasAniamtion = gltf.animations.length !== 0;
    if(hasAniamtion) {
      currentAction = mixer.clipAction(gltf.animations[0]);
      currentAction.play();
    }

  };
  const draw = (obj) => {
    const { mixer  } = obj;   
    // earth.update(controls, clock.getElapsedTime());
    const delta = clock.getDelta();
    mixer.update(delta);
    controls.update();
    renderer.render(scene, camera);   
    charactorFrame = requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = async () => {
    
    const obj = create();    
    addEvent(obj);
    resize();
    draw(obj);
  };
  const destroy = () => {
    cancelAnimationFrame(charactorFrame);
    scene.clear();
    renderer.dispose();
    controls.dispose();
  }

  eventEmitter.onDestroyCharactor(()=>{
    document.querySelector('#warning-click').removeAttribute('class','show');
    activeEle.setAttribute('class', 'disable');
    barContainer.setAttribute('class', 'disable');
    destroy();
  });

  await initialize();
}

// window.addEventListener('load', async() => await init() )

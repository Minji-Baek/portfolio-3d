/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

import gsap from 'gsap';

import { SEventEmitter } from '../utils/EventEmitter.js';
import knightEarth from '../models/knightEarth.js';
import DayEarth from '../models/DayEarth.js';

export default function Earth () {
  const eventEmitter = SEventEmitter;
  const canvas = document.querySelector('#canvas');
  const earthEle = document.querySelector('#earth');
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
  renderer.outputEncoding = THREE.sRGBEncoding;

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const renderTarget = new THREE.WebGLRenderTarget(
    canvasSize.width, canvasSize.height,
    {
      samples: 2
    }
  );

  renderer.setClearColor(0x000000, 1);
  renderer.shadowMap.enabled = true;

  const textureLoader = new THREE.TextureLoader();
  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const effectComposer = new EffectComposer(renderer, renderTarget);

  const clock = new THREE.Clock();
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;

  let toyFrame = '';
  let isKnight = true;


  const create = () => {
    const earth = new knightEarth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});

    scene.add(earth.earth);
    return {
      earth
    }
  }
  const addLight = () => {
    const light = new THREE.DirectionalLight(0xfffffff);
    light.position.set(2.65, 2.13, 1.02);
    scene.add(light);
  }

  const createDayEarth = () => {
    const enviromentMap = cubeTextureLoader.load([
      '../../assets/enviroments/px.png',  '../../assets/enviroments/nx.png', 
      '../../assets/enviroments/py.png',  '../../assets/enviroments/ny.png',
      '../../assets/enviroments/pz.png',  '../../assets/enviroments/nz.png'
    ]);
    enviromentMap.encoding = THREE.sRGBEncoding;
    scene.background = enviromentMap;
    scene.environment = enviromentMap;
    const earth = new DayEarth({ baseR: 1.3, glowR: 1.5, earthTexture: textureLoader.load('../../assets/textures/2k_earth_nightmap.jpg'), starTexture: textureLoader.load('../../assets/textures/particle.png')} );

    scene.add(earth.earthGroup, earth.stars);
    // const earthG = earth.earthGroup;
    
    return {
      earth
    }
  }

  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    effectComposer.setSize(canvasSize.width, canvasSize.height);
  };
 
  const clickHandler = () => {
    cancelAnimationFrame(toyFrame);
    scene.clear();

    if(isKnight){
      dayEarthInit();
      isKnight = false;
      earthEle.textContent = 'Day';
    }else{
      knightInit();
      isKnight = true;
      earthEle.textContent = 'Knight';
    }

  }

  const addEvent = () => {
    window.addEventListener('resize', resize);
    earthEle.addEventListener('click', clickHandler );
  };

  const draw = (obj) => {
    const { earth  } = obj;   
    earth.update(controls, clock.getElapsedTime());
    controls.update();
    effectComposer.render();
    renderer.render(scene, camera);   
    toyFrame = requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = () => {
    if(earthEle.hasAttribute('class')){
      earthEle.removeAttribute('class', 'disable');
      earthEle.setAttribute('class', 'earth');
    }
    knightInit();
    addEvent();
    resize();
  };
  

 
  const dayEarthInit = () => {
    camera.position.set(0, 0, 3);
    addLight();
    const obj = createDayEarth();
    // addPostEffects(obj);
    draw(obj);
  }

  const knightInit = () => {
    camera.position.set(0, 0, 2);
    scene.background = null;
    scene.environment = null;
    const obj = create();
    draw(obj);
  }


  const destroy = () => {
    cancelAnimationFrame(toyFrame);
    scene.clear();
    scene.background = null;
    scene.background = null;
    // scene.dispose();
    renderer.dispose();
    effectComposer.dispose();
    controls.dispose();
  }

  eventEmitter.onDestroyEarth(()=>{
    earthEle.removeEventListener('click', clickHandler );    
    document.querySelector('#earth').removeAttribute('class','earth');
    document.querySelector('#earth').setAttribute('class', 'disable');
    destroy();
  });

  initialize();
}

// window.addEventListener('load', async() => await init() )

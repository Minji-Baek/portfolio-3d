/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { SEventEmitter } from '../utils/EventEmitter.js';
import Card from '../models/Card.js';
import gsap from 'gsap';


export default function CardShow () {
  const eventEmitter = SEventEmitter;
  const canvas = document.querySelector('#canvas');
  const cardEle =  document.querySelector('#actions');

  
  const COLORS = ['#FF6e6e', '#31e0c1', '#006fff', '#ffd732' , '#cc99ff']
  const renderer = new THREE.WebGLRenderer({
    antialias: true, //pixel 다듬기?
    alpha: true, 
    canvas: canvas
  });

  renderer.shadowMap.enabled = true;
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    1,
    500
  );

  camera.position.set(0, 5, 20);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2.5;
  controls.rotateSpeed = 0.75;
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.minPolarAngle = Math.PI / 2 - Math.PI / 3;
  controls.maxPolarAngle = Math.PI / 2 + Math.PI / 3;
  const width = 10;
  const height = 15.8;
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('./assets/textures/card.png');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // CHANGED
  texture.center.set(width/2 , height/2 + 0.06)
  texture.repeat.set(0.158 * 0.6, 0.1 * 0.6);


  let charactorFrame = '';

  const createLight = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    ambientLight.position.set(-5, -5, -5);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    const directionalLight2 = directionalLight.clone();
    directionalLight.position.set(1, 1, 3);
    directionalLight2.position.set(-1, 1, -3);
  
    return {ambientLight,directionalLight, directionalLight2}
  }


  const create = () => {

    const card =  new Card({
      width: width ,
      height: height,
      radius: 0.5,
      color:  COLORS[0]
    });
    card.mesh.rotation.z = Math.PI * 0.1;

    gsap.to(card.mesh.rotation, {y: -Math.PI * 4, duration: 2, ease: 'back.out(2)'}); // y 축으로 360도 2번 돌기

    const { ambientLight, directionalLight, directionalLight2 } = createLight();

    scene.add( card.mesh, ambientLight, directionalLight, directionalLight2 );
    
    return {
      card
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
  const colorClick = (card, index, color)=> {
    if(index === 4){
      card.mesh.material.color = new THREE.Color(0xffffff);
      card.mesh.material.map = texture;
      card.mesh.material.needsUpdate = true;
    }else{
      card.mesh.material.color = new THREE.Color(color);
      card.mesh.material.map = null;
      card.mesh.material.needsUpdate = true;
    }
    
    gsap.to(card.mesh.rotation, {y: card.mesh.rotation.y - Math.PI / 2, duration: 1, ease: 'back.out(2)'}); // y 축으로 360도 2번 돌기
  }

  const addEvent = (obj) => {
    const { card  } = obj;   
    window.addEventListener('resize', resize);
    // addScrollEvent(plantArry, wave);
   
    COLORS.forEach((color, index) => {
      const button = document.createElement('button');
      button.style.backgroundColor = color;
      cardEle.appendChild(button);
      button.addEventListener('click',() => colorClick(card, index, color));
    })
  };
  const draw = (obj) => {
    // earth.update(controls, clock.getElapsedTime());
    controls.update();
    renderer.render(scene, camera);   
    charactorFrame = requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = () => {
    
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

  eventEmitter.onDestroyCard(()=>{
    cardEle.removeAttribute('class','card');
    cardEle.setAttribute('class', 'disable');
    document.querySelectorAll('.card button').forEach(button => {
      button.removeEventListener('click', colorClick)
    });
    cardEle.replaceChildren();
    // barContainer.setAttribute('class', 'disable');
    destroy();
  });

   initialize();
}

// window.addEventListener('load', async() => await init() )

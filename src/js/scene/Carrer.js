/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Earth from '../models/knightEarth.js';
import Planet from '../models/Planet.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import Data from '../data/data.js';
import { FontLoader } from 'three/addons/loaders/FontLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Description from '../models/Description.js';
import { SEventEmitter } from '../utils/EventEmitter.js';


export default async function Carrer() {
  const eventEmitter = SEventEmitter;
  const container = document.querySelector('#scroll');
  gsap.registerPlugin(ScrollTrigger); // scrollTrigger을 사용할수있음
  const canvas = document.querySelector('#canvas');
  const count = 60;
  const planetRadius = 3;

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

  projectTextureLoader.setPath('./assets/projects/');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    90, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );
  
  camera.position.set( -0.073, -0.017, 3.689);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxAzimuthAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI ;
  controls.enableZoom = false;
  controls.enablePan = false;
  // controls.enabled = false;

  controls.dampingFactor = 0.1;
  controls.saveState();
 
  const raycatster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const data = new Data({about: 'carrer'});


  const bar = document.querySelector("#progress-bar");
  const barContainer = document.querySelector("#progress-bar-container");


  const loadingManger = new THREE.LoadingManager();
  loadingManger.onProgress = (url, loaded, total) => {
    //총량: total, 진행상태: loaded
    bar.value = (loaded / total) * 100;
  }
  loadingManger.onLoad = () => {
    barContainer.style.display = 'none';
  }
  const fontLoader = new FontLoader(loadingManger);
  const font =  await fontLoader.loadAsync('./assets/fonts/Gugi_Regular.json');

  let changeObjArry = [];
  let vecArry = [];
  let createArry = [];
  const clickAni = gsap.timeline({
    id: 'click',
    // smoothChildTiming: true,
    // autoRemoveChildren: true,
  });
  let frameId = '';

  const create = () => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();


    let plantArry = [];
   
    for (let i = count; i <= 360; i += count) {
      let planetG = new Planet({cubeR: 0.22, skeleR: 0.4, texture: projectTextureLoader.load(data.data[i/60 - 1].img), index: i, planetRadius: planetRadius, font: font, data: data });
      planetGroup.name = 'renderPlanet';
      planetGroup.add( planetG.planet);
      plantArry.push(planetG);
    };
    planetGroup.rotation.set(4.733, 2.702, 0.49 );
    scene.add(planetGroup);
   
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
    createArry = plantArry;
    
    return {
      plantArry
    }
  }

  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.querySelector("#planet-0").scrollIntoView({
      behavior: 'smooth'
    })
  };

  function handlerPointerMove(event, plantArry) {
    pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer

    raycatster.setFromCamera(pointer, camera);
    const intersects = raycatster.intersectObjects(scene.children);

    if(intersects.length > 0){
      const object = intersects[0].object;
      // console.log(object)
      if(object.parent.name === 'planet'){
          const selectArr =  plantArry.filter((arry) => {return arry.planet.id === object.parent.id} );
          selectArr[0].animation('big'); //animation

          const changeArr = changeObjArry.filter((obj)=> { return obj.parent.id === object.parent.id});
          if(changeArr.length > 0){ //중복
            return;
          }
          //같은게 없어서 array에 넣음
          changeObjArry.push(object);// 커지는거 
        }

    }else if(changeObjArry.length > 0 ){
      //작아지는거
      changeObjArry = [];
      plantArry.forEach( arr=>{
        if(!arr.isClick){
          arr.animation('small');
        }
      }) //animation
      
    }else{
      
      // console.log('비었답니다')
    }
  }

  function handlerPointerDown (event, plantArry) {
    const intersects = raycatster.intersectObjects(scene.children);
    
    if(intersects.length > 0 && !clickAni.isActive()){
      const object = intersects[0].object;
      // console.log("object",object)
        if(object.parent.name === 'planet'){
          controls.reset();
          let repeatCount = (object.userData.index -3);
          if(repeatCount < 0){
            repeatCount = repeatCount + plantArry.length;
          }
          // 현재 보이는 index랑 click한 index와의 차이 == i
          // console.log("isClick", repeatCount)
          const selectArr = plantArry.filter((arry) => {return arry.planet.id === object.parent.id} );
          if(selectArr[0].isClick){
            return;
          }
          plantArry.forEach( arr=>{ arr.animation('small'); arr.isClick = false;}) //animation
          selectArr[0].isClick = true;
          document.querySelector(`#${container.children[repeatCount].id}`).scrollIntoView( {behavior:'smooth'})
          selectArr[0].animation('big');
          document.querySelector('#warning-click').setAttribute('class','show');
        }
    }else{
      //빈곳 click 시 선택 풀림
      reset(plantArry);
    }  
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
            // markers: true,
            scrub: true, //바로바뀜이 아니라 지정만큼 천천히
          },
        });
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
            onStart: () =>{
              controls.reset();
              // reset(plantArry);
            }
          }, '<')
      });
    }
  }

  const reset = (plantArry)=> {
    //컨트롤 reset, clickwarning no show, planet isclik all false, 
    document.querySelector('#warning-click').removeAttribute('class','show');
    plantArry.forEach( arr=>{ arr.animation('small'); arr.isClick = false;}) //animation
  }

  function handlerClickDouble (plantArry) {  
    //double click => show description
    const intersects = raycatster.intersectObjects(scene.children);
    if(intersects.length > 0  && !clickAni.isActive()){
      const object = intersects[0].object;
        if(object.parent.name === 'planet'){
          document.querySelector('header').style.cursor = 'none';
          document.querySelector('header').style.pointerEvents = 'none';
          canvas.style.cursor = 'none';
          let showIndex = (object.userData.index -3);
          if(showIndex < 0){
            showIndex = showIndex + plantArry.length;
          }
          clickAni.to(controls.object.position,{
            x: 0.13,
            z: 3.2,
            duration: 2,
            onComplete: ()=>{
              openDescription(object.userData.index, showIndex);
              clickAni.clear(true);
            }
          })
        }
    }
  }
 

  const openDescription = (index, showIndex) => {
    //설명  html 켜지는 부분
    document.querySelector('#warning-click').removeAttribute('class','show');

    document.querySelector('header').setAttribute('class', 'disable');

    Description(data, index, showIndex);
    
    // document.querySelector('#canvas').setAttribute('class', 'disable');
    document.querySelector('#scroll').setAttribute('class', 'disable');
   
    cancelAnimationFrame(frameId);

    // console.log(data.data[index]);
  }

  const destroy = () => {
    
    cancelAnimationFrame(frameId);
    scene.clear();
    renderer.dispose();
    controls.dispose();
  }

  const addEvent = (obj) => {
    const { plantArry  } = obj;   
    window.addEventListener('resize', resize);
    addScrollEvent(plantArry);

    const handleEventMove =  (event) => handlerPointerMove(event, plantArry);
    const handleEventDown =  (event) => handlerPointerDown(event, plantArry);
    const handleEventDB =  () => handlerClickDouble(plantArry);
    const handleEventHome =  (event) => {
                                          reset(plantArry);
                                          document.querySelector("#planet-0").scrollIntoView({
                                            behavior: 'smooth'
                                          })
                                        }

    canvas.addEventListener('pointermove', handleEventMove);
    canvas.addEventListener('pointerdown', handleEventDown);
    canvas.addEventListener('dblclick', handleEventDB);

    const home = document.querySelector('#home');
    home.addEventListener('click', handleEventHome );

    eventEmitter.onClearCarrerDescription((index)=>{
      document.querySelector('#scroll').removeAttribute('class', 'disable');
      document.querySelector(`#planet-${index}`).scrollIntoView();
      setCanvasRefresh(index);
      draw({plantArry});
    })

    eventEmitter.onDestroyCarrer(()=>{
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handleEventMove);
      canvas.removeEventListener('pointerdown',handleEventDown);
      canvas.removeEventListener('dblclick',  handleEventDB);
      const home = document.querySelector('#home');
      home.removeEventListener('click',handleEventHome);
      barContainer.style.display = 'flex';
      barContainer.setAttribute('class', 'disable');
  
      document.querySelector('#warning-click').removeAttribute('class','show');
      document.querySelector('#scroll').setAttribute('class', 'disable');
      destroy();
    });

  };

  const setCanvasRefresh = (index) => {

    clickAni.to(controls.object.position,{
      x: controls.position0.x,
      y: controls.position0.y,
      z: controls.position0.z,
      duration: 2,
      onStart: ()=>{
        document.querySelector('#warning-click').setAttribute('class','show');     
        document.querySelector('header').removeAttribute('class', 'disable');
      },
      onComplete: ()=>{
        canvas.style.cursor = 'unset';
        document.querySelector('header').style.cursor = 'unset';
        document.querySelector('header').style.pointerEvents = 'auto';
        clickAni.clear(true);
      }
    }, '<');
  }
 

  const draw = (obj) => {
    const { plantArry  } = obj;   
   
    // earth.update(controls, clock.getElapsedTime());
    plantArry.forEach(planet => planet.update(clock.getElapsedTime()));
    controls.update();
   
    renderer.render(scene, camera);   
    frameId = requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize =  () => {
    if(document.querySelector('#scroll').hasAttribute('class')){
      document.querySelector('#scroll').removeAttribute('class', 'disable');
    }
    const obj = create();
    gsap.fromTo(controls.object.position, 
      {x: 0, y: 0, z: 0}, 
      {
        x: -0.073, y: -0.017, z: 3.689, duration: 1
      })


    bar.value = 0;
    addEvent(obj);
    resize();
    draw(obj);

  };


  initialize();
}

// window.addEventListener('load', async() => await init() )

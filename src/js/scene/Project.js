/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import Data from '../data/data.js';
import {FontLoader} from 'three/addons/loaders/FontLoader';
import gsap from 'gsap';
import Description from '../models/Description';
import { SEventEmitter } from '../utils/EventEmitter';
import Heart from '../models/Heart';
import Wave from '../models/Wave';


export default async function Project () {
  const eventEmitter = SEventEmitter;
  const canvas = document.querySelector('#canvas');
  const scrollEle =  document.querySelector('#scroll');


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
  const projectTextureLoader = new THREE.TextureLoader();

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

  // const fontLoader = new FontLoader();

  projectTextureLoader.setPath('./assets/projects/');

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf0f0f0, 0.1, 500);

  const camera = new THREE.PerspectiveCamera(
    75, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    1,
    500
  );

  camera.position.set(0, 33, 97);
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
  const data = new Data({about: 'project'});
  const font =  await fontLoader.loadAsync('./assets/fonts/Gugi_Regular.json');

  let changeObjArry = [];
  const rotationAni = gsap.timeline({
    id: 'rotation',
    // smoothChildTiming: true,
    // autoRemoveChildren: true,
  });
  let carrerFrame = '';

  const count = 90;

  const params = {
    waveColor : '#00ffff',
    backgroundColor: '#ffffff',
    texture: projectTextureLoader.load(data.data[0].img),
    fogColor : '#f0f0f0',
  }

  const create = () => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();
    planetGroup.name = 'renderPlanet';
    const heartGroup = new THREE.Group();
    const wave = new Wave({ params : params })

    scene.add(wave.wave, wave.image);


    let plantArry = [];
   
    for (let i = count; i <= 360; i += count) {
      let planetG = new Heart({index: i, font: font, data: data });
        // this.numberText.position.set( -42, -11, 58);
        // this.titleText.position.set( 35, -27, 1);
        planetG.numberText.position.set( 0,  100,  8 );
        planetG.titleText.position.set(  3, - 51,  2);
        planetGroup.add( planetG.numberText, planetG.titleText);
        heartGroup.add( planetG.planet)
        plantArry.push(planetG);
    };
    // planetGroup.rotation.set(4.733, 2.702, 1.396 );
    planetGroup.add(heartGroup);
    planetGroup.rotation.x = - Math.PI / 3;

    scene.add(planetGroup);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 1024;
    pointLight.shadow.mapSize.height = 1024;
    pointLight.shadow.radius = 10;
  
    pointLight.position.set(15, 30, 15);
    scene.add(pointLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.radius = 10;
  
    directionalLight.position.set(-15, 15, 15);
    scene.add(directionalLight);
    
    return {
      plantArry, wave, heartGroup
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

  function handlerPointerMove(event, plantArry ) {
    pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer
 
    raycatster.setFromCamera(pointer, camera);
    const intersects = raycatster.intersectObjects(scene.children);

      if(intersects.length > 0){
        const object = intersects[0].object;
        if(object.parent.name === 'planet'){
            const selectArr =  plantArry.filter((arry) => {return arry.planet.id === object.parent.id} );
            
            selectArr[0].heartAnime('hover'); //animation
            const changeArr = changeObjArry.filter((obj)=> { return obj.parent.id === object.parent.id});
            if(changeArr.length > 0){ //중복
              return;
            }
            //같은게 없어서 array에 넣음'
            changeObjArry.push(object);// 커지는거 
        }else if(changeObjArry.length > 0 ){
          //작아지는거  
          changeObjArry = [];
          plantArry.forEach( arr=>{
            if(!arr.isClick){
              arr.heartAnime();
            }
          }) //animation
          
        }else{
          
        }

    }
  }

  function handlerPointerDown (event, plantArry, wave ) {
    pointer.x = (event.clientX / window.innerWidth -0.5) * 2; // 중심이 0,0이고 1~-1 사이인 x인 pointer
    pointer.y = -(event.clientY / window.innerHeight -0.5) * 2;// 중심이 0,0이고 1~-1 사이인 y인 pointer

    const intersects = raycatster.intersectObjects(scene.children);

    if(intersects.length > 0 && !rotationAni.isActive()){
      const object = intersects[0].object;
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
          plantArry.forEach( arr=>{ 
            arr.heartAnime(); 
            arr.animation('samll'); 
            arr.isClick = false;
          }) //animation
          selectArr[0].isClick = true;
          wave.animation('small');  
          selectArr[0].animation('big'); //animation
          selectArr[0].heartAnime('hover'); //animation
          params.texture = projectTextureLoader.load(data.data[object.userData.index].img);
          wave.animation('hover', params);
          document.querySelector('#warning-click').setAttribute('class','show');
        }else{
          //빈곳 click 시 선택 풀림
          reset(plantArry, wave);
        }  
    }
  }


  const reset = (plantArry, wave)=> {
    //컨트롤 reset, clickwarning no show, planet isclik all false, 
    document.querySelector('#warning-click').removeAttribute('class','show');
    plantArry.forEach( arr=>{ arr.animation('small'); arr.heartAnime(); wave.animation(); arr.isClick = false;}) //animation
  }

  function handlerClickDouble (wave, heartGroup) {  
    //double click => show description
    const intersects = raycatster.intersectObjects(scene.children);
    if(intersects.length > 0  && !rotationAni.isActive()){
      const object = intersects[0].object;
        if(object.parent.name === 'planet'){
          canvas.style.cursor = 'none';
          document.querySelector('header').style.cursor = 'none';
          document.querySelector('header').style.pointerEvents = 'none';
          rotationAni.to(controls.object.position,{
            y: 25.67,
            z: 16.59,
            duration: 2,
            onStart:()=>{
              wave.animation('small');  
            },
          },'<')
          .to(heartGroup.rotation,{
            z:  Math.PI * 4,
            duration: 2,
            onComplete: ()=>{
              openDescription(object.userData.index);
              rotationAni.clear(true);
            }
          },'<')
        }
    }
  }
 

  const openDescription = (index) => {
    //설명  html 켜지는 부분
    document.querySelector('#warning-click').removeAttribute('class','show');
    document.querySelector('header').setAttribute('class', 'disable');
    Description(data, index);
    document.querySelector('#scroll').setAttribute('class', 'disable');
    cancelAnimationFrame(carrerFrame);
    // document.querySelector('#canvas').setAttribute('class', 'disable');
    // console.log(data.data[index]);
  }

  const setCanvasRefresh = (obj) => {
  
    rotationAni.to(obj.heartGroup.rotation,{
      z: - Math.PI * 4,
      duration: 2,
    },'<')
    .to(controls.object.position,{
      x: controls.position0.x,
      y: controls.position0.y,
      z: controls.position0.z,
      duration: 2,
      onComplete: ()=>{
        obj.wave.animation('hover', params);
        canvas.style.cursor = 'unset';
        document.querySelector('header').style.cursor = 'unset';
        document.querySelector('header').style.pointerEvents = 'auto';
        rotationAni.clear(true);

      }
    },'<');
    
  }

  const addEvent = (obj) => {
    const { plantArry, wave, heartGroup  } = obj;   
    window.addEventListener('resize', resize);

    const handleEventMove =  (event) =>  handlerPointerMove(event, plantArry, wave);
    const handleEventDown =  (event) =>  handlerPointerDown(event, plantArry, wave);
    const handleEventDB =   () => handlerClickDouble(wave, heartGroup);


    canvas.addEventListener('pointermove',handleEventMove);
    canvas.addEventListener('pointerdown',handleEventDown);
    canvas.addEventListener('dblclick', handleEventDB);

    eventEmitter.onClearProDescription(()=>{ 
      document.querySelector('#warning-click').setAttribute('class','show');
      document.querySelector('#scroll').removeAttribute('class', 'disable');
      document.querySelector('header').removeAttribute('class', 'disable');
      setCanvasRefresh(obj);
      draw(obj);
    })

    eventEmitter.onDestroyProject(()=>{
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handleEventMove);
      canvas.removeEventListener('pointerdown',handleEventDown);
      canvas.removeEventListener('dblclick', handleEventDB);
  
      document.querySelector('#warning-click').removeAttribute('class','show');
      document.querySelector('#scroll').setAttribute('class', 'disable');
      barContainer.style.display = 'flex';
      barContainer.setAttribute('class', 'disable');
  
      destroy();
    });
  };


 

  const draw = (obj) => {
    const { plantArry, wave, heartGroup  } = obj;   
    // earth.update(controls, clock.getElapsedTime());
    plantArry.forEach(planet => planet.update(clock.getElapsedTime()))
    wave.update(clock);
    controls.update();
    renderer.render(scene, camera);   
    carrerFrame = requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize =  () => {
    if(scrollEle.hasAttribute('class')){
      scrollEle.removeAttribute('class', 'disable');
    }
    const obj = create();  
    
    gsap.fromTo(controls.object.position, 
      {x: 0, y: 0, z: 0}, 
      {
        x: 0, y: 33, z:97, duration: 2
      })
      bar.value = 0;
    addEvent(obj);
    resize();
    draw(obj);
  };


  const destroy = () => {
    cancelAnimationFrame(carrerFrame);
    scene.clear();
    renderer.dispose();
    controls.dispose();
  }

  

  initialize();
}

// window.addEventListener('load', async() => await init() )

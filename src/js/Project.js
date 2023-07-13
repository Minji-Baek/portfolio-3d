/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Earth from './models/Earth';
import Planet from './models/Planet';
import GUI from 'lil-gui';
import Data from './data/data';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Description from './models/Description';
import { SEventEmitter } from './utils/EventEmitter';
import Heart from './models/Heart';
import Wave from './models/Wave';


export default async function Project (type) {
  const eventEmitter = SEventEmitter;
  const container = document.querySelector('#scroll');
  gsap.registerPlugin(ScrollTrigger); // scrollTrigger을 사용할수있음
  const canvas = document.querySelector('#canvas');

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

  renderer.setClearColor(0x333333, 1);
  renderer.shadowMap.enabled = true;
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const clock = new THREE.Clock();
  const projectTextureLoader = new THREE.TextureLoader();
  // const fontLoader = new FontLoader(loadingManger);
  const fontLoader = new FontLoader();

  projectTextureLoader.setPath('../../assets/projects/');

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf0f0f0, 0.1, 500);

  const camera = new THREE.PerspectiveCamera(
    75, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    1,
    500
  );

  camera.position.set(0, 50, -100);

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
  const font =  await fontLoader.loadAsync('../../assets/fonts/Gugi_Regular.json');

  let changeObjArry = [];
  let vecArry = [];
  const clickAni = gsap.timeline({
    id: 'click',
    smoothChildTiming: true,
    autoRemoveChildren: true,
  });
  let frameId = '';

  const count = 90;

  const params = {
    waveColor : '#00ffff',
    backgroundColor: '#ffffff',
    fogColor : '#f0f0f0',
  }

  const create = (gui) => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();
    const wave = new Wave({ params : params })
  
    scene.add(wave.wave);


    let plantArry = [];
   
    for (let i = count; i <= 360; i += count) {
      console.log(data.data[i/count - 1].img)

      let planetG = new Heart({index: i, font: font, data: data, texture: projectTextureLoader.load(data.data[i/count - 1].img),  });
        if(i == count){
          gui.add(planetG.heart.position,'x', -1000, 1000, 0.1);
          gui.add(planetG.heart.position,'y', -1000, 1000, 0.1);
          gui.add(planetG.heart.position,'z', -1000, 1000, 0.1);
        }
        console.log(planetG.planet.position)
        planetGroup.name = 'renderPlanet';
        planetGroup.add( planetG.planet);
        plantArry.push(planetG);

    };
    // planetGroup.rotation.set(4.733, 2.702, 1.396 );

    scene.add(planetGroup);
   
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 1024;
    pointLight.shadow.mapSize.height = 1024;
    pointLight.shadow.radius = 10;
  
    pointLight.position.set(15, 15, 15);
    scene.add(pointLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.radius = 10;
  
    directionalLight.position.set(-15, 15, 15);
    scene.add(directionalLight);



    vecArry = plantArry.flatMap((arr, index)=>{
      const div = document.createElement('div');
      div.className = 'scroll-planet';
      div.id = `planet-${index}`;
      container.appendChild(div);
      return arr.planet.position; 
    });

    
    return {
      plantArry, wave
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

    if(intersects.length > 0){
      const object = intersects[0].object;
      console.log("object",object)
        if(object.parent.name === 'planet'){
          controls.reset();
          let repeatCount = (object.userData.index -3);
          if(repeatCount < 0){
            repeatCount = repeatCount + plantArry.length;
          }
          // 현재 보이는 index랑 click한 index와의 차이 == i
          console.log("isClick", repeatCount)
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


  const addScrollEvent = (plantArry, wave) => {
    for(let i = 0; i < container.children.length; i++ ){
      const scrollTimeline = gsap.timeline({
        id: `#${container.children[i].id}`,
        scrollTrigger: {
            trigger: `#${container.children[i].id}`,
            start: 'top top', // 언제 어딜 지나면 시작할지
            end: 'bottom bottom', 
            ariaLabel: `#${container.children[i].id}`,
            markers: true,
            scrub: true, //바로바뀜이 아니라 지정만큼 천천히
          },
        });
      const plus = (i + 1) % container.children.length ;
     
      scrollTimeline
        .to(plantArry[i].planet.position, {
          x: 9,
          y: 30,
          z: -50,
          duration: 3,
          onStart: () =>{
            controls.reset();
            // reset(plantArry);
          }
        })
        .to(plantArry[i].planet.position, {
          x: plantArry[i].planet.position.x,
          y: plantArry[i].planet.position.y,
          z: plantArry[i].planet.position.z,
          duration: 3,
          onStart: () =>{
            controls.reset();
            // reset(plantArry);
          }
        })
    }
    const t1 = gsap.timeline({ 
      scrollTrigger: {
      trigger: '#scroll',
      start: 'top top', // 언제 어딜 지나면 시작할지
      end: 'bottom bottom', // 언제 어딜 지나면 시작할지
      // markers: true,
      scrub: true, //바로바뀜이 아니라 지정만큼 천천히
    }});
  
    t1
      .to(params, {
      waveColor: '#4268ff',
      onUpdate: () => {
          wave.wave.waveMaterial.color = new THREE.Color(params.waveColor);
        },
        duration: 1.5
      })
      .to(params, {
        backgroundColor: '#2a2a2a',
        onUpdate: () => {
          scene.background = new THREE.Color(params.backgroundColor);
        },
        duration: 1.5
      } ,'<')
      .to(params, {
        fogColor: '#2f2f2f',
        onUpdate: () => {
          scene.fog.color = new THREE.Color(params.fogColor);
        },
        duration: 1.5
      }, '<')
  
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
          let showIndex = (object.userData.index -3);
          if(showIndex < 0){
            showIndex = showIndex + plantArry.length;
          }
          gsap.to(controls.object.position,{
            x: 0.13,
            z: 3.2,
            duration: 2,
            onComplete: ()=>{
              openDescription(object.userData.index, showIndex);
            }
          })
        }
    }
  }
 

  const openDescription = (index, showIndex) => {
    //설명  html 켜지는 부분
    document.querySelector('#warning-click').removeAttribute('class','show');


    document.querySelector('header').setAttribute('class', 'disable');

    const description = Description(data.data[index], showIndex);
    
    // document.querySelector('#canvas').setAttribute('class', 'disable');
    document.querySelector('#scroll').setAttribute('class', 'disable');
   
    cancelAnimationFrame(frameId);

    // console.log(data.data[index]);
  }

  const addEvent = (obj) => {
    const { plantArry, wave  } = obj;   
    window.addEventListener('resize', resize);
    addScrollEvent(plantArry, wave);

    canvas.addEventListener('pointermove',(event) =>  handlerPointerMove(event, plantArry));
    eventEmitter.onClearDescription((index)=>{ 
      document.querySelector('#warning-click').setAttribute('class','show');
      document.querySelector('#scroll').removeAttribute('class', 'disable');
      document.querySelector('header').removeAttribute('class', 'disable');
      setCanvasRefresh(plantArry, index);
    })

    canvas.addEventListener('pointerdown',(event) =>  handlerPointerDown(event, plantArry));
    canvas.addEventListener('dblclick', () => handlerClickDouble(plantArry));

    const home = document.querySelector('#home');
    home.addEventListener('click', (event) =>{
      reset(plantArry);
      document.querySelector("#planet-0").scrollIntoView({
        behavior: 'smooth'
      })
    });
  };

  const setCanvasRefresh = (plantArry, index) => {
    
    gsap.to(controls.object.position,{
      x: controls.position0.x,
      y: controls.position0.y,
      z: controls.position0.z,
      duration: 2,
      onStart: () => {
        document.querySelector(`#planet-${index}`).scrollIntoView();
      }
    });
    draw({plantArry});
  }
 

  const draw = (obj) => {
    const { plantArry, wave  } = obj;   
   
    // earth.update(controls, clock.getElapsedTime());
    plantArry.forEach(planet => planet.update(clock.getElapsedTime()))
    wave.update(clock);
    controls.update();
    renderer.render(scene, camera);   
    frameId = requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = async () => {
    const gui = new GUI();
    // gui.hide();
    // container.appendChild(renderer.domElement);

    const obj = create(gui);    

    addEvent(obj);
    resize();
    draw(obj);

  };

  eventEmitter.onDestroyProject(()=>{
    cancelAnimationFrame(frameId);
    renderer.dispose();
    controls.dispose();
  });

  await initialize();
}

// window.addEventListener('load', async() => await init() )
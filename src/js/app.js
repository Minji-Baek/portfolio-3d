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


export default async function init () {

  const container = document.querySelector('#app');
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

  controls.dampingFactor = 0.1;
  controls.saveState();
 
  const raycatster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const data = new Data({about:'carrer'});
  const font =  await fontLoader.loadAsync('../../assets/fonts/Gugi_Regular.json');

  let changeObjArry = [];
  let vecArry = [];
  const clickAni = gsap.timeline({
    id: 'click',
    smoothChildTiming: true,
    autoRemoveChildren: true,
  });



  const create = (gui) => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();
    const planetRadius = 3;
    let plantArry = [];
    for (let i = 60; i <= 360; i += 60) {
      const planetG = new Planet({cubeR: 0.22, skeleR: 0.4, texture: projectTextureLoader.load(data.data[i/60 - 1].img), index: i, planetRadius: planetRadius, font: font, data: data });
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
      // div.innerText = 'Please Double-Click If you want see more info about it'
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
          changeObjArry.push(object);// 커지는거 
        }

    }else if(changeObjArry.length > 0 ){
      // console.log("나갈때 여기 아니냐",changeObjArry )//작아지는거
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

    if(intersects.length > 0  && !clickAni.isActive()){
      const object = intersects[0].object;
        if(object.name === 'skeletone' || object.name === 'cube'){
          controls.reset();
          let repeatCount = (object.userData.index -3);
          if(repeatCount < 0){
            repeatCount = repeatCount + plantArry.length;
          }
          // 현재 보이는 index랑 click한 index와의 차이 == i
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
          }, '<')
      });
    }
  }

  const reset = (plantArry)=> {
    document.querySelector('#warning-click').removeAttribute('class','show');
    plantArry.forEach( arr=>{ arr.animation('small'); arr.isClick = false;}) //animation
  }

  function handlerClickDouble (event , plantArry) {  
    const intersects = raycatster.intersectObjects(scene.children);

    if(intersects.length > 0  && !clickAni.isActive()){
      const object = intersects[0].object;
        if(object.name === 'skeletone' || object.name === 'cube'){
         
          selectArr[0].isDoubleClick = true;
          console.log("dbclick");
        }
    }else{

    }
  }
 
  function handlerWheel (event , plantArry) {
    reset(plantArry);
  } 

  const addEvent = (obj) => {
    const {  planetGroup, plantArry  } = obj;   
    window.addEventListener('resize', resize);
    addScrollEvent(plantArry);

    window.addEventListener('pointermove',(event) =>  handlerPointerMove(event, plantArry));
    window.addEventListener('pointerdown',(event) =>  handlerPointerDown(event, plantArry));
    window.addEventListener('dblclick', (event) => handlerClickDouble(event, plantArry));
    window.addEventListener('wheel', (event) => handlerWheel(event, plantArry));

    const home = document.querySelector('#home');
    home.addEventListener('click', (event) =>{
      document.querySelector("#planet-0").scrollIntoView({
        behavior: 'smooth'
      })
    });

    document.querySelectorAll('#right-buttons .button-in-header').forEach((element)=>{
      element.addEventListener("click", (event) => {
        document.getElementById("active-menu").removeAttribute("id");

        element.setAttribute("id", "active-menu");
      })
    })

  };
 

  const draw = (obj) => {
    const {  planetGroup, plantArry  } = obj;   
    // earth.update(controls, clock.getElapsedTime());
    plantArry.forEach(planet => planet.update(clock.getElapsedTime()))
    controls.update();
    renderer.render(scene, camera);   
    requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = async() => {
    const gui = new GUI();
    gui.hide();
    // container.appendChild(renderer.domElement);
    const obj = create(gui);
    addEvent(obj);
    console.log(obj)
    resize();
    draw(obj);


  };

  await initialize();
}

// window.addEventListener('load', async() => await init() )

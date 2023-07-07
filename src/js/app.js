/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Earth from './models/Earth';
import Planet from './models/Planet';
import GUI from 'lil-gui';
import Data from './data/data';


export default function () {
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
 
  let changeObjArry = [];

  const create = () => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();
    let plantArry = [];
    for (let i = 60; i <= 360; i += 60) {
      const rad = i * (Math.PI / 180);
      const planetG = new Planet({cubeR: 0.22, skeleR: 0.4, texture: projectTextureLoader.load(data.data[i/60 - 1].img) });
      planetG.cube.position.set( planetRadius * Math.cos( rad ), planetRadius * Math.sin( rad ), 0);
      planetG.skeletone.position.set( planetRadius * Math.cos( rad ), planetRadius * Math.sin( rad ), 0);
      planetG.picture.position.set( planetRadius * Math.cos( rad ), planetRadius * Math.sin( rad ), 0);
      planetG.picture.rotation.set(-4.5, -0.3, 2.8);
      planetG.picture.visible = false;
      planetGroup.add( planetG.cube,planetG.skeletone, planetG.picture);

      plantArry.push(planetG);
    };
    // scene.add(earth.earth, planetGroup );
    scene.add(planetGroup );

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
      
      if(object.name === 'skeletone'){
        // console.log(object)
        object.userData.isHover= true;
        changeObjArry.push(object);
      }
    }else{
      changeObjArry.forEach(obj => obj.userData.isHover = false);
      changeObjArry = [];
    }
  }

  const addEvent = () => {
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handlerPointerDown);
  };

  const draw = (obj) => {
    const {  planetGroup, plantArry  } = obj;   
    // earth.update(controls, clock.getElapsedTime());
    plantArry.forEach(planet => planet.update(clock.getElapsedTime()))
    camera.lookAt(planetGroup.children[5].position);

    controls.update();
    renderer.render(scene, camera);   

    requestAnimationFrame(() => {
      draw(obj);
    });
  };

  const initialize = () => {
    const gui = new GUI();
    
    const container = document.querySelector('#app');
    container.appendChild(renderer.domElement);
    const obj = create();
    console.log(obj)
    addEvent();
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

  initialize();
}

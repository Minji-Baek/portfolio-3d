/* eslint-disable no-unused-vars */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Earth from './models/Earth';
import Planet from './models/Planet';
import GUI from 'lil-gui';

export default function () {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  renderer.setClearColor(0x000000, 1);

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const clock = new THREE.Clock();
  const textureLoader = new THREE.TextureLoader();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, //75가 널리 쓰임
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );
  camera.position.set(0, 0, 2);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  const planetRadius = 1.5;

  const create = () => {
    // const earth = new Earth({ baseR: 0.8, glowR: 1, texture: textureLoader.load('../../assets/2k_earth_specular_map.png')});
    const planetGroup = new THREE.Group();
    let plantArry = [];
    for (let i = 0; i <= 360; i += 60) {
      const rad = i * (Math.PI / 180);
      const planetG = new Planet({cubeR: 0.2, skeleR: 0.4});
      planetG.cube.position.set( planetRadius * Math.cos( rad ), planetRadius * Math.sin( rad ), 0);
      planetG.skeletone.position.set( planetRadius * Math.cos( rad ), planetRadius * Math.sin( rad ), 0);
      planetGroup.add(planetG.cube, planetG.skeletone);
      plantArry.push(planetG);
    };
    planetGroup
    // scene.add(earth.earth, planetGroup );
    scene.add(planetGroup );

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
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

  const addEvent = () => {
    window.addEventListener('resize', resize);
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

    obj.planetGroup.rotation.set(4.79, 2.526, 0.4 );
   
    gui
    .add(obj.planetGroup.rotation, 'x')
    .min(-10)
    .max(10)
    .step(0.001);

    gui
    .add(obj.planetGroup.rotation, 'y')
    .min(-10)
    .max(10)
    .step(0.001);


    gui
    .add(obj.planetGroup.rotation, 'z')
    .min(-10)
    .max(10)
    .step(0.001);

  };

  initialize();
}

import * as THREE from 'three';
import gsap from 'gsap';

  export default class Wave {
    constructor({params}){
    const createWave = () => {
      const waveGeometry = new THREE.PlaneGeometry(1000, 1000, 150, 150);
      const waveMaterial = new THREE.MeshStandardMaterial({
        color: params.waveColor,
        transparent: true,
      });
  
      const wave = new THREE.Mesh(waveGeometry, waveMaterial);
      return wave;
    }
    const createWaveImage = () =>{
      const waveImageGeometry = new THREE.PlaneGeometry(1200, 900, 150, 150);
      const waveImageMaterial = new THREE.MeshStandardMaterial({
        transparent: false,
        map: params.texture
      });
      const image = new THREE.Mesh(waveImageGeometry, waveImageMaterial);
      return image;
    }
   
    this.waveGeometry = new THREE.PlaneGeometry(1500, 1500, 150, 150);
    this.wave = createWave();
    this.image = createWaveImage();

    this.wave.receiveShadow = true;
    this.wave.rotation.x = - Math.PI / 3;
    this.image.rotation.x = - Math.PI / 3;

    this.image.position.set(0, 3, -39);
    this.waveHeight = 2.5;
    const initPositionZ = [];


    for(let i = 0; i <  this.waveGeometry.attributes.position.count; i++){
      // waveGeometry.attributes.position.array[i + 2] += (Math.random() - 0.5) * waveHeight;
      const z =  this.waveGeometry.attributes.position.getZ(i) + (Math.random() - 0.5) * this.waveHeight;
      this.waveGeometry.attributes.position.setZ(i, z);
      initPositionZ.push(z);
    }
    this.wave.geometry = this.waveGeometry;
    this.initPositionZ = initPositionZ;

    const hover = gsap.timeline({
      id: `${this.wave.id}`,
      // smoothChildTiming: true,
      // autoRemoveChildren: true,
    });
    this.hover = hover;

  }
  update(clock){
    const elapsedTime = clock.getElapsedTime();
    for(let i = 0 ; i < this.waveGeometry.attributes.position.count; i++){
      const z = this.initPositionZ[i] + Math.sin(elapsedTime * 3 + i**2) * this.waveHeight;
      this.waveGeometry.attributes.position.setZ(i , z);
    }
    this.waveGeometry.attributes.position.needsUpdate = true;
  }

  animation(to, params){
    if(this.hover.isActive()) {
      this.hover.clear(true);
    }if(to === 'hover'){
      this.hover.to(this.wave.material, {
        opacity : 0.5,
        duration: 0.8,
        onStart: ()=>{
          this.image.material.map = params.texture;
        },
        onComplete: ()=>{
          this.hover.clear(true);
        },
      }, '<');
    }else{
      this.hover.to(this.wave.material, {
        opacity : 1,
        duration: 0.8,
        onComplete: ()=>{
          this.hover.clear(true);
        },
      }, 
      )
    }
  }

}
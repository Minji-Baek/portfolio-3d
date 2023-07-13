import * as THREE from 'three';

  export default class Wave {
    constructor({params}){
  
    const waveGeometry = new THREE.PlaneGeometry(1500, 1500, 150, 150);
    const waveMaterial = new THREE.MeshStandardMaterial({
      color: params.waveColor,
    });

    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    this.wave = wave;

    this.wave.receiveShadow = true;
    this.wave.rotation.x = - Math.PI / 2;

    this.waveHeight = 2.5;
    const initPositionZ = [];


    for(let i = 0; i <  waveGeometry.attributes.position.count; i++){
      // waveGeometry.attributes.position.array[i + 2] += (Math.random() - 0.5) * waveHeight;
      const z =  waveGeometry.attributes.position.getZ(i) + (Math.random() - 0.5) * this.waveHeight;
      waveGeometry.attributes.position.setZ(i, z);
      initPositionZ.push(z);
    }
    this.waveGeometry = waveGeometry;
    this.initPositionZ = initPositionZ;

  }
  update(clock){
    const elapsedTime = clock.getElapsedTime();
    for(let i = 0 ; i < this.waveGeometry.attributes.position.count; i++){
      const z = this.initPositionZ[i] + Math.sin(elapsedTime * 3 + i**2) * this.waveHeight;
      this.waveGeometry.attributes.position.setZ(i , z);
    }
    this.waveGeometry.attributes.position.needsUpdate = true;
  }
}
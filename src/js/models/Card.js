import * as THREE from 'three';

export default class Card {
  constructor({width, height, radius, color}) {
    const x = width / 2 - radius;
    const y = height / 2 - radius;
    const shape = new THREE.Shape();

    shape
      .absarc(x, y, radius, Math.PI / 2, 0, true) // 중심의(x, y, radius, 시작각도, 끝각도, 시계방향입니까?)
      .lineTo(x + radius, -y) //직선상의
      .absarc(x, -y, radius, 0, -Math.PI / 2, true) 
      .lineTo(-x, -(y + radius))
      .absarc(-x, -y, radius, -Math.PI / 2, Math.PI, true) 
      .lineTo(-(x + radius), y, radius, Math.PI, Math.PI / 2, true)
      .absarc(-x, y, radius, Math.PI, Math.PI / 2, true);
      
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.01,
      bevelThickness: 0.1
    });
    const material = new THREE.MeshStandardMaterial({
      color,
      side: THREE.DoubleSide,
      roughness: 0.5,
      metalness: 0.5,
    })
    this.geometry = geometry;
    this.material = material;
    const mesh = new THREE.Mesh(geometry, material);

    this.mesh = mesh;
  }
}
 
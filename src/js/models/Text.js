import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';

export default class Text {
  constructor({number, title, fontloader} ){ 
    this.numder = number;
    this.title = title;
    const fontLoader = new FontLoader();
  
    const createFont = async (content) => {
      console.log(this.numder, this.title);
      const font =  await fontLoader.loadAsync(fontloader);
      const textGeometry = new TextGeometry(content,{ 
        font : font,
        size: 0.3,
        height: 0.05,
        bevelEnabled: true,
        bevelSegments: 5,
        bevelSize: 0.02,
        bevelThickness: 0.02,
      });
      textGeometry.computeBoundingBox(); //boundingbox의 값 계산하는 함수, 그 전엔 값 안나옴
      textGeometry.center();
      const textMeterial = new THREE.MeshStandardMaterial();
      const text = new THREE.Mesh(textGeometry, textMeterial);
      return text;
    }
    const numderText =  createFont(this.numder);
    const titleText =  createFont(this.title);
    console.log(titleText, numderText);
    this.numderText = numderText;
    this.titleText = titleText;
  }
  update(){

  }
}



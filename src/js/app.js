import Carrer from "./scene/Carrer.js";
import Project from "./scene/Project.js";
import Charactor from "./scene/Charactor.js";
import { SEventEmitter } from "./utils/EventEmitter.js";
import Earth from "./scene/Earth.js";

export default function () {

  const eventEmitter = SEventEmitter;
  eventEmitter.onInitProject( async() => await Project());
  eventEmitter.onInitCarrer( async() => await Carrer());
  eventEmitter.onInitCharactor( async () => await  Charactor());
  eventEmitter.onInitEarth( () => Earth());

  const checkDestroyEmitter = (preContext) => {
    if(preContext === "CARRER"){
      eventEmitter.destroyCarrer();
    }else if(preContext === "PROJECT"){
      eventEmitter.destroyProject();

    }else if(preContext.includes('ABOUT')){
      eventEmitter.destroyAbout();
    }else if(preContext === "CHARACTOR"){
      eventEmitter.destroyCharactor();

    }else if(preContext === "CARD"){
      eventEmitter.destroyCard();
    }else if(preContext.includes('EARTH')){
      eventEmitter.destroyEarth();
    }
  }

  document.querySelectorAll('#right-buttons .button-in-header').forEach((element, index)=>{

    element.addEventListener("click", (event) => {
      const preContext = document.getElementById("active-menu").textContent.toString();

      if((element.textContent === document.getElementById("active-menu").textContent) && (index !== 0)){
        // console.log('중복')
        return;
      }
      document.getElementById("active-menu").removeAttribute("id");
      element.setAttribute("id", "active-menu");
     

      switch(index){
        case 0 :{
          checkDestroyEmitter(preContext);
          if (element.textContent === "CARRER"){
            eventEmitter.initProject();
            element.textContent = "PROJECT";
          }else{
            eventEmitter.initCarrer();
            element.textContent = "CARRER";
          }
          break;
        }
        case 1 :{
          checkDestroyEmitter(preContext);
          eventEmitter.initEarth();
          break;
        }
        case 2 :{
          checkDestroyEmitter(preContext);
          if (element.textContent === "CHARACTOR"){
            eventEmitter.initCard();
            element.textContent = "CARD";
          }else{
            eventEmitter.initCharactor();
            element.textContent = "CHARACTOR";
          }
          break;
        }
        case 3 :{  
          checkDestroyEmitter(preContext);
          eventEmitter.initAbout();
          break;
        }
      }
    })
  });

  const home = document.querySelector('#home');
  home.addEventListener('click', (event) =>{
    document.querySelectorAll('#right-buttons .button-in-header').forEach((element, index)=>{
      const preContext = document.getElementById("active-menu").textContent.toString();
      if(index === 0){
        document.getElementById("active-menu").removeAttribute("id");
        element.setAttribute("id", "active-menu");

        if (preContext.includes('TOY')){
          eventEmitter.destroyToy();
        }else if(preContext.includes('ABOUT')){
          eventEmitter.destroyAbout();
        }else if(preContext === "PROJECT"){
          eventEmitter.destroyProject();
        }
        eventEmitter.initCarrer();
        element.textContent = "CARRER";
      } 
    })

  });


  window.addEventListener('load',()=>{
    // console.log("요기ㅓ")
    eventEmitter.initCarrer();
  })
}


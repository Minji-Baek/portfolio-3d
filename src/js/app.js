import Carrer from "./Carrer.js";
import Project from "./Project";
import { SEventEmitter } from "./utils/EventEmitter";

export default function () {

  const eventEmitter = SEventEmitter;
  eventEmitter.onInitProject( async() => await Project());
  eventEmitter.onInitCarrer( async() => await Carrer());

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
          if (element.textContent === "CARRER"){
            eventEmitter.destroyCarrer();
            eventEmitter.initProject();
            element.textContent = "PROJECT";
          }else{
            eventEmitter.destroyProject();
            eventEmitter.initCarrer();
            element.textContent = "CARRER";
          }
          break;
        }
        case 1 :{
          if(preContext === "CARRER"){
            eventEmitter.destroyCarrer();
          }else if(preContext === "PROJECT"){
            eventEmitter.destroyProject();
          }else{
            eventEmitter.destroyAbout();
          }
          eventEmitter.initToy();
          break;
        }
        case 2 :{  
          if (preContext === "CARRER"){
            eventEmitter.destroyCarrer();
          }else if(preContext === "PROJECT"){
            eventEmitter.destroyProject();
          }else{
            eventEmitter.destroyToy();
          }
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
      } 
      
    })

  });


  window.addEventListener('load',()=>{
    eventEmitter.initCarrer();
  })
}


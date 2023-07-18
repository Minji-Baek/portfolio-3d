import Carrer from "./scene/Carrer.js";
import Project from "./scene/Project.js";
import Charactor from "./scene/Charactor.js";
import { SEventEmitter } from "./utils/EventEmitter.js";
import Earth from "./scene/Earth.js";
import CardShow from "./scene/CardShow.js";

export default function () {
  const eventEmitter = SEventEmitter;
  eventEmitter.onInitProject( async() => {
      document.querySelector("#progress-bar-container").removeAttribute('class', 'disable');
      await Project();
    }
  );

  eventEmitter.onInitCarrer( async() =>{
    document.querySelector("#progress-bar-container").removeAttribute('class', 'disable');
    await Carrer();
  } );

  eventEmitter.onInitCharactor( async () => {
    if(document.querySelector('#actions').hasAttribute('class')){
      document.querySelector('#actions').removeAttribute('class', 'disable');
      document.querySelector('#actions').setAttribute('class', 'actions');
      document.querySelector("#progress-bar-container").removeAttribute('class', 'disable');
    }
      await  Charactor();
    }
  );
  eventEmitter.onInitCard(  () => {
    if(document.querySelector('#actions').hasAttribute('class')){
      document.querySelector('#actions').removeAttribute('class', 'disable');
      document.querySelector('#actions').setAttribute('class', 'card');
    }
        CardShow();
    }
  );
  eventEmitter.onInitEarth( () => Earth());

  eventEmitter.onInitAbout( ()=>{
    if(document.querySelector('#about').hasAttribute('class')){
      document.querySelector('#about').removeAttribute('class', 'disable');
      document.querySelector('#about').setAttribute('class', 'about');
    }
  });

  eventEmitter.onDestroyAbout( ()=>{
    if(document.querySelector('#about').hasAttribute('class')){
      document.querySelector('#about').removeAttribute('class', 'about');
      document.querySelector('#about').setAttribute('class', 'aboutEnd');

      setTimeout(() => {
        document.querySelector('#about').setAttribute('class', 'disable');      
      }, 1 * 1000);
    }
  });


  const checkDestroyEmitter = (preContext, index) => {
    if(preContext === "CARRER"){
      eventEmitter.destroyCarrer();

    }else if(preContext === "PROJECT"){
      eventEmitter.destroyProject();

    }else if(preContext.includes('ABOUT')){
      eventEmitter.destroyAbout();

    }else if(preContext === "CHARACTOR"){
      eventEmitter.destroyCharactor();
      if(index != 2 ){
        document.querySelectorAll('#right-buttons .button-in-header')[2].textContent = "TOY PROJECTS"
      }

    }else if(preContext === "CARD"){
      eventEmitter.destroyCard();
      if(index != 2 ){
        document.querySelectorAll('#right-buttons .button-in-header')[2].textContent = "TOY PROJECTS"
      }

    }else if(preContext.includes('EARTH')){
      eventEmitter.destroyEarth();
    }
  }

  document.querySelectorAll('#right-buttons .button-in-header').forEach((element, index)=>{

    element.addEventListener("click", (event) => {
      const preContext = document.getElementById("active-menu").textContent.toString();

      if((element.textContent === document.getElementById("active-menu").textContent) && (index !== 0 && index !== 2 ) ){
        return;
      }
      
      document.getElementById("active-menu").removeAttribute("id");
      element.setAttribute("id", "active-menu");
      switch(index){
        case 0 :{
          checkDestroyEmitter(preContext, index);
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
          checkDestroyEmitter(preContext, index);
          eventEmitter.initEarth();
          break;
        }
        case 2 :{
          checkDestroyEmitter(preContext, index);
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
          checkDestroyEmitter(preContext, index);
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

        if(preContext === "PROJECT"){
          eventEmitter.destroyProject();
    
        }else if(preContext.includes('ABOUT')){
          eventEmitter.destroyAbout();
    
        }else if(preContext === "CHARACTOR"){
          eventEmitter.destroyCharactor();
          document.querySelectorAll('#right-buttons .button-in-header')[2].textContent = "TOY PROJECTS"
        }else if(preContext === "CARD"){
          eventEmitter.destroyCard();
          document.querySelectorAll('#right-buttons .button-in-header')[2].textContent = "TOY PROJECTS"
        }else if(preContext.includes('EARTH')){
          eventEmitter.destroyEarth();
        }
        eventEmitter.initCarrer();
        element.textContent = "CARRER";
      } 
    })

  });


  window.addEventListener('load',()=>{
    eventEmitter.initCarrer();
  })
}


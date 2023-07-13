import Carrer from "./Carrer";
import Project from "./Project";
import { SEventEmitter } from "./utils/EventEmitter";

export default function () {

  const eventEmitter = SEventEmitter;
  eventEmitter.onInitProject( async() => await Project());
  eventEmitter.onInitCarrer( async() => await Carrer());

  document.querySelectorAll('#right-buttons .button-in-header').forEach((element, index)=>{
    element.addEventListener("click", (event) => {
      document.getElementById("active-menu").removeAttribute("id");
      element.setAttribute("id", "active-menu");
      switch(index){
        case 0 :{
          if (element.textContent === "CARRER"){
            eventEmitter.destroyCarrer();
            eventEmitter.initProject();
            element.textContent === "PROJECT"
          }else{
            eventEmitter.destroyProject();
            eventEmitter.initCarrer();
            element.textContent === "CARRER"
          }
          console.log("carrer click");
          break;
        }
        case 1 :{
          eventEmitter.initToy();
          console.log("toy project click");
          break;
        }
        case 2 :{
          // eventEmitter.initAbout();
          console.log("about click");
          break;
        }
      }
    })
  });

  window.addEventListener('load',()=>{
    eventEmitter.initProject();
  })
}


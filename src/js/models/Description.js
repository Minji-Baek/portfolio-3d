import { SEventEmitter } from "../utils/EventEmitter.js";

const Description = (data, index, type) => {
  console.log(data);
  const setDate = (date)=>{
    const startYYYY = date[0].slice(0,4);
    const startDD = date[0].slice(4,6);
  
    const EndYYYY = date[1].slice(0,4);
    const EndDD = date[1].slice(4,6);
  
    return `${startYYYY}.${startDD} ~ ${EndYYYY}.${EndDD}`;
  }
  const eventEmitter = SEventEmitter;
  document.querySelector('#description').removeAttribute('class', 'disable');
  if(type === 'carrer'){  
    document.querySelector('#description').setAttribute('class', 'description');
  }else{
    document.querySelector('#description').setAttribute('class', 'description2');
  }
  // document.querySelector('#warning-button').setAttribute('class','show');

  document.querySelector('.description-title #title').textContent = data.title;

  if(data.subtitle){
    document.querySelector('.description-title #subtitle').textContent = data.subtitle
  }
  
  document.querySelector('.description-title-wrapper #description').textContent = data.detail.join(`\r\n `);

  document.querySelector('.description-column #date').textContent = setDate(data.date);
  document.querySelector('.description-column #tech').textContent = `${data.Languege.join(`, `)} ${(data.UIFrameWork ?  data.UIFrameWork.join(`, `) : ' ')} `;
  document.querySelector('.description-column #pitch').textContent = data.pitch.join(`\r\n `); 
  document.querySelector('.description-column #company').textContent = data.company.join(`, `);
  document.querySelector('.description-column #role').textContent = data.role.join(`\r\n `);

  const closeDescription = (event) =>{
    if(!event) return;
      if(type === 'carrer'){  
        document.querySelector('#description').removeAttribute('class', 'description');
        document.querySelector('#description').setAttribute('class', 'description-end');
      }else{
        document.querySelector('#description').removeAttribute('class', 'description2');
        document.querySelector('#description').setAttribute('class', 'description-end2');
      }
      // document.querySelector('#warning-button').removeAttribute('class','show');

      setTimeout(() => {
        setCloseDescriptionEle(event);
      }, 1.0*1000);
  }

  document.querySelector('.description-button').addEventListener('click', (event)=> closeDescription(event));

  const setCloseDescriptionEle = (event) => {
    if(!event) return;
    
    if(type === 'carrer'){  
      document.querySelector('#description').removeAttribute('class', 'description-end');
    }else{
      document.querySelector('#description').removeAttribute('class', 'description-end2');
    }

    document.querySelector('#description').setAttribute('class', 'disable');
    if(type === 'carrer'){
      eventEmitter.clearCarrerDescription(index);
    }
    else{
      eventEmitter.clearProDescription();
    }
  }

}

export default Description;

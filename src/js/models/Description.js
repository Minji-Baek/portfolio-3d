import { SEventEmitter } from "../utils/EventEmitter.js";




const Description = (data, index, showindex) => {
  // console.log(data);
  const setDate = (date)=>{
    const startYYYY = date[0].slice(0,4);
    const startDD = date[0].slice(4,6);
  
    const EndYYYY = date[1].slice(0,4);
    const EndDD = date[1].slice(4,6);
  
    return `${startYYYY}.${startDD} ~ ${EndYYYY}.${EndDD}`;
  }
  const eventEmitter = SEventEmitter;
  const nowData = data.data[index];

  const type = data.type;

  document.querySelector('#description').removeAttribute('class', 'disable');
  if(type === 'carrer'){  
    document.querySelector('#description').setAttribute('class', 'description');
  }else{
    document.querySelector('#description').setAttribute('class', 'description2');
  }
  // document.querySelector('#warning-button').setAttribute('class','show');

  document.querySelector('.description-title #title').textContent = nowData.title;

  if(nowData.subtitle){
    document.querySelector('.description-title #subtitle').textContent = nowData.subtitle;


  }else if(nowData.url){
      const aTag = document.createElement("a");
      aTag.setAttribute('href', nowData.url);
      aTag.setAttribute('target', "_blank");
      aTag.innerHTML = nowData.url;
      document.querySelector('.description-title #subtitle').appendChild(aTag);
  
  }
  
  document.querySelector('.description-title-wrapper #description').innerHTML = nowData.detail.join(`<br /> `);
  document.querySelector('.description-column #date').innerHTML = setDate(nowData.date);
  document.querySelector('.description-column #tech').innerHTML = `${nowData.Languege.join(`, `)} ${(nowData.UIFrameWork ?  nowData.UIFrameWork.join(`, `) : ' ')} `;
  document.querySelector('.description-column #pitch').innerHTML = nowData.pitch.join(`<br /> `); 
  document.querySelector('.description-column #company').innerHTML = nowData.company.join(`, `);
  document.querySelector('.description-column #role').innerHTML = nowData.role.join(`<br /> `);
  const setCloseDescriptionEle = () => {    
    if(type === 'carrer'){  
      document.querySelector('#description').removeAttribute('class', 'description-end');
    }else{
      document.querySelector('#description').removeAttribute('class', 'description-end2');
    }
  
    document.querySelector('#description').setAttribute('class', 'disable');
    if(type === 'carrer'){
      eventEmitter.clearCarrerDescription(showindex);
    }
    else{
      eventEmitter.clearProDescription();
    }
  }
  const closeDescription = () =>{
    // console.log("안돌아야된다.")
      if(type === 'carrer'){  
        document.querySelector('#description').removeAttribute('class', 'description');
        document.querySelector('#description').setAttribute('class', 'description-end');
      }else{
        document.querySelector('.description-title #subtitle').replaceChildren();
        document.querySelector('#description').removeAttribute('class', 'description2');
        document.querySelector('#description').setAttribute('class', 'description-end2');
      }
      setTimeout(() => {
        setCloseDescriptionEle();
        document.querySelector('.description-button').removeEventListener('click',  closeDescription);
      }, 1.0*1000)
  }
  
  document.querySelector('.description-button').addEventListener('click',  closeDescription);
}

export default Description;

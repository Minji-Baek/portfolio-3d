import { SEventEmitter } from "../utils/EventEmitter";

const Description = (data,index) => {
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
  document.querySelector('#description').setAttribute('class', 'description');
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
      document.querySelector('#description').removeAttribute('class', 'description');
      document.querySelector('#description').setAttribute('class', 'description-end');
      // document.querySelector('#warning-button').removeAttribute('class','show');

      setTimeout(() => {
        setCloseDescriptionEle(event);
      }, 1.0*1000);
  }

  document.querySelector('.description-button').addEventListener('click', (event)=> closeDescription(event));

  const setCloseDescriptionEle = (event) => {
    if(!event) return;
    document.querySelector('#description').removeAttribute('class', 'description-end');
    document.querySelector('#description').setAttribute('class', 'disable');
    eventEmitter.clearDescription(index);
  }

}

export default Description;




// export default class Description {
//   constructor(data, index){
//     this.data = data;

//     const setDate = (date) => {
//       const startYYYY = date[0].slice(0,4);
//       const startDD = date[0].slice(4,6);
  
//       const EndYYYY = date[1].slice(0,4);
//       const EndDD = date[1].slice(4,6);
  
//       return `${startYYYY}.${startDD} ~ ${EndYYYY}.${EndDD}`;
//     }
    
//     this.date = setDate(this.data.date);

//     this.tech = `${this.data.Languege.join(`, `)} ${(this.data.UIFrameWork ?  this.data.UIFrameWork.join(`, `) : ' ')} `;
//     this.pitch = this.data.pitch.join(`\r\n `); 
//     this.detail =  this.data.detail.join(`\r\n `);
//     this.company = this.data.company.join(`, `);
//     this.role = this.data.role.join(`\r\n `);
//     // this.description = setDescriptionEle();
//   }

//   setDescriptionEle(){
//     document.querySelector('#description').removeAttribute('class', 'disable');
//     document.querySelector('#description').setAttribute('class', 'description');

//     document.querySelector('.description-title #title').textContent = this.data.title;
//     if(this.data.subtitle){
//       document.querySelector('.description-title #subtitle').textContent = this.data.subtitle
//     }
    
//     document.querySelector('.description-title-wrapper #description').textContent = this.detail;

//     document.querySelector('.description-column #date').textContent = this.date;
//     document.querySelector('.description-column #tech').textContent = this.tech;
//     document.querySelector('.description-column #pitch').textContent = this.pitch;
//     document.querySelector('.description-column #company').textContent = this.company;
//     document.querySelector('.description-column #role').textContent = this.role;

//     const closeDescription = (event) =>{
//       if(!event) return;
//         document.querySelector('#description').removeAttribute('class', 'description');
//         document.querySelector('#description').setAttribute('class', 'description-end');
//         setTimeout(() => {
//           this.setCloseDescriptionEle(event)
//         }, 2.0*1000);
//     }

//     document.querySelector('.description-button').addEventListener('click', (event)=> closeDescription(event));
//     // return true;
//   }

//   setCloseDescriptionEle(event){
//     if(!event) return false;
//     document.querySelector('#description').removeAttribute('class', 'description-end');
//     document.querySelector('#description').setAttribute('class', 'disable');
//     return true;
//   }
  
// }

export default class Description {
  constructor(data, index){
    this.data = data;

    const setDate = (date) => {
      const startYYYY = date[0].slice(0,4);
      const startDD = date[0].slice(4,6);
  
      const EndYYYY = date[1].slice(0,4);
      const EndDD = date[1].slice(4,6);
  
      return `${startYYYY}.${startDD} ~ ${EndYYYY}.${EndDD}`;
    }
    
    this.date = setDate(this.data.date);

    this.tech = `${this.data.Languege.join(`, `)} ${(this.data.UIFrameWork ?  this.data.UIFrameWork.join(`, `) : ' ')} `;
    this.pitch = this.data.pitch.join(`,\n `); 
    this.detail =  this.data.detail.join(`, `);
    this.company = this.data.company.join(`, `);
    this.role = this.data.role.join(`,\n `);
    // this.description = setDescriptionEle();
  }

  setDescriptionEle(){
    document.querySelector('#description').removeAttribute('class', 'disable');
    document.querySelector('#description').setAttribute('class', 'description');

    document.querySelector('.description-title #title').textContent = this.data.title;
    document.querySelector('.description-title #description').textContent = this.data.detail;

    document.querySelector('.description-info-content #date').textContent = this.date;
    document.querySelector('.description-info-content #tech').textContent = this.tech;
    document.querySelector('.description-info-content #pitch').textContent = this.pitch;
    document.querySelector('.description-info-content #company').textContent = this.company;
    document.querySelector('.description-info-content #role').textContent = this.role;

    const closeDescription = () =>{
      document.querySelector('#description').removeAttribute('class', 'description');
      document.querySelector('#description').setAttribute('class', 'description-end');
      setTimeout(() => {
        document.querySelector('#description').removeAttribute('class', 'description-end');
        document.querySelector('#description').setAttribute('class', 'disable');

      }, 2.0*1000);
    }

    document.querySelector('.description-button').addEventListener('click', closeDescription);

    return true;
  }
  
}
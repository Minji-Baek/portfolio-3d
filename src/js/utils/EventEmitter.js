import EventEmitter3 from 'eventemitter3';

export class EventEmitter {
  eventEmitter = new EventEmitter3();

  clearCarrerDescription(index){
    this.eventEmitter.emit('clearCarrerDescription', index);
  }

  onClearCarrerDescription(callBackFunc) {
    this.eventEmitter.on('clearCarrerDescription', callBackFunc);
  }

  clearProDescription(){
    this.eventEmitter.emit('clearProDescription');
  }

  onClearProDescription(callBackFunc) {
    this.eventEmitter.on('clearProDescription', callBackFunc);
  }


  initProject(){
    this.eventEmitter.emit('initProject');
  }

  onInitProject(callBackFunc) {
    this.eventEmitter.on('initProject', callBackFunc);
  }

  
  destroyProject(){
    this.eventEmitter.emit('destroyProject');
  }

  onDestroyProject(callBackFunc) {
    this.eventEmitter.on('destroyProject', callBackFunc);
  }
  

  initCarrer(){
    this.eventEmitter.emit('initCarrer');
  }

  onInitCarrer(callBackFunc) {
    this.eventEmitter.on('initCarrer', callBackFunc);
  }

  
  destroyCarrer(){
    this.eventEmitter.emit('destroyCarrer');
  }

  onDestroyCarrer(callBackFunc) {
    this.eventEmitter.on('destroyCarrer', callBackFunc);
  }



  initToy(){
    this.eventEmitter.emit('initToy');
  }

  onInitToy(callBackFunc) {
    this.eventEmitter.on('initToy', callBackFunc);
  }

  destroyToy(){
    this.eventEmitter.emit('destroyToy');
  }

  onDestroyToy(callBackFunc) {
    this.eventEmitter.on('destroyToy', callBackFunc);
  }

  initAbout(){
    this.eventEmitter.emit('initAbout');
  }

  onInitAbout(callBackFunc) {
    this.eventEmitter.on('initAbout', callBackFunc);
  }

  destroyAbout(){
    this.eventEmitter.emit('destroyAbout');
  }

  onDestroyAbout(callBackFunc) {
    this.eventEmitter.on('destroyAbout', callBackFunc);
  }
}

export const SEventEmitter = new EventEmitter();
import EventEmitter3 from 'eventemitter3';

export class EventEmitter {
  eventEmitter = new EventEmitter3();

  clearDescription(index){
    this.eventEmitter.emit('clearDescription', index);
  }

  onClearDescription(callBackFunc) {
    this.eventEmitter.on('clearDescription', callBackFunc);
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

  initAbout(){
    this.eventEmitter.emit('initAbout');
  }

  onInitAbout(callBackFunc) {
    this.eventEmitter.on('initAbout', callBackFunc);
  }
}

export const SEventEmitter = new EventEmitter();
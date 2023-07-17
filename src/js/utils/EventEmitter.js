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



  initCard(){
    this.eventEmitter.emit('initCard');
  }

  onInitCard(callBackFunc) {
    this.eventEmitter.on('initCard', callBackFunc);
  }

  destroyCard(){
    this.eventEmitter.emit('destroyCard');
  }

  onDestroyCard(callBackFunc) {
    this.eventEmitter.on('destroyCard', callBackFunc);
  }

  
  initCharactor(){
    this.eventEmitter.emit('initCharactor');
  }

  onInitCharactor(callBackFunc) {
    this.eventEmitter.on('initCharactor', callBackFunc);
  }

  destroyCharactor(){
    this.eventEmitter.emit('destroyCharactor');
  }

  onDestroyCharactor(callBackFunc) {
    this.eventEmitter.on('destroyCharactor', callBackFunc);
  }

  
  initEarth(){
    this.eventEmitter.emit('initEarth');
  }

  onInitEarth(callBackFunc) {
    this.eventEmitter.on('initEarth', callBackFunc);
  }

  destroyEarth(){
    this.eventEmitter.emit('destroyEarth');
  }

  onDestroyEarth(callBackFunc) {
    this.eventEmitter.on('destroyEarth', callBackFunc);
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
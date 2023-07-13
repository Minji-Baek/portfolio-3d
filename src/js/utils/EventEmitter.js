import EventEmitter3 from 'eventemitter3';

export class EventEmitter {
  eventEmitter = new EventEmitter3();

  clearDescription(index){
    this.eventEmitter.emit('clearDescription', index);
  }

  onClearDescription(callBackFunc) {
    this.eventEmitter.on('clearDescription', callBackFunc);
  }

 
}

export const SEventEmitter = new EventEmitter();
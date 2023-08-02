const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('subscribe', () => {
  console.log('Thanks for Subsribing to College Wallah');
});

// Trigger the 'subscribe' event
myEmitter.emit('subscribe');
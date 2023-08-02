const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Event handler
const eventHandler = () => {
  console.log('Event handler called!');
};

// Register the event handler
myEmitter.on('myEvent', eventHandler);

// Call the event
myEmitter.emit('myEvent'); // Output: Event handler called!

// Remove the event handler
myEmitter.off('myEvent', eventHandler);

// Call the event again
myEmitter.emit('myEvent'); // No output

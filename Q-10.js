// Get the default maximum number of event listeners
const EventEmitter = require('events');
const defaultMaxListeners = EventEmitter.defaultMaxListeners;
console.log('The default maximum number of event listeners is:', defaultMaxListeners);

// Set the maximum number of event listeners to 5
EventEmitter.defaultMaxListeners = 5;
console.log('The updated maximum number of event listeners is:', EventEmitter.defaultMaxListeners);
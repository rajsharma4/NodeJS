// Q--1
// created a package.json file 

// Q--2 
const fs = require('fs');

fs.writeFile("nodejs_architecture.txt", "Node.js is a runtime environment that uses a single-threaded event loop and non-blocking I/O operations, making it suitable for building scalable and high-performance server-side applications. It is widely used for its efficiency in handling concurrent connections and real-time applications.", (err) => {
    if (err) {
        console.log("Error in creating file.", err);
    } else {
        console.log("Your file created Succefully! ");
    }
})

// Q----3
fs.readFile("nodejs_architecture.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error in reading file.", err);
    } else {
        console.log(data);
    }
})

// Q--4 
fs.appendFile("nodejs_architecture.txt", "** Here are some advantage of NodeJs,  Node.js is an event-driven, non-blocking, and lightweight JavaScript runtime that allows for efficient server-side application development. Its key advantages include high performance due to the V8 engine, asynchronous programming capabilities, and scalability for handling concurrent connections. It is particularly well-suited for building real-time applications, microservices, and APIs.", (err) => {
    if (err) {
        console.log("There is an issue in appending content.", err);
    }
})

// Q--5
fs.unlink("nodejs_architecture.txt", (err) => {
    if (err) {
        console.log("There is an error in deleting file.");
    }
     console.log("File Deleted SuccessFully!");
})
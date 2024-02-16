"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hyper_express_1 = require("hyper-express");
var webserver = new hyper_express_1.Server();
// Create GET route to serve 'Hello World'
webserver.get('/', function (request, response) {
    response.send('Hello World');
});
// Activate webserver by calling .listen(port, callback);
webserver
    .listen(3001)
    .then(function (socket) { return console.log("Webserver started on port 3001"); })
    .catch(function (error) { return console.log("Failed to start webserver on port 3001"); });

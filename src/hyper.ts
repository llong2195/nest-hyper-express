import { Server } from 'hyper-express';
const webserver = new Server();

// Create GET route to serve 'Hello World'
webserver.get('/', (request, response) => {
  response.send('Hello World');
});

// Activate webserver by calling .listen(port, callback);
webserver
  .listen(3001)
  .then((socket) => console.log(`Webserver started on port 3001`))
  .catch((error) => console.log(`Failed to start webserver on port 3001`));

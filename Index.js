const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.iniciar;
handle['/iniciar'] = requestHandlers.iniciar;
handle['/subir'] = requestHandlers.subir;

server.iniciar(router.route, handle);


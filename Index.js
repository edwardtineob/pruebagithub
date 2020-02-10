const server = require('./server');
const router = require('./router');
const requestHandler = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandler.iniciar;
handle['/iniciar'] = requestHandler.iniciar;
handle['/subir'] = requestHandler.subir;

server.iniciar(router.route, handle);


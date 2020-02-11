function route(handle, pathname) {
    console.log("A punto de rutear una peticion para " + pathname);
    handle();
  }

  // import { routes  } from './requestHandlers';
  

  exports.route = route;
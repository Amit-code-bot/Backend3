const jsonServer = require("json-server")// importing json-server library
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ 
  static: path.join(__dirname, '../Ecommerce/public') 
});
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);
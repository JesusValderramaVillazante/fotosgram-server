"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const server = new server_1.Server();
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});

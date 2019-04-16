"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const mongoose_1 = __importDefault(require("mongoose"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.Server();
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use('/user', usuario_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err)
        throw err;
    console.log('base de datos online');
});
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});

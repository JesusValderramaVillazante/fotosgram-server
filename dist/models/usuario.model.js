"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: [true, ' el nombre es necesario'] },
    avatar: { type: String, default: 'av-1.png' },
    email: { type: String, unique: true, required: [true, 'el correo es necesario'] },
    password: { type: String, required: [true, 'la contraseña es necesarioa'] }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);

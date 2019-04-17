import { Server } from './classes/server';
import mongoose from 'mongoose';
import userRoutes from './routes/usuario';
import bodyParser from 'body-parser';
import postRoutes from './routes/post';
import fileUpload from 'express-fileupload';

const server = new Server();

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use(fileUpload({useTempFiles: true}));
server.app.use('/user', userRoutes);
server.app.use('/post', postRoutes);

mongoose.connect('mongodb://localhost:27017/fotosgram', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) throw err;
    console.log('base de datos online');
});

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`)
});
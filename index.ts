import { Server } from './classes/server';
import mongoose from 'mongoose';
import userRoutes from './routes/usuario';

const server = new Server();

server.app.use('/user', userRoutes);

mongoose.connect('mongodb://localhost:27017/fotosgram', {useNewUrlParser: true, useCreateIndex: true}, (err) => {
    if(err) throw err;
    console.log('base de datos online');
});

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`)
});
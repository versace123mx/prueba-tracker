import express from 'express'
import dotenv from "dotenv";
import { dbConecction } from "./database/connection.js";
import { routeTraker } from "./router/index.js"

dotenv.config(); //iniciando variables de entorno
dbConecction(); //conexion base de datos Mongo

const app = express()
const puerto = process.env.PUERTO_EXPRESS || 3000;


//Convertir body a objeto de js, cuando se mandan datos en postman -> body -> row JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}))//para recibir datos desde un formulario si carga de imagenes postman -> body -> x-www-form-urlencoded o form-data


// http://localhost:3000   <-> esta ruta en el navegador devuelve Hello Worl por que es por GET
app.get('/', function (req, res) {
    res.send('Hello World')
})

/* http://localhost:3000/pruebatrack?latitud=312.245&longitud=25145.23 <-> esta ruta es donde tu debes mandar 
la latitud y la longitud,donde van los numeros de latitud y longitud ahi tienes que pasar tus valores
y cuando se los pases en tu programa como esta esa url y llegue al servidor de express este mandara un mensaje en consola
mostrando los valores de latitud y longitud, con esto comprovamos que si recibimos los datos cada xx tiempo desde el dispositivo
Nota: cambia el localhost por la ip publica https://nordvpn.com/es-mx/what-is-my-ip/ ahi te dice cual es la ip publica
y solo falta que abras el router (modem) y le digas que tu maquina es un servidor web, como te mostre la vez pasada.
Con eso ya tu maquina servidor de node con express estara publico a todo internet.
*/
app.use('/pruebatrack',routeTraker)

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        errors: [{ msg: 'Ruta no encontrada 1' }]
    });
});

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log(`El servidor de espress esta funcionando en el puerto ${puerto}`);
});
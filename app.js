import express from 'express'
const app = express()

// http://localhost:3000   <-> esta ruta en el navegador devuelve Hello Worl por que es por GET
app.get('/', function (req, res) {
    res.send('Hello World')
})

/* http://localhost:3000/pruebatrack?latitud=312.245&longitud=25145.23 <-> esta ruta es donde tu debes mandar 
la latitud y la longitud,donde van los numeros de latitud y longitud ahi tienes que pasar tus valores
y cuando se los pases en tu programa como esta esa url y llegue al servidor de express este mandara un mensaje en consola
mostrando los valores de latitud y longitud, con esto comprovamos que si recibimos los datos cada xx tiempo desde el dispositivo
Nota: cambia el localhost por la ip publica https://nordvpn.com/es-mx/what-is-my-ip/ ahi te dice cual es la ip
y solo falta que abras el router (modem) y le digas que tu maquina es un servidor web, como te mostre la vez pasada.
Con eso ya tu maquina servidor de node con express estara publico a todo internet.
*/
app.post('/pruebatrack', (req, res) =>{
    const {latitud , longitud} = req.query

    console.log(latitud, longitud)
    return
})

app.listen(3000)
const express = require('express')

const app = express();


// app.use()

app.get('/', (req, res) =>{
    res.send('Bienvenido a NodeJs')
})

// activa el servidor en modo escucha para captar todo lo que sucede en el servidor.
app.listen(8000, () =>{
    console.log('Servidor en linea en el puerto 8000');
})

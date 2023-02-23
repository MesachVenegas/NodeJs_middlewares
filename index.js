const express = require('express')

const app = express();


app.use(express.json());

// solo se puede tener una respuesta por middleware.
app.get('/',
    (req, res, next) =>{
        // res.send('Bienvenido a NodeJs')
        console.log('Me ejecuto primero');
        next();
    },
    (req, res) => {
        res.send('Soy la segunda ejecución')
        console.log('Me ejecuto segundo');
    }
);

// activa el servidor en modo escucha para captar todo lo que sucede en el servidor.
app.listen(8000, () =>{
    console.log('Servidor en linea en el puerto 8000');
})

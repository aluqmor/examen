const express = require('express'); 
const cors = require('cors'); 
const app = express(); 

let estadoActual = []; // Variable para almacenar el estado actual

app.use(express.json()); 
app.use(cors()); 

// Ruta para guardar el estado
app.post('/guardarEstado', (req, res) => {
    estadoActual = req.body; 
    res.status(200).send('Guardado'); 
});

// Ruta para recuperar el estado
app.get('/recuperarEstado', (req, res) => {
    res.status(200).json(estadoActual); 
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
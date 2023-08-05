const express = require('express');
const WebSocket = require('ws');
const nodemailer = require("nodemailer");

const app = express();

// Configura una ruta para manejar solicitudes HTTP normales
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/inicio.html');
});

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/registro.html');
});

app.use(express.static(__dirname));

// Configura un servidor WebSocket
const wss = new WebSocket.Server({ noServer: true });

// Crea el servidor HTTP utilizando Express.js
const server = app.listen(3000, () => {
    console.log('Servidor HTTP escuchando en el puerto 3000');
});

// Asocia el servidor WebSocket con el servidor HTTP
server.on('upgrade', (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
    });
});

/**
 * Enviar el correo
 */


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    user: "globalcoinadso@gmail.com",
    pass: "nrxkahshdahbssnz",
    },
});

app.use(express.json());


app.post('/enviar-correo', (req, res) => {
    // console.log(req);
    console.log(req.body);
    const mailOptions = req.body;
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error al enviar el correo:", error);
        res.send("Error al enviar el correo");
    } else {
        console.log("Correo enviado correctamente:", info.response);
        res.send("Correo enviado correctamente");
    }
    });
});

// app.post('/enviar-correo', (req, res) => {
//     const mailOptions = {
//     from: "juanjo2003gg@gmail.com",
//     to: "juanjo2003gg@gmail.com",
//     subject: "Pa que vea",
//     text: "Soy bien crack",
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log("Error al enviar el correo:", error);
//         res.send("Error al enviar el correo");
//     } else {
//         console.log("Correo enviado correctamente:", info.response);
//         res.send("Correo enviado correctamente");
//     }
//     });
// });


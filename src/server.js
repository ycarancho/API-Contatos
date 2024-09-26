import http from 'http';
import express from 'express';
import apiRouter from './api-v1/api-router';
import bodyParser from 'body-parser';

const app = express();
const port = 5550;

//Associa o objeto recebido ao req.body
app.use(bodyParser.json());
// Associa os parametros de query string ao req.params
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', apiRouter)
app.use('/', (req, res, next) => { res.send(' -- API Contatos --') })

http.createServer(app).listen(port, () => {
    console.log(`Servidor on na porta ${port}`)
})
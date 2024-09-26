import express from 'express';
import { validate } from 'jsonschema'

import pessoaModel from '../models/pessoa-model';
import schemas from '../models/schemas'

const pessoaRouter = express.Router();

pessoaRouter.get('/', listarPessoas);
pessoaRouter.post('/', inserirPessoa);

function listarPessoas(req, res, next) {
    pessoaModel.listar({}, (err, lista) => {
        if (!err) {
            res.json(lista);
        } else {
            res.status(400).send(err.message);
        }
    })
}

function inserirPessoa(req, res, next) {
    const result = validate(req.body, schemas.pessoaSchema)
    if (result.errors.length > 0) {
        res.status(400).json("O objeto não está de acordo com o SCHEMA");
        return;
    }

    pessoaModel.criar(req.body, (err, novoObj) => {
        if (!err) {
            res.status(201).json(novoObj);
        } else {
            res.status(400).send(err.message);
        }
    })
}


export default pessoaRouter;
import db from '../utils/db'

function listar(prams, callback) {
    db.pessoasDB.find({}, callback);
}
function criar(obj, callback) {
    db.pessoasDB.insert(obj, callback)
}
function alterar() {

}
function remover() {

}

export default {
    listar,
    criar,
    alterar,
    remover
}
import DataStore from 'nedb';

const pessoasDB = new DataStore();
const organizacaoDB = new DataStore();

export default {
    pessoasDB,
    organizacaoDB,
}
const { MongoClient }= require('mongodb');
const { config } = require('../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retrywrites=true&w=majority`;

class MongoLib{
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }
    connect(){
        if(!MongoLib.connection){
            MongoLib.connection =new Promise((resolve, reject) => {
                this.client.connect(err =>{
                    if(err){
                        reject(err);
                    }
                    console.log('Connected Succesfully to mongo');
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return MongoLib.connection;
    }
    get(collection, id){
        return this.connect().then(db=>{
            return db.collection(collection).findOne({ id_ticket: id });
        })
    }
    getAll(collection, query){
        return this.connect().then(db=>{
            return db.collection(collection).find(query).toArray();
        })
    }
    create(collection, data){
        return this.connect().then(db=>{
            return db.collection(collection).insertOne(data);
        }).then(result => result.instertedId);
    }
    update(collection, id, data){
        return this.connect().then(db=>{
            return db.collection(collection).updateOne({ id_ticket: id }, { $set:data }, { upsert:true });
        }).then(result => result.updatedId || id);
    }
    delete(collection, id){
        return this.connect().then(db=>{
            return db.collection(collection).deleteOne({ id_ticket: id });
        }).then(() => id);
    }
}

module.exports = MongoLib;
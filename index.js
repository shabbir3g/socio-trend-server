const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



// middleware 

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tg4nc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run(){
    try{
        await client.connect();
        // database name
        const database = client.db("SocioTrend");
        // database collection
        const usersCollection = database.collection('users');



    }
    finally{
       // await client.close();
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Socio Trend Server is Running!')
})

app.listen(port, () => {
  console.log(`Socio Trend Server listening on port ${port}`)
})
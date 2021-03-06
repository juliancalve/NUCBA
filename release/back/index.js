const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const UserSchema = require('./Schemas/UserSchema');
const { generateJWT } = require('./utils/jwt');
// mongodb+srv://<username>:<password>@cluster0.7vpom.mongodb.net/myFirstDatabase
// const uri ="mongodb+srv://:@firstcluster.4rc4s.mongodb.net/<dbname>?retryWrites=true&w=majority";
const uri = "mongodb+srv://pepitopepe1994:pass1357@cluster0.7vpom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//retryWrites=true&w=majority
const dbConnection = async () => {

    try {
        mongoose.connect( uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;

        db.on( 'error', ( error ) => {
            console.log( error );
        });

        db.once( 'open', () => {
            console.log( 'db open' );
        });

        console.log( 'db online' );
    
    } catch ( error ) {
        console.log( error );
        throw new Error( error );
    }
};

dbConnection();

const PORT = process.env.PORT || 3100;

app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/hola', (req, res) => {
    res.send('Chau');
});

app.post('/api/user', async (req, res) => {
    try {
        const { email, password, age, firstName, lastName } = req.body;
        const token = await generateJWT({ firstName, lastName, email });
        const user = await new UserSchema({ email, password, age, firstName, lastName, token }).save();
        res.send(user);
    } catch( error ) {
        res.send(error);
    }
});

app.get('/api/user', async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.send({ data: users });
    } catch(error) {
        res.send(error);
    }
});

app.get('/api/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserSchema.findOne({ _id: id });
        res.send({ data: user })
    } catch( error ){
        res.send(error);
    }
});

app.delete('/api/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await UserSchema.findOneAndUpdate({ _id: id }, { enabled: false });
        res.send(!!deleted);
    } catch( error ){
        res.send(error);
    }
});

app.get('/api/user/enable/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await UserSchema.findOneAndUpdate({ _id: id }, { enabled: true });
        res.send(!!deleted);
    } catch( error ){
        res.send(error);
    }
});

app.listen(PORT, () => {
    console.log(`La app esta corriendo en el puerto ${PORT}`);
})
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3100;
const mongoose = require('mongoose');
// Schemas
const { UserModel } = require('./schemas/User');
// config routes
app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );
app.use( cors() );

// connect db
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('me conecte');
    } catch( error ){
        console.log(error)
    }
}

connectDB();

//routes
app.post('/api/user', async (req, res) => {
    const { email, password, age } = req.body;
    const created = await new UserModel({email, password, age}).save();

    res.send(created);
});

app.get('/api/user', async (req, res) => {
    const users = await UserModel.find();

    res.send({ users });
})

app.delete('/api/user/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await UserModel.findOneAndDelete({ _id: id });
    res.send(!!deleted);
});

app.put('/api/user/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const updated = await UserModel.findOneAndUpdate({ _id: id }, { email });
    res.send(!!updated);
});

app.listen(PORT, () => {
    console.log(`Estoy corriendo en el puerto ${PORT}`);
});

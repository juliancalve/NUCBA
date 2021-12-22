const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: [true, 'Che pasame el email'], unique: true },
    password: { type: String, required: [true, 'Pasame la pass'] },
    age: { type: Number, default: 20 },
    createdDate: { type: Date, default: new Date() }
});

// Este metodo es para evitar traer algunos campos de la db
UserSchema.methods.toJSON = function() {
    // Estos son los campos que evitamos
    const { __v, password, _id, createdDate, ...user } = this.toObject();

    // Aca ese te user, es lo que si se va a traer de la db
    user.id = _id;
    return user
}

const UserModel = model('Users', UserSchema)

module.exports = { UserModel };
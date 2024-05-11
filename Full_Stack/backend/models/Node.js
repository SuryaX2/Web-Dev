//const { type } = require('@testing-library/user-event/dist/type')
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.model('User', UserSchema);
export default User;
// User.createIndexes();
// module.exports = User;
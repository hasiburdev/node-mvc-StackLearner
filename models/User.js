import {Schema, model} from 'mongoose'
import Profile from './Profile'

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: Profile
    },    
},{ timestamps: true })

const User = model('User', UserSchema)
module.exports = User

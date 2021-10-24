import { Schema, model } from 'mongoose'
import Post from './Post'
import User from './User'

const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: User
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePic: {
        type: String
    },
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String,
        codepen: String
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: Post
    }],
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: Post
    }]
},{ timestamps: true })

const Profile = model('Profile', profileSchema)
module.exports = Profile
import {Schema, model} from 'mongoose'
import Post from './Post'
import User from './User'

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: Post
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    body: {
        type: String,
        trim: true,
    },
    replies: [{
        body: {
            type: String,
            trim: true,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: User,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    }]
}, { timestamps: true })
const Comment = model('Comment', commentSchema)
module.exports = Comment
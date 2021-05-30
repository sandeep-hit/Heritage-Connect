import mongoose from 'mongoose';
import Comments from './commentSchema.js';
const postSchema = mongoose.Schema({
    title: String,
    message : String,
    creator: String,
    tags: [String],
    selectedFile:String,
    likeCount :{
      type : Number,
      default:0
    },
    comments :[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments'
    }],
    createdAt:{
      type: Date,
      default: new Date()
    }
});

const PostMessage=mongoose.model('PostMessage',postSchema);
export default PostMessage;
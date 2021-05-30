import mongoose from 'mongoose';
const commentSchema = mongoose.Schema({
  comment: {
      type: String,
      required: true
  },
  author: {
      type: mongoose.Schema.Types.ObjectId
      // ref: 'User'
  },
  createdAt:{
    type: Date,
    default: new Date()
  }
});

const Comments=mongoose.model('Comments',commentSchema);
export default Comments;
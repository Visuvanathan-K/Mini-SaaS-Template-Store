import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},description:{type:String,required:true},thumbnail_url:{type:String,required:true},category:{type:String,required:true}},{timestamps:true});
export default mongoose.model('Template',schema);

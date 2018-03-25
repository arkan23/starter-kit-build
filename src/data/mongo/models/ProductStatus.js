import mongoose from 'mongoose';


//const {Schema}=mongoose;
const StatusSchema=new mongoose.Schema({
  _id: String,
  name : String,
});
//hjgjhg

export default mongoose.model("Productstatus",StatusSchema);
//export default mongoose.model("Articletest",ArticleSchema);

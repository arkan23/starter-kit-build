import mongoose from 'mongoose';

//const {Schema}=mongoose;

const ArticleSchema=new mongoose.Schema({
  //_id: String,
  name : {type: String, ref: 'Order'},
  template : {type: String, ref: 'ArticleTemplate'},
  snsSourse:{
      "0":{
        id: String,
        name: String,
        alphavit: String,
        length: Number,
      },
      "2":{
        id: String,
        name: String,
        alphavit: String,
        length: Number,
        gs1Prefix: String,
      },
      "3":{
        id: String,
        name: String,
        alphavit: String,
        length: Number,
        gs1Prefix: String,
      },
  },
  gtin : String,
  expiryPeriod : Number,
  special: Number,
});

export default mongoose.model("Articles",ArticleSchema);

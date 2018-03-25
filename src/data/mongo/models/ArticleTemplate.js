import mongoose from 'mongoose';

//const {Schema}=mongoose;

const ArticleSchema=new mongoose.Schema({
  
  name : String,
  aggregation : {
    "0":{
      displayName: String,
      childCount: Number,
    },
    "2":{
      displayName: String,
      childCount: Number,
    },
    "3":{
      displayName: String,
      childCount: Number,
    }
  },
  gs1Data:{
    "0":{
      "10":{
        name: String,
        displayName: String,
        _type: String,
        writable: Number,
      },
      "17":{
        name: String,
        displayName: String,
        _type: String,
        writable: Number,
      },
      "01":{
        name: String,
        displayName: String,
        _type: String,
        writable: Number,
      },
    },
    "2":{
      "10":{
        name: String,
        displayName: String,
        _type: String,
        writable: Number,
      },
      "02":{
        name: String,
        displayName: String,
        _type: String,
        writable: Number,
      },
    },
    "3":{
      "10":{
        name: String,
        displayName: String,
        _type: String,
        writable: Number,
      }
    }
  },
},{
  "timestamps":true
});
//hjgjhg

export default mongoose.model("ArticleTemplate",ArticleSchema);
//export default mongoose.model("Articletest",ArticleSchema);

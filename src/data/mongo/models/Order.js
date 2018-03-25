/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
  gs1Data:{
    "0":{
      "10": String,
      "17": String,
      "01": String,
    },
    "2":{
      "10": String,
      "02": String,
    },
    "3":{
      "10": String,
    },
  },
  created: { type: Date, default: Date.now },
  credentials: Number,
  article: {type: String, ref: 'Articles'},
  expireDate: Date,
  quantity: Number,
  batchNumber: String,
  name: String,
  comments: String,
  creator: {type: String, ref: 'Users'},
  status: {type: Number, ref: 'OrderStatus'},
  line: {type: String, ref: 'Line'},
  snCount:{
    "0":{
        "1": Number,
        "2": Number,
        "3": Number,
        "4": Number,
        "5": Number,
    },
    "1":{
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number,
    },
    "2":{
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number,
    },
    "3":{
      "1": Number,
      "2": Number,
      "3": Number,
      "4": Number,
      "5": Number,
    },
  }
  /*text: String,
  count: { type: Number, min: 0 },
  date: { type: Date, default: Date.now }*/
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Order', OrdersSchema);

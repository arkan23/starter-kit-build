/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema(
{
  _id:  String,
  order: { type: String, ref: 'Order'},
  article:   { type: String, ref: 'Article'},
  aggregation: Number,
  status: { type: Number, ref: 'ProductStatus'},
  serialized: Date,
  line: { type: String, ref: 'Line'},
  parent: String,
},{
  timestamp: true
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Product', ProductsSchema);

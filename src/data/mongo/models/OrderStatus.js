/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  _id: Number,
  name: String,
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('OrderStatus', OrderSchema);

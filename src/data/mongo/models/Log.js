/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  _id: String,
  model: String,
  id: String,
  userId: String,
  name: String,
  err: String,
},{
  "timestamps":true
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Log', LogSchema);

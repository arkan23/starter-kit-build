/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const LineSchema = new mongoose.Schema(
{
  _id:  String,
  name: String,
  devices: String,
  state: String,
  order: String,
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Line', LineSchema);

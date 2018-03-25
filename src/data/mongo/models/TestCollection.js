/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const CollectionSchema = new mongoose.Schema(
{
  title:  String,
  author: String,
  body:   String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('TestCollection', CollectionSchema);

/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema(
{
  _id:  String,
  name: String,
  type: String,
  vid: String,
  pid: String,
  state: String,
  autoConnect: Number,
  log: Number,
  host: String,
  port: String,
  enableLogging: Boolean,
  liveSNUpdate: Boolean,
  productionArea: String,
  samplesArea: String,
  order: String,
  orderName: String,
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Device', DeviceSchema);

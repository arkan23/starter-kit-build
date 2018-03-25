/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    phone: String,
    token: String,
    createdAt: { type: Date, default: Date.now },
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('User', UserSchema);

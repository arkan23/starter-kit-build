import mongoose from 'mongoose';
import loadModels from './models';

export default () => {
    // Find the appropriate database to connect to, default to localhost if not found.
    const connect = () =>
        new Promise((resolve, reject) => {
            mongoose.Promise = require('bluebird');
            mongoose.set('debug', false);
            const dbURI = 'mongodb://localhost:27017/salex';

            // Create the database connection
            // setTimeout(()=>{mongoose.connect(dbURI,{ useMongoClient: true, })},6000)
            mongoose.connect(dbURI);

            // CONNECTION EVENTS
            // When successfully connected
            resolve(
                mongoose.connection.on('connected', () => {
                    console.log(`Mongoose default connection open to ${dbURI}`);
                }),
            );

            // If the connection throws an error
            reject(
                mongoose.connection.on('error', err => {
                    console.log(`Mongoose default connection error: ${err}`);
                }),
            );

            // When the connection is disconnected
            mongoose.connection.on('disconnected', () => {
                console.log('Mongoose default connection disconnected');
            });
        });

    connect();

    loadModels();
};

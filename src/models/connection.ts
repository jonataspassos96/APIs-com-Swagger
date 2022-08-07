import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
) => mongoose.connect(mongoDatabaseURI as string);

export default connectToDatabase;

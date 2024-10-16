import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://bob123:bob123@cluster0.kugpsyk.mongodb.net/proshop'
    );
    console.log('MongoDb connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

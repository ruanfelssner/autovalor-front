import connectDB from '../config/mongoose';

export default defineNitroPlugin(async () => {
  await connectDB();
});
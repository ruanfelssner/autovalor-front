import connectDB from '../config/mongoose';

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()
  console.log(config)
  await connectDB();
});
import mongoose from 'mongoose';
import { useRuntimeConfig } from '#imports';
import chalk from 'chalk';

const connectDB = async () => {
  const config = useRuntimeConfig();

  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(config.mongoUri);
      console.log(chalk.green(`✔`), 'MongoDB conectado');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
  }
};

export default connectDB;
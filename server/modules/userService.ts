import { UserModel } from '../models/user';

export const getUsers = async () => {
  return UserModel.find();
};

export const createUser = async (data: any) => {
  const user = new UserModel(data);
  return user.save();
};
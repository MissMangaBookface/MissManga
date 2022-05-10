import { Document } from 'mongoose';

export interface CreateUser extends Document {
  username: String;
  password: String;
  email: String;
  active: Boolean;
}

export interface ReadUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

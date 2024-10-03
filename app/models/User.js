// Import Dependencies
import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: [40, 'Name should be under 40 characters.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      validate: [validator.isEmail, 'Please enter email in correct format'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Password should be of atleast 6 characters.'],
    },
    role: {
      type: [{ type: String, enum: ['admin', 'user'] }],
      default: ['user'],
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);
export default User;

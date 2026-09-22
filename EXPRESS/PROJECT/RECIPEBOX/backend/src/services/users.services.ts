import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  if (!/\d/.test(password)) {
    throw new Error("Password must contain at least one number");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    throw new Error("Password must contain at least one special character");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    passwordHash,
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const existingUser = await User.findOne({ email });

  if (existingUser !== null) {
    const isMatch = await bcrypt.compare(password, existingUser.passwordHash);

    if (isMatch) {
      const token = jwt.sign(
        {
          userId: existingUser._id.toString(),
        },
        process.env.JWT_SECRET!,
        {
          expiresIn: "1h",
        },
      );

      return {
        user: existingUser,
        token,
      };
    }

    return null;
  }

  return null;
};

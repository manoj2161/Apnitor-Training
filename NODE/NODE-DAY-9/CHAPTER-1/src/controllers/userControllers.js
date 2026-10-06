import bcrypt from "bcrypt";
import { User } from "../Model/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const nameRegex = /^[A-Za-z '-]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,64}$/;
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    name === undefined ||
    email === undefined ||
    password === undefined
  ) {
    return res.status(400).json({
      message: "Invalid data entry",
      status: false,
      statusCode: 400,
    });
  }
  if (name.trim() === "") {
    return res.status(400).json({
      message: "Name should not be empty",
      status: false,
      statusCode: 400,
    });
  } else if (name.length < 3) {
    return res.status(400).json({
      message: "Name should be atleast 3 characters",
      status: false,
      statusCode: 400,
    });
  } else if (name.length > 50) {
    return res.status(400).json({
      message: "Name should not exceed 50 characteres",
      status: false,
      statusCode: 400,
    });
  } else if (!nameRegex.test(name)) {
    return res.status(400).json({
      message: "Invalid name",
      status: false,
      statusCode: 400,
    });
  }
  if (email.trim() === "") {
    return res.status(400).json({
      message: "Email should not be empty",
      status: false,
      statusCode: 400,
    });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
      status: false,
      statusCode: 400,
    });
  }
  if (password.trim() === "") {
    return res.status(400).json({
      message: "Password should not be empty",
      status: false,
      statusCode: 400,
    });
  } else if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must contain uppercase, lowercase, number, special character, and be 8-64 characters long",
      status: false,
      statusCode: 400,
    });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({
      message: "User already exists",
      status: false,
      statusCode: 409,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 16);
  const newUser = {
    name,
    email,
    password: hashedPassword,
  };
  await User.create(newUser);
  res.status(201).json({
    message: "User created successfully",
    status: true,
    statusCode: 201,
  });
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (
    email === "" ||
    email === undefined ||
    password === "" ||
    password === undefined
  ) {
    return res.status(400).json({
      message: "Invalid fields",
      status: false,
      statusCode: 400,
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "User does not exists",
      status: false,
      statusCode: 401,
    });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({
      message: "Invalid email or password",
      status: false,
      statusCode: 401,
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15s",
    },
  );
  res.status(200).json({
    message: "Fetched User data",
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token: token,
    status: true,
    statusCode: 200,
  });
};
export const getUserProfile = async (req, res) => {
  const id = req.user.userId;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: false,
        statusCode: 404,
      });
    }
    res.status(200).json({
      message: "User data fetched successfully",
      data: {
        name: user.name,
        email: user.email,
      },
      status: true,
      statusCode: 200,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      statusCode: 500,
    });
  }
};

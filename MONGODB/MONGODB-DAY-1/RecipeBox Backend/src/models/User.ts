import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 30,
      match: /^(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 30,
      match: /^(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      validate: {
        validator: function (
          this: mongoose.Document & { password: string },
          value: string,
        ) {
          return value === this.password;
        },
        message: "Passwords do not match",
      },
    },
    isVerifies: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);

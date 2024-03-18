import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.checkPassword = async function (password) {
  return this.password === password;
};

export default mongoose.model("User", userSchema);

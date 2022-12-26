import User from "../model/userSchema.js";

// Sign Up/Log In
async function createSession(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password, avatar: "random" });
    return res.status(201).json({ success: true, msg: "User Created", user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
}

// Sign In/Log In
async function logSession(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: "Email or password incorrect" });
    }
    const isPasswordCorrect = await user.checkPassword(password);
    if (!isPasswordCorrect) {
      return res
        .status(404)
        .json({ success: false, msg: "Email or password incorrect" });
    }
    console.log(user);
    return res
      .status(201)
      .json({ success: true, msg: "User Successfully Logged In", user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
}

export { createSession, logSession };

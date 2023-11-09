import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signin = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ userName, email, password: hashedPassword });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully !", user: newUser });
  } catch (error) {
    next(error);
  }
};

import db from "../database.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const login = async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;
  
  try {
    //checking that email exists or not
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length == 0)
      res.status(404).json({ message: "No user found with that email" });

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Password is incorrect" });

    const id = user.id
    const name = user.name
    res
      .status(200)
      .json({ message: "You are logged in", user: { id,name, email } });
  } catch (err) {
    next(err);
  }
};
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    //checking that email exists
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length >= 1) {
      return res.status(404).json({ message: "Email already exists" });
    }

    //create user id
    const id = uuidv4();
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
      [id, name, email, hashedPassword]
    );

    res.status(201).send({ message: "User added successfuly.", user: { id, name, email } });
  } catch (err) {
    next(err);
  }
};

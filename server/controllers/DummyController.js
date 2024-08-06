import db from "../models/index.js";
const Users = db.models.users;

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

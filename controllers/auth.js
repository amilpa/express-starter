const Users = require("../models/user");
const statusCodes = require("http-status-codes");

const { BadRequestError, UnauthenticatedError } = require("../errors/index");

const registerUser = async (req, res) => {
  res.status(statusCodes.OK).json({ msg: "register user" });
};

const loginUser = async (req, res) => {
  res.status(statusCodes.OK).json({ msg: "login user" });
};

const logoutUser = async (req, res) => {
  res.status(statusCodes.OK).json({ msg: "logout user" });
};

module.exports = { registerUser, loginUser, logoutUser };

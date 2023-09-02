const express = require("express");
const router = express.Router();

const {
  getAllData,
  getData,
  createData,
  updateData,
  deleteData,
} = require("../controllers/data");

const auth = require("../middlewares/authentication");

//get record
router.get("/", auth, getAllData);
router.get("/:id", auth, getData);

//change record
router.post("/", auth, createData);
router.patch("/:id", auth, updateData);

//delete record
router.delete("/:id", auth, deleteData);

module.exports = router;

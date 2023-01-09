const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const userService = require("../services/user-service");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
var auth = require("../services/Authentication");
var checkrole = require("../services/checkRole");
const PasswordService = require("../services/PasswordService");
const jwt = require('jsonwebtoken')

router.post("/signup", function (req, res) {
  userService.doCreate(req, res);
});

router.post("/Checkemail", function (req, res) {
  userService.CheckEmail(req,res)
})
router.post("/checkId", function (req, res) {
  userService.CheckId(req,res)
})

router.post("/login", function (req, res) {
  userService.doLogin(req, res);
});

router.get("/getlogin", function (req, res) {
  userService.GetRole(req, res)
})

router.post("/forgotpassword", function (req, res) {
  PasswordService.ForgotPassword(req, res);
});
 router.put("/editprofile/:id", function (req, res) {
  userService.EditUserProfile(req,res)
 })

//GET USER DETAILS_ ROLE=USER
router.get("/getuserById/:id", (req, res) => {
  userService.GetUserById(req, res);
});

//Delete user row
router.delete("/deleteuser/:id", (req, res) => {
  userService.DeleteUserById(req, res);
});

router.get("/getallUsersWithMapping", (req,res) => {
  userService.GetAllDetailsWithMapping(req,res)
})
router.get("/getallusers", (req,res) => {
  userService.GetAllDetails(req,res)
})


module.exports = router;

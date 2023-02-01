const nodemailer = require("nodemailer");
const connection = require("../db/connection");
const Password= require('../services/password')

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const PasswordService = {
  ForgotPassword: (req, res) => {
    let user = req.body;
    query = "select first_name,email,password,iv from user where email=?";
    connection.query(query, [user.email], (err, results) => {
      if (!err) {


        
        // let password = Password.encrypt(req.body.password)
        // let test=results[0].password
        // let iv=results[0].iv;
        // console.log("ggg",Object.assign(iv, test))
        // let encrypts=results[0].password
        // let decrypt=Password.decrypt(iv,test)
      
        // let password =AES_ENCRYPT(req.body.password)
        // console.log("iv",iv)
        // // console.log("encrypted pass",encrypts);
        // // console.log("decrpted",decrypt)
        // console.log("test",test)



        if (results.length <= 0) {
          res
            .status(404)
            .json({Message: "No USER EXISTS WITH THIS EMAIL ID"});
        } else {
          var mailOptions = {
            from: process.env.EMAIL,
            to: results[0].email,
            subject: "Forgot Password",
            html:
              "<p>Hi "+results[0].first_name+"<br>Forgot your Password ?<br><b>Email: </b>" +
              results[0].email +
              "<br> <b>Your Password: </b>" +
              results[0].password+ 
              Password.decrypt(Password.encrypt(results[0].password)) +
              "<br>click the link  and  login with the above password  http://localhost:4200/ </a></p>",
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log(info);
            }
          });
        }
      } else {
        return res.status(500).json(err);
      }
    });
  },

  LoginDetails: (req, res) => {
    
    let user = req.body;
    query = "select first_name,username,email,password from user where email=?";
    connection.query(query, [user.email], (err, results) => {
      if (!err) {
        if (results.length <= 0) {
          res
            .status(404)
            .json({Message: "No USER EXISTS WITH THIS EMAIL ID"});
        } else {
          console.log("results",results)
          var mailOptions = {
            from: process.env.EMAIL,
            to: results[0].email,
            subject: "Login Details",
            html:
              "<p>Hi "+results[0].first_name+"<br>"+
              "Here your login details<br><b>Username: </b>" +
              results[0].username +
              "<br> <b>Password: </b>" +
              results[0].password+ 
              // Password.decrypt(Password.encrypt(results[0].password)) +
              "<br>click the link  and  login with the above username and password  http://localhost:4200/ </a></p>",
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log(info);
            }
          });
        }
      } else {
        return res.status(500).json(err);
      }
    });
  },


};
module.exports = PasswordService;

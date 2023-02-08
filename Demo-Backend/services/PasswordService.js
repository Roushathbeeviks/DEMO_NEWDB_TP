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
    const query = "select first_name,email,(select cast(aes_decrypt(password, 'PASS') AS char) from user where email=? ) as password1 from user where email=?";
    const param = [
     user.email,
     user.email
    ];
    console.log("param",param)
    connection.query(query,param, (err, results) => {
      console.log("results",results)
      // console.log("results[0].password1",results[0].password1)
      if (!err) {
        if (results.length <= 0) {
          // res
          //   .status(404)
          //   .json({Message: "No USER EXISTS WITH THIS EMAIL ID"});
          res.send({Message: "No USER EXISTS WITH THIS EMAIL ID",status: false})
          // res.send({ message: "Email id already exists", status: true });
        } else {
          var mailOptions = {
            from: process.env.EMAIL,
            to: results[0].email,
            subject: "Forgot Password",
            html:
              "<p>Hi "+results[0].first_name+"<br>Forgot your Password ?<br><b>Email: </b>" +
              results[0].email +
              "<br> <b>Your Password: </b>" +
              results[0].password1+ 
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

  UpdatePassword:(req,res) => {
    let user = req.body
    const query=`select username,(select cast(aes_decrypt(password, 'PASS') AS char) from user where email=? ) as password  from user where email=?`
    const param=[user.email,user.email]
    connection.query(query,param, (err, results) => {
      if(results.length > 0)
      {
        // console.log("update password select query result",results.length)
        const query= `UPDATE user SET password=AES_ENCRYPT(?,'PASS') WHERE email = ?`
        const param=[user.password,user.email]
        connection.query(query,param, (err, results) => {
          if(results){
            // console.log("updated result",results)
            res.send({message:"Password Updated Successfully",status:true})
          }
          else{
            res.send({message:"Password Updated Failed"})
            console.log("updated err",err)
          }
        })
      }
      else{
        res.send({message:"No user Exists with this emailid",status:false})
        console.log("update password select query ERROR",err)
      }
    })
  },


  LoginDetails: (email,res) => {
    let user = email;
    // console.log("Login details mail",user)
    const query = "select first_name,username,email,(select cast(aes_decrypt(password, 'PASS') AS char) from user where email=? ) as password  from user where email=?";
    const param=[email,email]
    connection.query(query,param, (err, results) => {
      if (!err) 
      {
        if (results.length <= 0) 
        {
          res
            .status(404)
            .json({Message: "No USER EXISTS WITH THIS EMAIL ID"});
        } 
        else 
        {
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

const md5 = require("md5");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var auth = require("../services/Authentication");
var checkrole = require("../services/checkRole");
var bcrypt = require('bcrypt')
const PasswordService = require("../services/PasswordService");
const Password=require('../services/password')

const userService = {
  doCreate: (req, res) =>
   {
    let users = req.body;
    // let password = Password.encrypt(req.body.password)
    // let password =AES_ENCRYPT(req.body.password)
    
    // console.log("encrypted pass",password);
    userTasks
      .getUserByEmailId(users.email)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({message:"User already exists"})
        } else {
          userTasks.insertUser(users).then((results) => {
            if (results) {
              // return res.status(200).json("User successfully added");
              PasswordService.LoginDetails(req,res)
              res.send({message:"User successfully added"})
            }
          });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  CheckEmail: (req, res) => {
    let users = req.body;
    // console.log(users);
    userTasks
      .getUserByEmailId(users.email)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({ message: "Email id already exists", status: true });
        } else {
          res.send({ message: "Email id does not exist", status: false });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  CheckId: (req, res) => {
    let users = req.body;
    // console.log(users);
    userTasks
      .getUserByUserid(users.Userid)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({ message: "User name already exists", status: true });
        } else {
          res.send({ message: "User name does not exist", status: false });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  CheckEmail: (req, res) => {
    let users = req.body;
    // console.log(users);
    userTasks
      .getUserByEmailId(users.email)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({message:"Email id already exists",status:true})
        } else {
        res.send({message:"Email id does not exist",status:false})
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({message:"Internal server error:" + error})
      });
  },

  CheckId: (req, res) => {
    let users = req.body;
    // console.log(users);
    userTasks
      .getUserByUserid(users.username)
      .then((user) => {
        if (user.length > 0) {
          // return res.status(200).json("User already exists");
          res.send({message:"User name already exists",status:true})
        } else {
        res.send({message:"User name does not exist",status:false})
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({message:"Internal server error:" + error})
      });
  },



  doLogin: (req, res) => {
    let user = req.body;
    userTasks
      .getUserByUserid(user.username)
      .then((users) => {
        if (users.length <= 0 ) {
          res.send({ message: "Invalid username", status: false });
        } 
        else if(users[0].password != user.password)
        {
          res.send({ message: "Invalid password", status: false });
        }
        else if (users[0].password == user.password) {
          console.log(users)
          const response = { username: users[0].username, role:users[0].role ,Id:users[0].id};
          const accesstoken = jwt.sign(response, process.env.ACCCESS_TOKEN, {
            expiresIn: "8h",
          });
          userTasks.getUserByUserid(response.username).then((users) => {
            // console.log(users);
            res
              .status(200)
              .json({
                token: accesstoken,
                Detail: users[0].role,
                status: true,
                Id:users[0].id
              });
              console.log("id" ,users[0].id)
          });
          // res.status(200).json({token: accesstoken});
          // res.status(200).json({Message:response.role})
          // console.log(users[0].role)
        } else {
          res.send({ message: "something went wrong" });
          // return res.status(400).json({ Message: "something went wrong" });
        }
      })
      .catch((error) => {
        // return res.status(500).json("Internal server error:" + error);
        res.send({ message: "Internal server error:" + error });
      });
  },

  GetUserById: (req, res) => {
    var query =
      "select username,first_name,last_name,email,contact_number from user where id=?";
      console.log(req.params.id)
      const id=req.params.id;
    connection.query(query,id, (err, results) => {
      if (results) {
        // return res.status(500).json({msg:results});
        res.send({ message: results });
      } else {
        res.send({ message: err });
      }
    });
  },

  EditUserProfile: (req,res)=>
  {
  // console.log(req.body)
  // console.log(req.params.id)
  const id=req.params.id;
   const newusername = req.body.username;
   const newfirst_name = req.body.first_name;
   const newlast_name = req.body.last_name;
   const newemail = req.body.email;
   const newcontact_number = req.body.contact_number;
  var X= userTasks.Editprofile(id,newusername,newfirst_name,newlast_name,newemail,newcontact_number)

  
    if(X)
    {
      return res.json({message:"Updated the profile"});
    }
    else{
      return res.json({message:"Updation Failed"});
    }

  },
  DeleteUserById:(req,res)=>
  {
    var query = "delete from user where id=?"
    connection.query(query, [req.params.id], (err, results) =>
    {
      if (results)
      {
        res.send({message:results})
      }
      else
      {
        res.send({ message: err });
      }
    })

  },

  GetRole: (req, res) => {
    var query = "select role from user";
    connection.query(query, (err, results) => {
      if (results) {
        // return res.status(500).json({msg:results});
        res.send({ message: results });
      } else {
        // return res.status(200).json(err);
        res.send(err);
      }
    });
  },

  GetAllDetails:(req,res) => 
  {
    var query = "select * from user where role='user'";
    connection.query(query, (err, results) => {
      if (results) {
        res.send({message:results})
      }
      else{
        res.send({message:err})

      }
    })
  },
  GetUsersForExcel:(req,res) => 
  {
    var query = `select username as USERNAME,first_name as FIRST_NAME, last_name as LAST_NAME, email as EMAIL, contact_number as PHONE from user where role='user';`
    connection.query(query, (err, results) => {
      if (results) {
        res.send({message:results})
      }
      else{
        res.send({message:err})

      }
    })
  },

  GetAllDetailsWithMapping: (req, res) => {
    var list = [];
    var count=0
    var query = "select * from user where role='user'";
    connection.query(query, (err, results) => {
      if (results) {
        // return res.status(500).json({msg:results});
        // res.send({ message: results });
        results.forEach((el) => {
          var query1= "select vessel_name from vessel_user_mapping where user_id=?"
          var id=element.id;
          connection.query(query1, id, (err2, results2) => {
            results2.forEach(e => {
            list.push(e["vessel_name"]);
           // console.log(e);
            })
           // console.log(list)
           el["vesselslist"]=list; 
           el['hellotest'] = 'testing ';
           console.log('main element ....' , el);
           el.test = 'test'
            // list=[];
           // console.log(list);
          });
          // console.log("results11111 ...",results);
          count++;
        });

console.log('main result here ... ' , results)
        
        if(results.length==count+1)
        {
          // console.log("results21",results);
        }
        // console.log("resultsfinal line ...",results);
        // res.send({ message: results });
       
        // results.forEach(element => {
        //   element["vesselslist"]=list
        // })
        // list=[];
        
      } else {
        // return res.status(200).json(err);
        res.send(err);
      }
    });
  },
 
};

module.exports = userService;

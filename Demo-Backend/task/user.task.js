const connection = require("../db/connection");
const pass=require('../services/password')
var bcrypt = require('bcrypt')

const userTasks = {
  insertUser: (values) => {
    // console.log("values",password)
    // bcrypt.hash(values.password,10, function(err, hash) {
    // console.log("hash",hash)
    const query =
      "INSERT INTO user (username,first_name,last_name,email,contact_number,role,password) VALUES (?,?,?,?,?,?,?)";
     const param = [
      values.username,
      values.first_name,
      values.last_name,
      values.email,
      values.contact_number,
      values.role,
      // password.encryptedData
      values.password
    
    ];
  
    return new Promise((resolve, reject) => {
      connection.query(query, param, function (error, results) {
        if (error) reject(error);
        resolve(true);
      });
    });
  // })
  },



Editprofile:(id,username,first_name,last_name,email,contact_number)=>
      {
        
        return new Promise((resolve, reject) => 
        {
          connection.query("update user set username=?, first_name=?,last_name=?,email=?,contact_number=? where id=?", 
          [username,first_name,last_name,email,contact_number,id],(error,results)=>
          {
            if (!error)
                if(results.affectedRows==0)
                {
                  console.log("Error in Updates: Userid does not exists")
                }
                else{
                     console.log("Updated")
                }
               
            
            else
            {
              console.log(error)
            }
          })
      })
    },






//   UpdateUser:(Userid,
//     firstname,
//     lastname,
//     email,
//     contactnumber
// ) => {
//     var query="update users set firstname=?,lastname=?,email=?,contactnumber=? where Userid=?"
//     const param = [
//       Userid,
//       firstname,
//       lastname,
//       email,
//       contactnumber

//     ];
  
//     return new Promise((resolve, reject) => {
//       connection.query(query, param, function (error, results) {
//         if (error) reject(error);
//         console.log(error);
//         resolve(true);
        
//       });
//     });
//   },

getUserByEmailId: (email) => {
    const param = [email];
    const query = `SELECT * FROM user WHERE email = ?;`;
    return new Promise((resolve, reject) => {
      connection.query(query, param, (error, results) => {
        if (error) {
          reject(error);
          
        }
        resolve(results);
        
      });
    });
  },

   getUserByUserid:(username) => {
  const param = [username];
  const query="select * from user where username = ?"
  return new Promise((resolve, reject) => {
    connection.query(query,param,(error,results)=>{
      if(error){
        reject (error)
      }
      resolve(results)
    });
  })
},

getUserDetails:() =>{
  const query="select Userid,firstname,lastname,email,contactnumber from users where role='user' ";
  return new Promise((resolve, reject) => {
    connection.query(query,(error,results)=>{
      if(error){
        reject (error)
        // console.log(error)
      }
      resolve(results)
      // console.log(results)
    });

})
}

};


module.exports = userTasks;

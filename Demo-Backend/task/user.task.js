const connection = require("../db/connection");
const pass=require('../services/password')
var bcrypt = require('bcrypt')

const userTasks = {
  insertUser: (values) => {
    const query =
      "INSERT INTO user (username,first_name,last_name,email,contact_number,role,password) VALUES (?,?,?,?,?,?,AES_ENCRYPT(?,'PASS'))";
     const param = [
      values.username,
      values.first_name,
      values.last_name,
      values.email,
      values.contact_number,
      values.role,
      values.password
    
    ];
  
    return new Promise((resolve, reject) => {
      connection.query (query, param, function (error, results) {
        if (results){resolve(results) }
        else{reject(error)}
      });
    });
 
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

GetDecryptPassword:(username)=>
{
 const query =`select cast(aes_decrypt(password, 'PASS') AS char)as password from user where username=?`
 const param = [username];
 return new Promise((resolve, reject) => {
  connection.query(query,param,(error,results)=>{
    if(error){
      reject (error)
      
    }
    console.log("1",results[0].password)
    resolve(results[0].password)
  });
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

 getUserByEmailId: (username) => {
    const param = [username];
    const query = `SELECT * FROM user WHERE username = ?`;
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

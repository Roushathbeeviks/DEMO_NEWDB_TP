const connection = require("../db/connection");
require("dotenv").config();
const LoginHistoryTasks= require('../task/Login-History-task')

const LoginHistoryService={
    CreateLoginHistory:(req,res)=>
    {
        let details = req.body;
        LoginHistoryTasks.InsertloginDetails(details).then((err,result)=>
        {
            // console.log(result);
            // console.log(err);
            if(result)
            {
                res.send({ message:result.affectedRows,success:false});
            }
            else
            {
                res.send({ message:err,success:true});
                
            }
        })
        
    },
    GetLoginHistory:(req,res)=>
    {
        const query =`select user_id,login_date from login_history where user_id=?`;
        console.log("test1",req.params.id);
        return new Promise((resolve, reject) => {
         connection.query(query,req.params.id,(error,results)=>{
           if(error){
             reject (error)
           }
          //  console.log("Login",results)
           res.send({ message: results });
         });
       })
    },
    CreateLogoutHistory:(req,res)=>
    {
        let details = req.body;
        LoginHistoryTasks.InsertlogoutDetails(details).then((err,result)=>
        {
            // console.log(result);
            // console.log(err);
            if(result)
            {
                res.send({ message:result,success:false});
            }
            else
            {
                res.send({ message:err,success:true});
                
            }
        })
        
    },
    GetLogoutHistory:(req,res)=>
    {
        const query =`select user_id,logout_date from logout_history where user_id=?`;
        return new Promise((resolve, reject) => {
         connection.query(query,[req.params.id],(error,results)=>{
           if(error){
             reject (error)
           }
           console.log("1",results)
           resolve(results)
         });
       })
    }
}

module.exports = LoginHistoryService;
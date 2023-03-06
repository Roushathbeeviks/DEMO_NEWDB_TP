const connection = require("../db/connection");
require("dotenv").config();

const LoginHistoryTasks={
    InsertloginDetails:(values)=>
    {
        console.log("inserted values",values)
        // return false;
        const query ="INSERT INTO login_history (user_id,login_date) VALUES (?,?)"; 
        const param=[
            values.user_id,
            values.login_date
        ]
        return new Promise((resolve,reject)=>
        {
            connection.query(query,param,function(err,result)
            {
                if(err){
                    reject(err);
                    console.log("error",err);
                }
                else{
                    resolve(result.affectedRows)
                    console.log("inserted",result)
                    
                }    
                
            })
        })
    },
    InsertlogoutDetails:(values)=>
    {
        console.log("inserted values",values)
        // return false;
        const query ="INSERT INTO logout_history (user_id,logout_date) VALUES (?,?)"; 
        const param=[
            values.user_id,
            values.logout_date
        ]
        return new Promise((resolve,reject)=>
        {
            connection.query(query,param,function(err,result)
            {
                if(err){
                    reject(err);
                    console.log("error",err);
                }
                else{
                    resolve(result)
                    console.log("inserted",result)
                    
                }    
                
            })
        })
    }
}

module.exports = LoginHistoryTasks;
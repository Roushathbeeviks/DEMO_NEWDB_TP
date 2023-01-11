const connection = require("../db/connection");

const VesselTask=
{
    insertvessel:(values)=>
    {
        console.log("inserted values",values)
        // return false;
        const query ="INSERT INTO vessel (name,imo_number,flag_id,vessel_type_id) VALUES (?,?,?,?)"; 
        const param=[
            values.name,
            values.imo_number,
            values.flag_id,
            values.vessel_type_id
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
    },
    insertVesselMapping:(values)=>
    {
        // var newArray = [];
        console.log("values",values)
        values.forEach(element => {
        const query ="INSERT INTO vessel_user_mapping (vessel_name,vessel_id,user_id)values (?,?,?)";
        const param=[
            element.name,
            element.id,
            element.user_id
        ]
        connection.query(query,param,function(err,result)
        {
            if(err)
            {
            }
            else{
                
            }
        }
        )
        // return new Promise((resolve,reject)=>
        //     {
        //         console.log("inserted")
        //         connection.query(query,param,function(err,result)
        //         {
        //             if(err)
        //                 reject(err);
        //              resolve(result)   
        //         })
        //     })
            
        });
        return  new Promise((resolve,reject)=>
        {
            console.log("entered")
            resolve("success")
        });
        // return true;    

    },
    EditVessel:(id,name,imo_number)=>
    {
        return new Promise((resolve, reject) => 
        {
          connection.query("update vessel set name=?, imo_number=? where id=?", 
          [name,imo_number,id],(error,results)=>
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
    }
}

module.exports=VesselTask;
const connection = require("../db/connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var auth = require("./Authentication");
const VesselTask = require("../task/vessel.task");

const Vessel={
    VesselForm:(req,res)=>
    {
        let vesseldata = req.body;
        VesselTask.insertvessel(vesseldata).then((err,result)=>
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
    GetVesselByUserid:(req,res)=>
    {
        var query = "select vessel.id,vessel.name,vessel.imo_number,flag.name as countryname from vessel  join flag  on flag.id=vessel.flag_id join vessel_user_mapping on vessel_user_mapping.vessel_id=vessel.id where vessel_user_mapping.user_id=?"
        // var id=req.params.id;
        connection.query(query, [req.params.id], function(err,results)
        {
            if(results)
            {
                res.send(results);
            }
            else
            {
                res.send(err);
                
            }
        })
    },

    GetVesselByVesselId:(req,res)=>
    {
        var query = "select vessel.name,vessel.imo_number,flag.name as countryname from vessel  join flag  on flag.id=vessel.flag_id where vessel.id=?"
        // var id=req.params.id;
        connection.query(query, [req.params.id], function(err,results)
        {
            if(results)
            {
                res.send(results);
            }
            else
            {
                res.send(err);
                
            }
        })
    },

    GetAllVessels:(req,res)=>
    {
        // var query = "select * from project.vessel v join flag f  on v.flag_id=f.id join  vessel_type vt on v.vessel_type_id=vt.id where v.id=?"
        var query="select vessel.id,vessel.name,vessel.imo_number,flag.name as countryname, vessel_type.name as vesseltype from vessel join flag on vessel.flag_id=flag.id join vessel_type on vessel.vessel_type_id=vessel_type.id"
        // var id=req.params.id
        connection.query(query, function(err,results)
        {
            if(results)
            {
                res.send(results);
                // console.log(results);
            }
            else
            {
                res.send(err);
                // console.log(err);
                
            }
        })
    },
    GetVesselName:(req,res)=>
    {
        var query = "select id,name from vessel"
        connection.query(query, function(err,results)
        {
            if(results)
            {
                res.send(results);
                // console.log(results);
            }
            else
            {
                res.send(err);
                // console.log(err);
                
            }
        })
    },
    GetVesselId:(req,res)=>
    {
        var query = "select vessel_id from vessel_user_mapping where user_id=?"
        connection.query(query,[req.params.id] ,function(err,results)
        {
            if(results)
            {
                res.send(results);
                // console.log(results);
            }
            else
            {
                res.send(err);
                // console.log(err);
                
            }
        })
    },
    GetVesselFlag:(req,res)=>
    {
        var query = "select * from flag"
        connection.query(query, function(err,results)
        {
            if(results)
            {
                res.send(results);
                
            }
            else
            {
                res.send(err);
                
            } 
        }
        )
        
    },
    GetVesselType:(req, res) => {
        var query = "select * from vessel_type"
        connection.query(query, function(err,results)
        {
            if(results)
            {
                res.send(results);
                
            }
            else
            {
                res.send(err);
                
            } 
        }
        )

    },
    VesselMap:(req,res)=>
    {
        let data=req.body;
        console.log("data",data)
        VesselTask.insertVesselMapping(data).then((err,result)=>
        {
            if(result)
            {
                res.send({ message:result });
            }
            else
            {
                res.send({ message:err});
                
            }
        })

    },
    GetVesselMapping:(req,res)=>
    {
        var query = "select * from vessel_user_mapping where username=? ";
        connection.query(query,[req.params.id], function(err,results)
        {
            if(results)
            {
                res.send(results);
                // console.log(results);
            }
            else
            {
                res.send(err);
                // console.log(err);
                
            }
        })
    },
    VesselNameFromMApping:(req,res)=>
    {
        var query =`select vessel_name,vessel_id from vessel_user_mapping where vessel_user_mapping.user_id=?`;
        connection.query(query,[req.params.id], function(err,results)
        {
            if(results)
            {
                res.send(results);
                // console.log(results);
            }
            else
            {
                res.send(err);
                // console.log(err);
                
            }
        })

    },
    EditVessel:(req,res)=>
    {
        const id=req.params.id;
        const newVesselName = req.body.name;
        const newimo_number = req.body.imo_number;
        // const newflag_id = req.body.flag_id;
       var X= VesselTask.EditVessel(id,newVesselName,newimo_number)
     
       
         if(X)
         {
           return res.json({message:"Updated the profile"});
         }
         else{
           return res.json({message:"Updation Failed"});
         }
     
    },
    DeleteVessel:(req,res)=>
    {
        var query = "delete from vessel where id=?";
        connection.query(query,[req.params.id], function(err,results)
        {
            if(results)
            {
                res.send({message:results});
            }
            else
            {
                res.send({message:err});   

            }
        })
    }
}



module.exports = Vessel;
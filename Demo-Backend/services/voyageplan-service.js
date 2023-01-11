const connection = require("../db/connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var auth = require("./Authentication");
var VoyageTAsks = require("../task/voyage.task");

const VoyagePlan = {
  VoyagePlanForm: (req, res) => {
    let voyage = req.body;
    VoyageTAsks.insertVoyage(voyage).then((results, err) => {
      if (results) {
        // console.log("Entered Results",results);
        res.send({ message: "Result", results });
      } else {
        // console.log("error",err)
        res.send({ message: "Error", err });
      }
    });
  },

  GetVoyagePlan: (req, res) => {
    var query =
      "select voyage.startport_id, voyage.destinationport_id, voyage.cosp_time, voyage.earliest_eta, voyage.just_eta,startport.name as startportname,destinationport.name as destinationportname,vessel.name as vesselname from voyage join startport on voyage.startport_id=startport.id join destinationport on voyage.destinationport_id=destinationport.id join vessel on vessel.id=voyage.vessel_id";
    connection.query(query, (err, results) => {
      if (results) {
        res.send({ message: results });
      } else {
        res.send({ message: err });
      }
    });
  },
  GetVoyagePlanByVesselId: (req, res) => {
    var query = `SELECT voyage.startport_id, voyage.destinationport_id, 
  voyage.cosp_time, voyage.earliest_eta, 
  voyage.just_eta,
  startport.name as startportname,
  destinationport.name as destinationportname,
  vessel.name as vesselname
   FROM voyage 
   JOIN startport on voyage.startport_id=startport.id 
   JOIN destinationport on voyage.destinationport_id=destinationport.id 
   JOIN vessel on vessel.id=voyage.vessel_id 
   WHERE vessel_id=?`;
    connection.query(query, [req.params.id], (err, results) => {
      if (results) {
        // console.log("voyage",results);
        res.send({ message: results });
      } else {
        console.log("voyage err", err);
        res.send({ message: err });
      }
    });
  },
  GetStartPort: (req, res) => {
    var query = "select * from startport";
    connection.query(query, (err, results) => {
      if (results) {
        res.send(results);
      } else {
        res.send({ message: err });
      }
    });
  },

  GetDestinationPort: (req, res) => {
    var query = "select * from destinationport";
    connection.query(query, (err, results) => {
      if (results) {
        res.send(results);
      } else {
        res.send({ message: err });
      }
    });
  },
};

module.exports = VoyagePlan;

// const VoyagePlan = {
//     VoyagePlanForm:(req,res)=>
//     {
//             let values=req.body;
//             console.log(values)
//             const query =
//             "INSERT INTO voyageplan(StartPortname, DestinationPortname,Cosplat ,Cosplong,Eosplat,Eosplong, Cosptime,Displacement ,FuelDensity,LowerCalorific,EarliestETA,JustETA) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
//            let param = [
//             values.StartPortname,
//             values.DestinationPortname,
//             values.Cosplat,
//             values.Cosplong,
//             values.Eosplat,
//             values.Eosplong,
//             values.Cosptime,,
//             values.Displacement,
//             values.FuelDensity,
//             values.LowerCalorific,
//             values.EarliestETA,
//             values.JustETA
//           ];
//           console.log(param)
//           connection.query(query,param , (err, res) => {
//             if(res)
//             {
//                 // return res.status(200).json({message:"Voyage created successfully"})
//                 console.log(res);
//             }
//             else{
//                 // return res.status(500).json({ Message: "something went wrong" });
//                 console.log(err)
//             }
//           })

// },

const connection = require("../db/connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var auth = require("./Authentication");
var VoyageTAsks = require("../task/voyage.task");

const VoyagePlan = {
  VoyagePlanForm: (req, res) => {
    let voyages = req.body;

    VoyageTAsks.insertVoyage(voyages).then((err, results) => {
      if (results) {
        res.send({ message: results });
      } else {
        res.send({ message: err });
      }
    });
  },

  GetVoyagePlan: (req, res) => {
    var query =
      "select StartPortname,DestinationPortname,Cosptime,EarliestETA,JustETA from voyageplan";
    connection.query(query, (err, results) => {
      if (results) {
        res.send({ message: results });
      } else {
        res.send({ message: err });
      }
    });
  },

  GetVoyagePath: (req, res) => {
    var query = "select StartPortname,DestinationPortname from voyagepath";
    connection.query(query, (err, results) => {
      if (results) {
        res.send(results);
      } else {
        res.send({ message: err });
      }
    });
  }
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

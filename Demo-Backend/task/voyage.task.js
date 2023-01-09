const connection = require("../db/connection");

const VoyageTasks={
insertVoyage: (values) => {
    // let voyage=req.body;
    console.log(values)
    const query =
    "INSERT INTO voyageplan (StartPortname, DestinationPortname,Cosplat ,Cosplong,Eosplat,Eosplong,Cosptime,Displacement,FuelDensity,LowerCalorific,EarliestETA,JustETA) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
   const param = [
    values.StartPortname,
    values.DestinationPortname,
    values.Cosplat,
    values.Cosplong,
    values.Eosplat,
    values.Eosplong,
    values.Cosptime,
    values.Displacement,
    values.FuelDensity,
    values.LowerCalorific,
    values.EarliestETA,
    values.JustETA
  ];
  console.log(param)
  return new Promise((resolve, reject) => {
    connection.query(query, param, function (error, results) {
      if (error) reject(error);
      resolve(true);
    });
})
},

// CheckVoyage:(StartPortname,DestinationPortname)=>
// {
//     const param = [StartPortname]
//     const query = "SELECT * FROM voyageplan WHERE StartPortname=?";

// }

}
module.exports =VoyageTasks;
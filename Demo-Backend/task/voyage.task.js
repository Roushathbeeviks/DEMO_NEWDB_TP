const connection = require("../db/connection");

const VoyageTasks = {
  insertVoyage: (values) => {
    // console.log("values",values)
    const query = `INSERT INTO voyage 
    (startport_id, destinationport_id,cosp_lat,cosp_long, eosp_lat, eosp_long, cosp_time, displacement, fuel_density, lower_calorific, earliest_eta, just_eta, bunker,vessel_id) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const param = [
      values.startport_id,
      values.destinationport_id,
      values.cosp_lat,
      values.cosp_long,
      values.eosp_lat,
      values.eosp_long,
      values.cosp_time,
      values.displacement,
      values.fuel_density,
      values.lower_calorific,
      values.earliest_eta,
      values.just_eta,
      values.bunker,
      values.vessel_id,
    ];
    // console.log("param",param)
    return new Promise((resolve, reject) => {
      connection.query(query, param, function (error, results) {
        if (error) reject(error);
        resolve(true);
        // console.log("dddd")
      });
    });
  },
  EditVoyage: (
    id,
    startport_id,
    destinationport_id,
    cosp_lat,cosp_long,eosp_lat, 
   eosp_long,cosp_time,displacement,earliest_eta,just_eta
  ) => {
    return new Promise((resolve, reject) => {
      var query = `update voyage set startport_id=?,destinationport_id=?,cosp_lat=?,cosp_long=?,eosp_lat=?,eosp_long=?,cosp_time=?,displacement=?,earliest_eta=?,just_eta=? where id=?`;
      connection.query(
        query,
        [
          startport_id,destinationport_id,cosp_lat,cosp_long,eosp_lat, 
          eosp_long,cosp_time,displacement,earliest_eta,just_eta,id
        ],
        (error, results) => {
          if (!error){
            if (results.affectedRows == 0) {
              console.log("Error in Updates:",error);
            } else {
              console.log("Updated",results);
            }
          }
          else {
          console.log(error);
          }
        }
      );
    });
  },
};
module.exports = VoyageTasks;

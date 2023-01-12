const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
var auth = require("../services/Authentication");
const VoyagePlan = require("../services/voyageplan-service");
const Vessel = require("../services/Vessel-service");

router.post("/postvoyageplan", function (req, res) {
  VoyagePlan.VoyagePlanForm(req, res);
});
router.get("/voyageplandetails", function (req, res) {
  VoyagePlan.GetVoyagePlan(req, res);
});
router.get("/voyageplandetails/:id", function (req, res) {
  VoyagePlan.GetVoyagePlanByVesselId(req, res);
});
router.get("/startport", function (req, res) {
  VoyagePlan.GetStartPort(req, res);
});
router.get("/destinationport", function (req, res) {
  VoyagePlan.GetDestinationPort(req, res);
});



router.post("/vesselform",function (req, res) {
 Vessel.VesselForm(req,res)
});
router.get("/getvessel/:id", function (req, res) {
  Vessel. GetVesselByUserid(req,res);
});
router.get("/getVesselByVesselId/:id", function (req, res) {
  Vessel. GetVesselByVesselId(req,res);
});
//Vessel-Edit
router.put("/editvessel/:id", function (req, res) {
  Vessel.EditVessel(req,res)
 })
//vessel details - flag and vessel_type tables joined
router.get("/getallvessel", function (req,res) {
  Vessel.GetAllVessels(req,res)
});
//vessel_name from vessel table
router.get("/getvesselname", function (req,res) {
  Vessel.GetVesselName(req,res)
});
router.get("/getflag", function (req, res) {
  Vessel.GetVesselFlag(req,res);
});
router.get("/getvesseltype", function (req, res) {
  Vessel.GetVesselType(req,res);
});
router.post("/vesselmapping", function (req, res) {
  Vessel.VesselMap(req,res);
})
router.delete("/deletevessel/:id", function (req, res) {
  Vessel.DeleteVessel(req,res);
})
router.get("/getvesselmapping/:id", function (req,res) {
  Vessel.GetVesselMapping(req,res);
});

module.exports = router;

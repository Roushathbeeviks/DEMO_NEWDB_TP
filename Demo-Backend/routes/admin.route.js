const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");
const connection = require("../db/connection");
const userTasks = require("../task/user.task");
var auth = require("../services/Authentication");
const VoyagePlan = require("../services/voyageplan-service");
const Vessel = require("../services/Vessel-service");
const LoginHistoryService =  require("../services/Login-History-Services")

router.post("/postvoyageplan", function (req, res) {
  VoyagePlan.VoyagePlanForm(req, res);
});
router.get("/voyageplandetails", function (req, res) {
  VoyagePlan.GetVoyagePlan(req, res);
});
router.get("/voyageplandetails/:id", function (req, res) {
  VoyagePlan.GetVoyagePlanByVesselId(req, res);
});
router.get("/voyageplandetailsbyvoyageid/:id", function (req, res) {
  VoyagePlan.GetVoyagePlanByVoyageId(req, res);
});
router.get("/startport", function (req, res) {
  VoyagePlan.GetStartPort(req, res);
});
router.get("/destinationport", function (req, res) {
  VoyagePlan.GetDestinationPort(req, res);
});
router.put("/editvoyage/:id", function (req, res) {
  VoyagePlan.EditVoyage(req, res);
});
router.get("/destinationportbyid/:id", function (req, res) {
  VoyagePlan.GetDestinationPortBYId(req, res);
});
router.get("/startportbyid/:id", function (req, res) {
  VoyagePlan.GetStartPortById(req, res);
});
router.delete("/deletevoyage/:id", function (req, res) {
  VoyagePlan.DeleteVoyage(req,res);
})


router.post("/vesselform",function (req, res) {
 Vessel.VesselForm(req,res)
});
//get vessel name from vessel_user_mapping table
router.get("/vesselNameVU/:id",function (req, res) {
  Vessel.VesselNameFromMApping(req,res)
 });
router.get("/getvessel/:id", function (req, res) {
  Vessel. GetVesselByUserid(req,res);
});
router.get("/getvesselId/:id", function (req, res) {
  Vessel. GetVesselId(req,res);
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
router.get("/getallvesselforexcel", function (req,res) {
  Vessel.GetAllVesselsForExcel(req,res)
});

router.get("/getallvesselsIds", function (req,res) {
  Vessel.GetAllVesselsIds(req,res)
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

router.delete("/deleteexitingmap/:id", function (req,res) {
  Vessel.DeleteExistingMap(req,res);
});
router.post("/checkimonumber", function (req, res) {
  Vessel.CheckIMO(req,res);
})
router.post("/checkvesselname", function (req, res) {
  Vessel.CheckVesselName(req,res);
})
router.get("/vessel_count", function (req, res) {
  Vessel.GetVesselCount(req,res);
})


router.post("/postloginhistory", function (req, res) {
  LoginHistoryService.CreateLoginHistory(req,res);
})
router.get("/getloginhistory/:id", function (req,res) {
  LoginHistoryService.GetLoginHistory(req,res)
});

// router.post("/postlogouthistory", function (req, res) {
//   LoginHistoryService.CreateLogoutHistory(req,res);
// })
// router.get("/getlogouthistory/:id", function (req,res) {
//   LoginHistoryService.GetLogoutHistory(req,res)
// });

module.exports = router;

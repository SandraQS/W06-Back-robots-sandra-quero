const express = require("express");

const {
  getRobots,
  getRobotById,
  createRobot,
  updateRobot,
  deleteRobotbyId,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);

router.get("/:idRobot", getRobotById);

router.post("/create", createRobot);

router.put("/update", updateRobot);

router.delete("/delete/:idRobot", deleteRobotbyId);

module.exports = router;

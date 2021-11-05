const debug = require("debug")("robots:controllers");
const Robot = require("../../database/models/robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  debug("hola");
  res.json(robots);
};

const getRobotById = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const searchedRobot = await Robot.findById(idRobot);
    if (searchedRobot) {
      res.json(searchedRobot);
    } else {
      const error = new Error("Id no encontrada");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const createRobot = async (req, res, next) => {
  try {
    const robot = req.body;
    const newRobot = await Robot.create(robot);
    res.json(newRobot);
  } catch (error) {
    error.code = 400;
    error.message = "Objeto no váido";
    next(error);
  }
};

module.exports = {
  getRobots,
  getRobotById,
  createRobot,
};

const express = require("express");
const router = express.Router();

const {
  CreateCourse,
  GetAllCourses,
  FindCourse,
  UpdateCourse,
  DeleteCourse,
} = require("../controllers/course.controllers.js");

router.post("/registerCourse", CreateCourse);
router.get("/courses", GetAllCourses);
router.get("/courses/:id", FindCourse);
router.put("/courses/:id", UpdateCourse);
router.delete("/courses/:id", DeleteCourse);

module.exports = router;

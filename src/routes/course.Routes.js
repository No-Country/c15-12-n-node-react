const express = require("express");
const router = express.Router();

const {
  CreateCourse,
  GetAllCourses,
  FindCourse,
  UpdateCourse,
  DeleteCourse,
} = require("../controllers/course.controllers.js");

//create user: http://localhost:3000/api/registerCourse
router.post("/registerCourse", CreateCourse);

//get all users: http://localhost:3000/api/courses
router.get("/courses", GetAllCourses);

//find user: http://localhost:3000/api/courses/:6563afd6ccc2b74cbe6357a5
router.get("/courses/:id", FindCourse);

//update user: http://localhost:3000/api/courses/:6563afd6ccc2b74cbe6357a5
router.put("/courses/:id", UpdateCourse);

//delete user: http://localhost:3000/api/courses/6563afd6ccc2b74cbe6357a5
router.delete("/courses/:id", DeleteCourse);

module.exports = router;

const CourseSchema = require("../models/course.models.js");

module.exports = {
  CreateCourse: async (req, res) => {
    const { nombrecurso, email, nivel, precio } = req.body;
    const newCourse = new CourseSchema({
      nombrecurso,
      email,
      nivel,
      precio,
    });
    newCourse
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },

  GetAllCourses: (req, res) => {
    CourseSchema.find()
      .then((data) => {
        if (data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: "No courses found" });
        }
      })
      .catch((error) => res.json({ message: error }));
  },
  FindCourse: (req, res) => {
    const { id } = req.params;
    CourseSchema.findById(id)
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.json({ message: "No course found" });
        }
      })
      .catch((error) => res.json({ message: error }));
  },
  UpdateCourse: (req, res) => {
    const { id } = req.params;
    const { nombrecurso, email, nivel, precio } = req.body;
    CourseSchema.updateOne(
      { _id: id },
      { $set: { nombrecurso, email, nivel, precio } }
    )
      .then((data) => {
        if (nombre || apellido) {
          res.json(data);
        } else {
          res.json({ message: "No course found" });
        }
      })
      .catch((error) => res.json({ message: error }));
  },
  DeleteCourse: (req, res) => {
    const { id } = req.params;
    CourseSchema.deleteOne({ _id: id })
      .then((data) => {
        if (data.deletedCount > 0) {
          res.json({ message: "Course deleted successfully" });
        } else {
          res.json({ message: "Course not found or could not be deleted" });
        }
      })
      .catch((error) => res.json({ message: error }));
  },
};

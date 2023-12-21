const CourseSchema = require("../model/course.models");
const validateMongoDbId = require("../utils/validateMongodbId");

module.exports = {
  CreateCourse: async (req, res) => {
    try {
      // Obtener los datos del cuerpo de la solicitud
      const { curso, nivel, precio, nombre, apellido } = req.body;

      // Crear una nueva instancia del modelo Course
      const newCourse = new CourseSchema({
        curso,
        nivel,
        precio,
        nombre,
        apellido
      });

      // Guardar el nuevo curso en la base de datos
      const savedCourse = await newCourse.save();

      // Devolver el nuevo curso guardado
      res.json(savedCourse);
    } catch (error) {
      // Manejar errores durante el proceso de creación y guardado del curso
      res.status(500).json({ message: error.message });
    }
  },

  GetAllCourses: (req, res) => {
    CourseSchema.find()
      .then((data) => {
        if (data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: "Cursos no encontrados" });
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
          res.json({ message: "Curso no encontrado" });
        }
      })
      .catch((error) => res.json({ message: error }));
  },
  UpdateCourse: async (req, res) => {
    try {
      // Validar el formato del ID de MongoDB
      if (!validateMongoDbId(req.course._id)) {
        return res.status(400).json({ message: "ID invalida" });
      }

      // Obtener los datos del cuerpo de la solicitud
      const { curso, nivel, precio, nombre, apellido } = req.body;

      // Actualizar el curso en la base de datos
      const updatedCourse = await CourseSchema.findOneAndUpdate(
        { _id: req.course._id }, // Usar req.course._id en lugar de extraer id de req.course
        { $set: { curso, nivel, precio, nombre, apellido } },
        { new: true } // Devolver el documento actualizado
      );

      // Verificar si el curso fue encontrado y actualizado
      if (updatedCourse) {
        return res.json(updatedCourse);
      } else {
        return res
          .status(404)
          .json({ message: "Curso no encontrado para actualizar" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  DeleteCourse: (req, res) => {
    const { id } = req.params;
    CourseSchema.deleteOne({ _id: id })
      .then((data) => {
        if (data.deletedCount > 0) {
          res.json({ message: "Curso eliminado satisfactoriamente" });
        } else {
          res.json({ message: "Curso no encontrado o no puede ser eliminado" });
        }
      })
      .catch((error) => res.json({ message: error }));
  },
};


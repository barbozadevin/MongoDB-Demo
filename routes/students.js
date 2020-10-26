const router = require("express").Router();
let Student = require("../models/student.model");

//Get all students
router.route("/").get((req, res) => {
    Student.find()
      .then((student) => res.status(200).json(student))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//Get student by id
  router.route("/:id").get((req, res) => {
    Student.findById(req.params.id)
      .then((student) => res.status(200).json(student))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//Add Students
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const rollno = req.body.rollno;
    const email = req.body.email;
    const department = req.body.department;
    const phone_number = req.body.phone_number;

    const newStudent = new Student({
        name,
        rollno,
        email,
        department,
        phone_number
    })

    newStudent
    .save()
    .then(() => res.status(200).json("Student added!"))
    .catch((err) => res.status(400).json("Error: " + err));
})

//Update student data
router.route("/:id").patch((req, res) => {
    Student.findById(req.params.id).then((student) => {
      student.name = req.body.name;
      student.rollno = req.body.rollno;
      student.email = req.body.email;
      student.department = req.body.department;
      student.phone_number = req.body.phone_number;

      student
        .save()
        .then(() => res.status(200).json("Student data updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    });
});

//Delete student data
router.route("/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Student deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
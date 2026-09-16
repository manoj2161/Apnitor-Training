let students = [
  {
    id: 1,
    name: "manu",
    age: 23,
    course: "BCA",
  },
  {
    id: 2,
    name: "tanu",
    age: 24,
    course: "BCA",
  },
];
function studentManagement(operation, id, name, age, course) {
  if (operation === "add") {
    const existingStudent = students.find((student) => student.id === id);
    if (!existingStudent) {
      const newStudent = {
        id: id,
        name: name,
        age: age,
        course: course,
      };
      students.push(newStudent);
      console.log("Student added successfully...");
    } else {
      return console.log("Student already exists...");
    }
  } else if (operation === "list") {
    if (students.length > 0) {
      console.log(students);
    } else {
      console.log("No students exists...");
    }
  } else if (operation === "search") {
    const existingStudent = students.find((student) => student.id === id);
    if (existingStudent) {
      console.log(existingStudent);
    } else {
      console.log("Student not found with id :", id);
    }
  } else if (operation === "delete") {
    const existingStudent = students.find((student) => student.id === id);
    if (existingStudent) {
      students = students.filter(
        (student) => student.id !== existingStudent.id,
      );
      console.log(students);
    } else {
      console.log("Student not found...");
    }
  } else {
    return console.log("Wrong Operation...");
  }
}
studentManagement(
  process.argv[2],
  Number(process.argv[3]),
  process.argv[4],
  Number(process.argv[5]),
  process.argv[6],
);

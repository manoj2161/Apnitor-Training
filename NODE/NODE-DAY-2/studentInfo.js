let students = [{ id: 1, name: "Manu", age: 23, course: "BCA" }];
function addStudent(id, name, age, course) {
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
    return console.log(students);
  } else {
    return console.log("Student already exists...");
  }
}
addStudent(
  Number(process.argv[2]),
  process.argv[3],
  Number(process.argv[4]),
  process.argv[5],
);

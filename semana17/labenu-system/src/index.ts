import { app } from "./app";
import { addStudentIntoClass } from "./endpoints/addStudentIntoClass";
import { addTeacherIntoClass } from "./endpoints/addTeacherIntoClass";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";

app.post("/class", createClass);
app.post("/teacher", createTeacher);
app.post("/student", createStudent);
app.patch("/student/:id", addStudentIntoClass)
app.patch("/teacher/:id", addTeacherIntoClass)
import axios from "axios";
//import { initComponents } from "../components/StudentList/studentList.component";

export const getStudents = async () => {
  let result = await fetch("http://localhost:3000/api/students");
  let arrayOfStudents = await result.json();
  return arrayOfStudents;
};

export const addStudent = async (student) => {
  try {
    await axios.post("http://localhost:3000/api/students", student);
  } catch (err) {
    console.error(err);
  }
};

export const removeStudentByName = async (firstName) => {
  try {
    console.log(firstName, typeof firstName === "string");
    let url = `http://localhost:3000/api/students/${firstName}`;
    console.log(url);
    await axios.delete(url);
  } catch (err) {
    console.error(err);
  }
};

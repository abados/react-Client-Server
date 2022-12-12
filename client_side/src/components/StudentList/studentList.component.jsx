import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/students.services";
import { StudentRow } from "../StudentRow/studentRow.component";
import { ClockLoader } from "react-spinners";

import "./style.css";

export const StudentList = (props) => {
  console.log("here after delete");
  const [studentList, setStudentList] = useState([]);
  //const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const initComponents = async () => {
    let students = await getStudents();
    //await sleep(2200);
    //console.log("initComponents", students);
    setStudentList(students);
  };

  useEffect(() => {
    initComponents();
  }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {studentList.length > 0 ? (
            studentList.map((s) => {
              let { firstName, lastName, age } = s;
              return (
                <StudentRow
                  firstName={firstName}
                  lastName={lastName}
                  age={age}
                  init={initComponents}
                />
              );
            })
          ) : (
            <tr className="clock--tr">
              <td className="clock--td" colSpan={4}>
                <ClockLoader color="#36d7b7" size={86} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

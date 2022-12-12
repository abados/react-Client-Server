import React from "react";
import { removeStudentByName } from "../../services/students.services";

export const StudentRow = ({ firstName, lastName, age, init }) => {
  const handleDelete = async () => {
    await removeStudentByName(firstName);
    init();
  };

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          //onClick={() => { removeStudentByName(firstName); StudentList();}}
          onClick={handleDelete}
        >
          Delete by name
        </button>
      </td>
    </tr>
  );
};

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Insertstudent } from "./components/InsertStudent/insert.student.component";
import { PageNotFound } from "./components/PageNotFound/pageNotFound.component";
import { MainLayout } from "./Layout/main/main.Layout";
import { StudentList } from "./components/StudentList/studentList.component";

function App() {
  return (
    <div className="App">
      <div className="header">
        <MainLayout />
      </div>
      <div className="main">
        <Routes>
          <Route path="/api/insetStudet" element={<Insertstudent />}></Route>
          <Route path="/404" element={<PageNotFound />}></Route>
          <Route path="/" element={<StudentList />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

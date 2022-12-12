import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { students } from "./DB/Students";
import { Student } from "./DB/Models/student.model";

const app = express();
app.use(express.json());
app.use(cors());

let data = [...students];

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});

app.get("/api/students", function (req: Request, res: Response) {
  res.send(data);
});

app.post("/api/students", function (req: Request, res: Response) {
  let student: Student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };

  data.push(student);
});

app.delete("/api/students/:firstName", function (req: Request, res: Response) {
  console.log("before delete ", data);
  let firstName = req.params.firstName;
  let temp = data.filter((s) => s.firstName !== firstName);
  data = temp;
  console.log("after delete ", data);
  res.send();
});

app.listen(process.env.PORT, () => {
  console.log("current port is " + process.env.PORT);
});

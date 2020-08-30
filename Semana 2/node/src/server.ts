import express from "express";
import routes from "./routes";
import 'reflect-metadata'
import './database'

const app = express();
app.use(routes)

//app.use(routes)
app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3333, () => {
  console.log("Running 🚀");
});

import express, { Application, Request, Response, NextFunction } from "express";
require("express-async-errors");
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index";
import { failure } from "./utils/helper";

dotenv.config();
const app: Application = express();
//server middleware
app.use(express.json());
app.use(cors());

app.use("/api", router);
//test root route
app.get("/", async (req: Request, res: Response) => {
  res.send("helloworld");
});

app.use("*", (req: Request, res: Response) =>
  res
    .status(404)
    .json(failure("Page not found."))
);

// Global route error handling middleware
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.log("****SERVER_ERROR****");
  console.log(err);
  return res.status(500).json(failure(err.message || "Something went wrong!"));
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

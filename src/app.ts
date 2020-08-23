import "express-async-errors";
import express from "express";
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());

//routes

export { app };

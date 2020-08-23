import "express-async-errors";
import express from "express";
import { json } from "body-parser";
import { getFlightsByCodeRouter } from "./routes/getFlightByCode";
import { getFlightsRouter } from "./routes/getFlights";
import { makeFlightRouter } from "./routes/makeFlight";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//body parser middleware
app.use(json());

//routes
app.use(getFlightsByCodeRouter);
app.use(getFlightsRouter);
app.use(makeFlightRouter);

export { app };

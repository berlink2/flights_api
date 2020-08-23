import express, { Request, Response } from "express";
import { Flight } from "../models/flight";

const router = express.Router();

router.get("/flights/:code", async (req: Request, res: Response) => {
  const flightCode = req.params.code;
  const flights = await Flight.find({});

  if (flights.length === 0) {
    res.status(404).send({ message: "No flights found" });
  }

  res.status(200).send(JSON.stringify(flights));
});

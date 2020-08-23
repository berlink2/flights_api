import express, { Request, Response } from "express";
import { Flight } from "../models/flight";

const router = express.Router();

router.post("/flights", async (req: Request, res: Response) => {
  const flightData = req.body;
  try {
    const flight = await Flight.create(flightData);
  } catch (error) {
    res.status(500).send({
      message: "Error when creating flight, please try again.",
    });
  }

  res.status(201).send(flightData);
});

export { router as makeFlightRouter };

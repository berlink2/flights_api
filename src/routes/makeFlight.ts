import express, { Request, Response } from "express";
import { Flight } from "../models/flight";

const router = express.Router();

router.post("/flights", async (req: Request, res: Response) => {
  const flightData = req.body;

  const flight = Flight.create(flightData);
});

import express, { Request, Response } from "express";
import { Flight } from "../models/flight";

const router = express.Router();

router.get("/flights", async (req: Request, res: Response) => {
  const flightArray = await Flight.find({});

  if (flightArray.length === 0) {
    res.status(404).send({ message: "No flights found" });
  }
  const send = { flights: flightArray };
  res.status(200).send(JSON.stringify(send));
});

export { router as getFlightsRouter };

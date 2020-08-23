import express, { Request, Response } from "express";
import { Flight } from "../models/flight";

const router = express.Router();

router.get("/flights/:code", async (req: Request, res: Response) => {
  const airlineCode = req.params.code;
  const flightArray = await Flight.find({ airlineCode });

  if (flightArray.length === 0) {
    res.status(404).send({ message: "No flights found" });
  }
  const send = { flights: flightArray };
  res.status(200).send(send);
});

export { router as getFlightsByCodeRouter };

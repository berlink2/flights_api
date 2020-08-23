import request from "supertest";
import { app } from "../../app";
import { Flight } from "../../models/flight";
import mongoose from "mongoose";
// # flightCode eg. QF
// # flightNumber eg. QF400
// # departurePort eg. MEL
// # arrivalPort eg. SYD
// # departureTime eg. UTC ISO8601 format 2020-06-10T09:00:23Z
// # arrivalTime eg. UTC ISO8601 format 2020-06-10T10:25:23Z

const flightArray = [
  {
    airlineCode: "TA",
    flightNumber: "TA100",
    departurePort: "MEL",
    arrivalPort: "SYD",
    departureTime: "2020-06-10T09:00:23Z",
    arrivalTime: "2020-06-10T10:25:23Z",
  },
  {
    airlineCode: "FX",
    flightNumber: "FX200",
    departurePort: "YYZ",
    arrivalPort: "TOT",
    departureTime: "2020-06-10T09:00:23Z",
    arrivalTime: "2020-06-10T10:25:23Z",
  },
  {
    airlineCode: "TA",
    flightNumber: "TA150",
    departurePort: "JKT",
    arrivalPort: "SIP",
    departureTime: "2020-06-10T09:00:23Z",
    arrivalTime: "2020-06-10T10:25:23Z",
  },
  {
    airlineCode: "LA",
    flightNumber: "LA150",
    departurePort: "LAX",
    arrivalPort: "JFK",
    departureTime: "2020-06-10T09:00:23Z",
    arrivalTime: "2020-06-10T10:25:23Z",
  },
];

//function for inserting documents into test db
const populateDB = async () => {
  const flights = await Flight.insertMany(flightArray);
  return flights;
};

describe("tests for getFlights route", () => {
  let res: any;

  it("should successfully retrieve all flights and receive 200 status code", async () => {
    //populate db
    res = await populateDB();

    const response = await request(app).get("/flights").expect(200);

    expect(response.body.flights.length).toEqual(res.length);
  });

  it("should unsuccessfully retrieve all flights and receive 404 status code", async () => {
    const response = await request(app).get("/flights").expect(404);

    expect(response.body.message).toEqual("No flights found");
  });
});

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
    flightCode: "TA",
    flightNumber: "TA100",
    departurePort: "MEL",
    arrivalPort: "SYD",
    departureTime: new Date("2020-06-10T09:00:23Z"),
    arrivalTime: new Date("2020-06-10T10:25:23Z"),
  },
  {
    flightCode: "FX",
    flightNumber: "FX200",
    departurePort: "YYZ",
    arrivalPort: "TOT",
    departureTime: new Date("2020-06-10T09:00:23Z"),
    arrivalTime: new Date("2020-06-10T10:25:23Z"),
  },
  {
    flightCode: "TA",
    flightNumber: "TA150",
    departurePort: "JKT",
    arrivalPort: "SIP",
    departureTime: new Date("2020-06-10T09:00:23Z"),
    arrivalTime: new Date("2020-06-10T10:25:23Z"),
  },
  {
    flightCode: "LA",
    flightNumber: "LA150",
    departurePort: "LAX",
    arrivalPort: "JFK",
    departureTime: new Date("2020-06-10T09:00:23Z"),
    arrivalTime: new Date("2020-06-10T10:25:23Z"),
  },
];

const populateDB = async () => {
  const flights = await Flight.insertMany(flightArray);
  return flights;
};

it("retrieves all flights", async () => {
  const res = await populateDB();
  console.log(res);
  expect(res).toEqual("here");
});

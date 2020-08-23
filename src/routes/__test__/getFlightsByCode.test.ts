import request from "supertest";
import { app } from "../../app";
import { Flight } from "../../models/flight";

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

describe("tests for getFlightsByCode route", () => {
  let res: any;

  it("successfully retrieves flights by airline code", async () => {
    res = await populateDB();
    res = res.filter((flight: any) => {
      return flight.airlineCode === "TA";
    });
    const response = await request(app).get("/flights/TA").expect(200);
    expect(response.body.flights.length).toEqual(res.length);
  });

  it("should receive 404 for searching flights by non existant airline code", async () => {
    res = await populateDB();

    const response = await request(app).get("/flights/JK").expect(404);
    expect(response.body.message).toEqual("No flights found");
  });
});

import request from "supertest";
import { app } from "../../app";
import { Flight } from "../../models/flight";

const newFlight = {
  airlineCode: "LA",
  flightNumber: "LA150",
  departurePort: "LAX",
  arrivalPort: "JFK",
  departureTime: "2020-06-10T09:00:23Z",
  arrivalTime: "2020-06-10T10:25:23Z",
};

const invalidFlight = {
  wrong: "LA",
  nope: "LA150",
  yup: "LAX",
  ya: "JFK",
  test: 4324234,
};

describe("tests for makeFlight route", () => {
  it("successfully creates new flight", async () => {
    //check that db is empty
    const get1 = await request(app).get("/flights").expect(404);
    const flights = await Flight.find({});
    expect(flights.length).toEqual(0);

    //make new flight in empty db
    const response = await request(app)
      .post("/flights")
      .send(newFlight)
      .expect(201);

    //check flight is made and is stored in db
    const get2 = await request(app).get("/flights").expect(200);
    expect(get2.body.flights.length).toEqual(1);
  });

  it("unsuccessfully makes new flight with invalid inputs", async () => {
    //make new flight post request with invalid inputs
    const response = await request(app)
      .post("/flights")
      .send(invalidFlight)
      .expect(500);

    //check that flight was not made, db should be empty
    const flights = await Flight.find({});
    expect(flights.length).toEqual(0);
  });
});

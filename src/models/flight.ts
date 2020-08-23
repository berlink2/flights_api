import mongoose from "mongoose";

// flightNumber eg. QF400
// departurePort eg. MEL
// arrivalPort eg. SYD
// departureTime eg. UTC ISO8601 format 2020-06-10T09:00:23Z
// arrivalTime eg. UTC ISO8601 format 2020-06-10T10:25:23Z

interface FlightAttrs {
  airlineCode: string;
  flightNumber: string;
  departurePort: string;
  arrivalPort: string;
  departureTime: Date;
  arrivalTime: Date;
}

interface FlightDoc extends mongoose.Document {
  airlineCode: string;
  flightNumber: string;
  departurePort: string;
  arrivalPort: string;
  departureTime: Date;
  arrivalTime: Date;
}

interface FlightModel extends mongoose.Model<FlightDoc> {
  build(attrs: FlightAttrs): FlightDoc;
}

const flightSchema = new mongoose.Schema({
  airlineCode: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  departurePort: {
    type: String,
    required: true,
  },
  arrivalPort: {
    type: String,
    required: true,
  },
  departureTime: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  arrivalTime: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
});

flightSchema.statics.build = (attrs: FlightAttrs) => {
  return new Flight(attrs);
};

const Flight = mongoose.model<FlightDoc, FlightModel>("Flight", flightSchema);

export { Flight };

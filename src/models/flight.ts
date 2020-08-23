import mongoose from "mongoose";
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

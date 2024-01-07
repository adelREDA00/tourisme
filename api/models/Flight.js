const mongoose = require("mongoose");


const FlightSchema = new mongoose.Schema(
    {
        flightNumber: { type: String, required: true },
        departureCity: { type: String, required: true },
        arrivalCity: { type: String, required: true },
        departureTime: { type: String, required: true },
        arrivalTime: { type: String, required: true },
        price: { type: Number, required: true },
        availableSeats: { type: Number, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Flight", FlightSchema);
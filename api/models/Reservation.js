const mongoose = require('mongoose');
const User = require('./User')
const Flight = require('./Flight')

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
  passengerName: { type: String, required: true },
  seatNumber: { type: String }, // Depending on how seats are assigned
  reservationDate: { type: Date, default: Date.now() },
 
});


module.exports = mongoose.model("Reservation", reservationSchema);

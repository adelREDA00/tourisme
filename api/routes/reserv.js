const router = require("express").Router();
const Flight = require("../models/Flight");
const User = require("../models/User")
const Reservation = require("../models/Reservation")



const {verifyAdmin,verifyUser} = require("../utils/verifytoken");

// Create a reservation
router.post('/',verifyUser, async (req, res) => {
    try {
      const reservation = await Reservation.create(req.body);
      res.status(201).json(reservation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Retrieve all reservations
  router.get('/', async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.json(reservations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Retrieve a specific reservation
  router.get('/:id', async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.json(reservation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Update a reservation
  router.put('/:id', async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(reservation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Delete a reservation
  router.delete('/:id', async (req, res) => {
    try {
      await Reservation.findByIdAndDelete(req.params.id);
      res.json({ message: 'Reservation deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  
  module.exports = router;
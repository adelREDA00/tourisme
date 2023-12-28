const router = require("express").Router();
const Flight = require("../models/Flight");

const {verifyAdmin,verifyUser} = require("../utils/verifytoken");



//for now only the admin can crud posts
//CREATE ticket / flight 
router.post("/",verifyAdmin, async (req, res) => {
    const newFlight = new Flight(req.body);
  try {
    const savedFlight = await newFlight.save();
    res.status(200).json(savedFlight);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update fligh 

router.put("/:id",verifyAdmin, async (req, res) => {
  try {
  
      try {
        const updatedFlight = await Flight.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedFlight);
      } catch (err) {
        res.status(500).json(err);
      }

  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE flight
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    // Fetch the post data to get the filename of the cover image
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({ error: "flight not found" });
    }

    // Delete the post from the database
    await Flight.deleteOne({ _id: req.params.id });

    res.status(200).json("flight a été supprimé.");
  } catch (err) {
    res.status(500).json(err);
  }
});

 //GET flights
 router.get("/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id)
    res.status(200).json(flight);
  } catch (err) {
    res.status(500).json(err);
  }
});


//get all flights
router.get("/" , async(req,res)=>{
  try{
    const flights = await Flight.find()
    res.status(200).json(flights);
  }catch(err){
    res.status(500).json(err)
  }
})


module.exports = router;
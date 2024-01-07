const mongoose = require("mongoose")
const express  = require("express");
const app  = express();
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')
const cors = require('cors');



//const port = process.env.PORT || 5000;
const port =  5000;
//cookiepar
app.use(cookieParser())
//so the app can send json data
app.use(express.json({limit : '50mb',extended : true}))
app.use(express.urlencoded({limit : '50mb',extended : true}))
//for senstive VARs 
dotenv.config();
// Configure CORS to allow requests from allowed origins
const corsOptions = {
  origin: [
    '*',
    'http://localhost:5173'
  ],
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true // Add this line to enable credentials
};

app.use(cors(corsOptions));



//--------midlewares ROUTES--------//
const authRoute = require("./routes/auth")
const flightRoute = require("./routes/flight")
const resevRoute = require("./routes/reserv")


//creating auth users
app.use("/api/auth", authRoute);
app.use("/api/flight", flightRoute);
app.use("/api/reservations", resevRoute);



















// Connect to MongoDB & starting the server
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
    // Start the server only after successful MongoDB connection
    app.listen(port, () => {
      console.log(`Backend is running on port ${port}.`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();



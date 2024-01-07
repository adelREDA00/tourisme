const router = require("express").Router();
const User = require("../models/User")
//later
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
// const {verifyToken} = require("../utils/verifytoken");


// inscription

router.post('/inscription', async (req, res) => {
    try {
        //encrypte the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).send("L'utilisateur a été créé..");
        //res.status(200).json(user);
    } catch {
        res.status(500).send("Le nom d'utilisateur ou l'adresse e-mail est déjà utilisé(e).");
    }
})


//connexion
router.post("/connexion", async (req, res) =>{
    try{
        const { username, password } = req.body;
        //getting the user by name
         const user = await User.findOne({ username });
         //cheking if the user exist      
         if (!user) {
           const errorMessage = "Mauvaises informations d'identification.";
           return res.status(400).json(errorMessage);
         }
         //compaire the password
         const validated = await bcrypt.compare(password, user.password);

         if (!validated) {
            const errorMessage = "Mauvaises informations d'identification.";
            return res.status(400).json(errorMessage);
          }
          //signinig the jwt 
          const token = jwt.sign(user._doc, process.env.MY_SECRET); //need expiration for the token
          // destructuring to create a new object called others that contains all properties from user._doc except the password.
          const { password: userPassword, ...others } = user._doc;
          return res.cookie("access_token", token, { httpOnly: true }).status(200).json({ token: token, ...others });
           //send all properties from user._doc except the password.
    }catch(err) {
        return res.status(500).json(err);
    }
} )


module.exports = router;
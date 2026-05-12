// Databasanslutning till MongoDB Atlas

//Läser in miljövariabler
require("dotenv").config();

//Importerar mongoose
const mongoose = require("mongoose");


//Anslutning till MongoDB

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Database connection error:", error);
    });
//Importer
const express = require("express");
const cors = require("cors");
//Hämtar data/variabler från .env-fil (ex: PORT och DATABAS_URL)
require("dotenv").config();

//Importerar databasanslutningen till MongoDB
require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");


//Skapar express applikation
const app = express();


//MIDDLEWARE

//CORS - Tillåter requests från andra domäner
app.use(cors());
//Gör att server kan läsa JSON data
app.use(express.json());


//ROUTES
//Importerar in routes för registrering och login
app.use("/api/auth", authRoutes);


//TEST ROUTE

app.get("/", (req, res) => {
    res.json({
        message: "API fungerar"
    });
});


//START SERVER

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
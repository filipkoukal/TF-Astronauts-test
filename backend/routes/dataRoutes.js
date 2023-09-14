const express = require("express");
const router = express.Router();
const { Astronaut } = require('../models')
require("dotenv").config()

// Hello world
router.get("/test", async (req, res) => {
    try {
        const message = "Hello world!"
        res.json(message)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Get all astronauts
router.get("/astronauts", async (req, res) => {
    try {
        const astronauts = await Astronaut.findAll(); 
        res.json(astronauts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Create new astronaut
router.post("/create_astronaut", async (req, res) => {
    try {
        const {first_name, last_name, date_of_birth, superpower} = req.body
        const astronaut = await Astronaut.create({first_name, last_name, date_of_birth, superpower});
        res.json(astronaut)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


module.exports = router
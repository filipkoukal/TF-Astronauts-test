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

// Edit existing astronaut
router.put("/edit_astronaut/:id", async (req, res) => {
    try {
        const astronaut_id = req.params.id;
        const { first_name, last_name, date_of_birth, superpower } = req.body

        const oldAstro = await Astronaut.findOne({where: { id: astronaut_id }});
        await Astronaut.update({
            first_name: first_name || oldAstro.first_name,
            last_name: last_name || oldAstro.last_name,
            date_of_birth: date_of_birth || oldAstro.date_of_birth,
            superpower: superpower || oldAstro.superpower
        }, {
            where: {
                id: astronaut_id
            }
        });

        const updatedAstro = await Astronaut.findOne({where: { id: astronaut_id }});
        res.status(200).json(updatedAstro);    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Delete astronaut
router.delete("/delete_astronaut/:id", async (req, res) => {
    try {
        const astronaut_id = req.params.id;
        const astronaut = await Astronaut.findOne({where: { id: astronaut_id } });
        await astronaut.destroy();
        res.status(200).json(astronaut);    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
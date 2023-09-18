require("dotenv").config() //nastaví .env soubor =>> používání systémových proměnných > užívat pro ochranu citlivých údajů
const express = require('express') 
const app = express()
const cors = require('cors')
const { sequelize } = require('./models')

app.use(express.json({limit: '10mb', extended: true}))
app.use(cors())

const dataRouter = require("./routes/dataRoutes")
app.use("/data", dataRouter)


app.listen(3000, async () => { 
    await sequelize.authenticate() //force => přepsání schématu tabulky | alter => vytvoří novou tabulku
    await sequelize.query("SELECT setval('public.\"Astronaut_id_seq\"', 3, true)") // set initial serial value for existing data in db
    console.log("DB connected")
    console.log("Server ready!")
})    // pokud se uspěšně spustí server
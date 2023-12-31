require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { sequelize } = require('./models')

app.use(express.json({ limit: '10mb', extended: true }))
app.use(cors())

const dataRouter = require('./routes/dataRoutes')
app.use('/data', dataRouter)

app.listen(3000, async () => {
  // connect to db
  await sequelize.authenticate()

  // set initial serial value for existing data in db
  const [results, metadata] = await sequelize.query('SELECT max(id) FROM "Astronaut"')
  await sequelize.query(
    "SELECT setval('public.\"Astronaut_id_seq\"', (:max_id), true)", {
      replacements: { max_id: results[0].max },
      type: sequelize.QueryTypes.SELECT
    })
  console.log('Server ready! DB connected')
})

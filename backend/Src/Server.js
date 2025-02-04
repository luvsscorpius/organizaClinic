const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')

app.use(cors())
app.use(express.json())

const indexRoute = require('./Routes/indexRoute.route')
const addNewPatientRoute = require('./Routes/addNewPatient.route')
const getPacientesRoute = require('./Routes/getPacientes.route')
const addNewDoctorRouter = require('./Routes/addNewDoctor.route')

app.use('/', indexRoute)
app.use('/addNewPatient', addNewPatientRoute)
app.use('/getPacientes', getPacientesRoute)
app.use('/addNewDoctor', addNewDoctorRouter)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})
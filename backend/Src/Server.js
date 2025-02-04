const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')

app.use(cors())
app.use(express.json())

const indexRoute = require('./Routes/indexRoute.route')
const addNewPatientRoute = require('./Routes/addNewPatient.route')
const getPacientesRoute = require('./Routes/getPacientes.route')
const addNewDoctorRoute = require('./Routes/addNewDoctor.route')
const getDoctorsRoute = require('./Routes/getDoctors.route')
const addNewAppointment = require('./Routes/addNewAppointment.route')
const getAppointments = require('./Routes/getAppointments.route')

app.use('/', indexRoute)
app.use('/addNewPatient', addNewPatientRoute)
app.use('/getPacientes', getPacientesRoute)
app.use('/addNewDoctor', addNewDoctorRoute)
app.use('/getDoctors', getDoctorsRoute)
app.use('/addNewAppointment', addNewAppointment)
app.use('/getAppointments', getAppointments)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})
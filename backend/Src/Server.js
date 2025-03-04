const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
require('dotenv').config()

app.use(cors({
    origin: 'https://luvsscorpius.github.io',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

const indexRoute = require('./Routes/indexRoute.route')
const addNewPatientRoute = require('./Routes/addNewPatient.route')
const getPacientesRoute = require('./Routes/getPacientes.route')
const addNewDoctorRoute = require('./Routes/addNewDoctor.route')
const getDoctorsRoute = require('./Routes/getDoctors.route')
const addNewAppointment = require('./Routes/addNewAppointment.route')
const getAppointments = require('./Routes/getAppointments.route')
const deleteDoctorRoute = require('./Routes/deleteDoctor.route')
const deletePatientRoute = require('./Routes/deletePatient.route')
const updateDoctorRoute = require('./Routes/updateDoctor.route')
const updatePatientRoute = require('./Routes/updatePatient.route')
const updateAppointmentRoute = require('./Routes/updateAppointment.route')
const deleteEventRoute = require('./Routes/deleteEvent.route')

app.use('/', indexRoute)
app.use('/addNewPatient', addNewPatientRoute)
app.use('/getPacientes', getPacientesRoute)
app.use('/addNewDoctor', addNewDoctorRoute)
app.use('/getDoctors', getDoctorsRoute)
app.use('/addNewAppointment', addNewAppointment)
app.use('/getAppointments', getAppointments)
app.use('/deleteDoctor', deleteDoctorRoute)
app.use('/deletePatient', deletePatientRoute)
app.use('/updateDoctor', updateDoctorRoute)
app.use('/updatePatient', updatePatientRoute)
app.use('/updateAppointment', updateAppointmentRoute)
app.use('/deleteEvent', deleteEventRoute)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})
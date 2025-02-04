import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({ children }) => {
    const [medicos, setMedicos] = useState([])
    const [pacientes, setPacientes] = useState([])
    const [agenda, setAgenda] = useState([])

    const getPacientes = async () => {
        const res = await axios.get('http://localhost:2000/getPacientes')
        setPacientes(res.data)
        console.log(res.data)
    }

    const getMedicos = async () => {
        const res = await axios.get('http://localhost:2000/getDoctors')
        setMedicos(res.data)
    }

    const getAppointments = async () => {
        const res = await axios.get('http://localhost:2000/getAppointments')
        setAgenda(res.data)
    }

    const contextValue = {medicos, setMedicos, pacientes, setPacientes, getPacientes, getMedicos, agenda, setAgenda, getAppointments}

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider

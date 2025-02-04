import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({ children }) => {
    const [medicos, setMedicos] = useState([])
    const [pacientes, setPacientes] = useState([])

    const getPacientes = async () => {
        const res = await axios.get('http://localhost:2000/getPacientes')
        setPacientes(res.data)
        console.log(res.data)
    }

    const getMedicos = async () => {
        const res = await axios.get('http://localhost:2000/getDoctors')
        setMedicos(res.data)
    }

    const contextValue = {medicos, setMedicos, pacientes, setPacientes, getPacientes, getMedicos}

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider

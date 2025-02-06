import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({ children }) => {
    const [medicos, setMedicos] = useState([])
    const [pacientes, setPacientes] = useState([])
    const [agenda, setAgenda] = useState([])

    const navigate = useNavigate()

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

    const deleteDoctor = async (idDoctor) => {
        console.log(idDoctor)
        const res = await axios.delete(`http://localhost:2000/deleteDoctor/${idDoctor}`)
        if (res.status === 200) {
            getMedicos()
            toast.success('Médico excluído com sucesso.')
        }
    }

    const contextValue = {medicos, setMedicos, pacientes, setPacientes, getPacientes, getMedicos, agenda, setAgenda, getAppointments, deleteDoctor}

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider

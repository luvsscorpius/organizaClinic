import React, { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const OrganizaClinicContext = createContext()

const OrganizaClinicProvider = ({ children }) => {
    const [medicos, setMedicos] = useState([])
    const [pacientes, setPacientes] = useState([])
    const [agenda, setAgenda] = useState([])
    const [doctorUpdate, setDoctorUpdate] = useState({
        IDMedico: '',
        NomeMedico: '',
        CPF: '',
        CRM: '',
        Especialidade: '',
        Email: '',
        Telefone: '',
        DataDeCadastro: ''
    })

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

    const deletePatient = async (idPatient) => {
        console.log(idPatient)
        const res = await axios.delete(`http://localhost:2000/deletePatient/${idPatient}`)
        if (res.status === 200) {
            getPacientes()
            toast.success('Paciente excluído com sucesso.')
        }
    }

    const editDoctor = async (idDoctor) => {
        console.log(idDoctor)
        const findDoctor = medicos.find((doctor) => doctor.IDMedico === idDoctor)
        console.log(findDoctor)
        setDoctorUpdate((prev) => ({...prev, IDMedico: idDoctor, NomeMedico: findDoctor.Nome, CPF: findDoctor.CPF, CRM: findDoctor.CRM, Especialidade: findDoctor.Especialidade, Email: findDoctor.Email, Telefone: findDoctor.Telefone, DataDeCadastro: findDoctor.DataDeCadastro}))
    }

    const contextValue = {medicos, setMedicos, pacientes, setPacientes, getPacientes, getMedicos, agenda, setAgenda, getAppointments, deleteDoctor, deletePatient, editDoctor, doctorUpdate, setDoctorUpdate}

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider

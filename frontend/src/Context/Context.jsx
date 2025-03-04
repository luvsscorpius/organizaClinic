import React, { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

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
    const [patientUpdate, setPatientUpdate] = useState({
        IDPaciente: '',
        Nome: '',
        DataDeNascimento: '',
        Genero: '',
        Sexo: '',
        CPF: '',
        Telefone: '',
        Email: '',
        Naturalidade: '',
        CEP: '',
        Rua: '',
        Numero: '',
        Bairro: '',
        Cidade: '',
        Estado: '',
        DataDeCadastro: ''
    })

    const navigate = useNavigate('')

    const getPacientes = async () => {
        try {
            const res = await axios.get('https://organiza-clinic.vercel.app/getPacientes')
            setPacientes(res.data)
        } catch (error) {
            console.error("Erro ao buscar pacientes", error)
        }
    }

    const getMedicos = async () => {
        try {
            const res = await axios.get('https://organiza-clinic.vercel.app/getDoctors')
            setMedicos(res.data)
            console.log(res)
        } catch (error) {
            console.error("Erro ao buscar médicos", error)
        }
    }

    const getAppointments = async () => {
        try {
            const res = await axios.get('https://organiza-clinic.vercel.app/getAppointments')
            setAgenda(res.data)
        } catch (error) {
            console.error("Erro ao buscar consultas", error)
        }
    }

    const deleteDoctor = async (idDoctor) => {
        try {
            const res = await axios.delete(`https://organiza-clinic.vercel.app/deleteDoctor/${idDoctor}`)
            if (res.status === 200) {
                getMedicos()
                toast.success('Médico excluído com sucesso.')
            } else {
                toast.error('Erro ao deletar médico')
            }
        } catch (error) {
            console.error("Erro ao deletar médico", error)
        }
    }

    const deletePatient = async (idPatient) => {
        try {
            const res = await axios.delete(`https://organiza-clinic.vercel.app/deletePatient/${idPatient}`)
            if (res.status === 200) {
                getPacientes()
                toast.success('Paciente excluído com sucesso.')
            } else {
                toast.error('Erro ao deletar paciente')
            }
        } catch (error) {
            console.error('Erro ao deletar paciente', error)
        }
    }

    const editDoctor = async (idDoctor) => {
        const findDoctor = medicos.find((doctor) => doctor.IDMedico === idDoctor)

        if (!findDoctor) {
            toast.error('Médico não encontrado.')
            return
        }

        const { Nome, CPF, CRM, Especialidade, Email, Telefone, DataDeCadastro } = findDoctor
        setDoctorUpdate({ IDMedico: idDoctor, NomeMedico: Nome, CPF: CPF, CRM: CRM, Especialidade: Especialidade, Email: Email, Telefone: Telefone, DataDeCadastro: DataDeCadastro })
    }

    const sendDoctorUpdated = async (idDoctor) => {
        try {
            const res = await axios.put(`https://organiza-clinic.vercel.app/updateDoctor/${idDoctor}`, doctorUpdate, {
                headers: { "Content-Type": "application/json" }
            })

            if (res.status === 200) {
                toast.success('Médico atualizado com sucesso.')
                navigate('/Medicos')
            } else {
                toast.error('Erro ao atualizar médico')
            }
        } catch (error) {
            console.error('Erro ao atualizar médico')
        }
    }

    const editPatient = async (idPatient) => {
        const findPatient = pacientes.find((patient) => patient.IDPaciente === idPatient)

        if (!findPatient) {
            toast.error('Paciente não encontrado.')
            return
        }

        const { Nome, Genero, Sexo, CPF, Telefone, Email, Naturalidade, CEP, Rua, Numero, Bairro, Cidade, Estado } = findPatient

        // Formatando as datas para ficar no formato de yyyy/mm/dd
        const dataDeNascimentoUpdated = new Date(findPatient.DataDeNascimento).toISOString().split('T')[0]
        const dataDeCadastroUpdated = new Date(findPatient.DataDeCadastro).toISOString().split('T')[0]

        // Setando no state
        setPatientUpdate((prev) => ({ ...prev, IDPaciente: idPatient, Nome: Nome, DataDeNascimento: dataDeNascimentoUpdated, Genero: Genero, Sexo: Sexo, CPF: CPF, Telefone: Telefone, Email: Email, Naturalidade: Naturalidade, CEP: CEP, Rua: Rua, Numero: Numero, Bairro: Bairro, Cidade: Cidade, Estado: Estado, DataDeCadastro: dataDeCadastroUpdated }))
    }

    const sendPatientUpdated = async (idPatient) => {
        try {
            const res = await axios.put(`https://organiza-clinic.vercel.app/updatePatient/${idPatient}`, patientUpdate, {
                headers: { "Content-Type": "application/json" }
            })

            if (res.status === 200) {
                toast.success('Paciente atualizado com sucesso.')
                navigate('/Pacientes')
            } else {
                toast.error('Erro ao atualizar paciente')
            }
        } catch (error) {
            console.error('Erro ao atualizar paciente', error)
        }
    }

    const bookedTimes = agenda.map(event => ({ date: event.DataConsulta.split('T')[0], hours: event.HorarioConsulta.split(':').slice(0, 2).join(':') }))

    const groupedTimes = bookedTimes.reduce((acc, { date, hours }) => {
        (acc[date] ||= []).push(hours)
        return acc
    }, [])

    const contextValue = { medicos, setMedicos, pacientes, setPacientes, getPacientes, getMedicos, agenda, setAgenda, getAppointments, deleteDoctor, deletePatient, editDoctor, doctorUpdate, setDoctorUpdate, editPatient, patientUpdate, setPatientUpdate, sendDoctorUpdated, sendPatientUpdated, bookedTimes, groupedTimes }

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider

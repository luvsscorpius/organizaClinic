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
        const findDoctor = medicos.find((doctor) => doctor.IDMedico === idDoctor)

        const {Nome, CPF, CRM, Especialidade, Email, Telefone, DataDeCadastro} = findDoctor
        setDoctorUpdate({ IDMedico: idDoctor, NomeMedico: Nome, CPF: CPF, CRM: CRM, Especialidade: Especialidade, Email: Email, Telefone: Telefone, DataDeCadastro: DataDeCadastro })
    }

    const sendDoctorUpdated = async (idDoctor) => {
        const res = await axios.put(`http://localhost:2000/updateDoctor/${idDoctor}`, doctorUpdate, {
            headers: { "Content-Type": "application/json" }
        })

        if (res.status === 200) {
            toast.success('Médico atualizado com sucesso.')
            navigate('/Medicos')
        } else {
            toast.error('Erro ao atualizar médico')
        }
    }

    const editPatient = async (idPatient) => {
        console.log(idPatient)
        const findPatient = pacientes.find((patient) => patient.IDPaciente === idPatient)

        // Formatando as datas para ficar no formato de yyyy/mm/dd
        const dataDeNascimentoUpdated = new Date(findPatient.DataDeNascimento).toISOString().split('T')[0]
        const dataDeCadastroUpdated = new Date(findPatient.DataDeCadastro).toISOString().split('T')[0]

        // Setando no state
        setPatientUpdate((prev) => ({ ...prev, IDPaciente: idPatient, Nome: findPatient.Nome, DataDeNascimento: dataDeNascimentoUpdated, Genero: findPatient.Genero, Sexo: findPatient.Sexo, CPF: findPatient.CPF, Telefone: findPatient.Telefone, Email: findPatient.Email, Naturalidade: findPatient.Naturalidade, CEP: findPatient.CEP, Rua: findPatient.Rua, Numero: findPatient.Numero, Bairro: findPatient.Bairro, Cidade: findPatient.Cidade, Estado: findPatient.Estado, DataDeCadastro: dataDeCadastroUpdated }))

        // const res = await axios.put(`http://localhost:2000/updateDoctor/${idDoctor}`, doctorUpdate, {
        //     headers: {"Content-Type": "application/json"}
        // })

        // if (res.status === 200) {
        //     toast.success('Médico atualizado com sucesso.')
        //     navigate('/Medicos')
        // }

    }

    const contextValue = { medicos, setMedicos, pacientes, setPacientes, getPacientes, getMedicos, agenda, setAgenda, getAppointments, deleteDoctor, deletePatient, editDoctor, doctorUpdate, setDoctorUpdate, editPatient, patientUpdate, setPatientUpdate, sendDoctorUpdated }

    return (
        <OrganizaClinicContext.Provider value={contextValue}>
            {children}
        </OrganizaClinicContext.Provider>
    )
}

export default OrganizaClinicProvider

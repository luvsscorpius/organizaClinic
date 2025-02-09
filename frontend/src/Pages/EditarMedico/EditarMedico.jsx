import React, { useContext, useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from '../CadastrarMedico/Styles'
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { OrganizaClinicContext } from '../../Context/Context';

export const EditarMedico = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    const navigate = useNavigate()

    const {doctorUpdate, setDoctorUpdate, editDoctor, sendDoctorUpdated} = useContext(OrganizaClinicContext)

    console.log(doctorUpdate)

    return (
        <H.section style={{flexDirection: 'column'}}>
            <C.ButtonContainer>
                <span onClick={() => navigate('/Medicos')}>
                    <MdOutlineArrowBack size={22} />
                    <p>Voltar</p>
                </span>
            </C.ButtonContainer>

            <C.formContainer>
                <form action="">
                    <C.titleContainer>
                        <FaUserPlus size={22} />
                        <h1>Editar Médico</h1>
                    </C.titleContainer>

                    <C.inputContainer>
                        <div className="inputContainerItem">
                            <input type="text" placeholder='Nome completo' value={doctorUpdate.NomeMedico} onChange={(e) => setDoctorUpdate((prev) => ({...prev, NomeMedico: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF' value={doctorUpdate.CPF} onChange={(e) => setDoctorUpdate((prev) => ({...prev, CPF: e.target.value}))} maxLength={11} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CRM' value={doctorUpdate.CRM} onChange={(e) => setDoctorUpdate((prev) => ({...prev, CRM: e.target.value}))} maxLength={10} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Especialidade' value={doctorUpdate.Especialidade} onChange={(e) => setDoctorUpdate((prev) => ({...prev, Especialidade: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' onChange={(e) => setDoctorUpdate((prev) => ({...prev, Email: e.target.value}))} value={doctorUpdate.Email} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="tel" placeholder='Telefone' maxLength={11} value={doctorUpdate.Telefone} onChange={(e) => setDoctorUpdate((prev) => ({...prev, Telefone: e.target.value}))} />
                            <input type="date" value={date} readOnly />
                        </div>

                        <button type='button' onClick={() => sendDoctorUpdated(doctorUpdate.IDMedico)} >Salvar</button>
                    </C.inputContainer>
                </form>
            </C.formContainer>
        </H.section>
    )
}

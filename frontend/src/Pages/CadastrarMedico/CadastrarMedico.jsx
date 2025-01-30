import React, { useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from './Styles'
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const CadastrarMedico = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))
    const [medicos, setMedicos] = useState([])
    const [newMedico, setNewMedico] = useState({
        Nome: '',
        CPF: '',
        CRM: '',
        Especialidade: '',
        Email: '',
        Telefone: '',
        DataDeCadastro: date
    })

    const navigate = useNavigate()

    const cadastrarMedico = (e) => {
        e.preventDefault()

        if (newMedico.Nome === '' || newMedico.CPF === '' || newMedico.CRM === '' || newMedico.Especialidade === '' || newMedico.Telefone === '') {
            toast.error('Preencha todos os dados antes de salvar.')
        } else {
            navigate('/Medicos')
            toast.success('Médico cadastrado com sucesso.')
        }
    }

    return (
        <H.section style={{flexDirection: 'column'}}>
            <C.ButtonContainer>
                <span onClick={() => navigate('/Medicos')}>
                    <MdOutlineArrowBack size={22} />
                    <p>Voltar</p>
                </span>
            </C.ButtonContainer>

            <C.formContainer>
                <form>
                    <C.titleContainer>
                        <FaUserPlus size={22} />
                        <h1>Cadastrar Médico</h1>
                    </C.titleContainer>

                    <C.inputContainer> 
                        <div className="inputContainerItem">
                            <input type="text" placeholder='Nome completo' value={newMedico.Nome} onChange={(e) => setNewMedico((prev) => ({...prev, Nome: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF'  value={newMedico.CPF} onChange={(e) => setNewMedico((prev) => ({...prev, CPF: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CRM' value={newMedico.CRM} onChange={(e) => setNewMedico((prev) => ({...prev, CRM: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Especialidade' value={newMedico.Especialidade} onChange={(e) => setNewMedico((prev) => ({...prev, Especialidade: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' value={newMedico.Email} onChange={(e) => setNewMedico((prev) => ({...prev, Email: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="tel" placeholder='Telefone' maxLength={11} value={newMedico.Telefone} onChange={(e) => setNewMedico((prev) => ({...prev, Telefone: e.target.value}))} />
                            <input type="date" value={date} readOnly/>
                        </div>

                        <button onClick={(e) => cadastrarMedico(e)}>Salvar</button>
                    </C.inputContainer>
                </form>
            </C.formContainer>
        </H.section>
    )
}

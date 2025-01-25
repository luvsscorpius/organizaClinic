import React, { useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from './Styles'
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const CadastrarPaciente = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [medicos, setMedicos] = useState([])
    const [newPatient, setNewPatient] = useState({
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
        DataDeCadastro: '',
    })

    const cadastrarPaciente = (e) => {
        e.preventDefault()

        if (newPatient.Nome === '' || newPatient.DataDeNascimento === '' || newPatient.CRM === '' || newPatient.Genero === '' || newPatient.Sexo === '' || newPatient.CPF === '' || newPatient.Telefone === '' || newPatient.Email === ''|| newPatient.Naturalidade === '' || newPatient.CEP === '' || newPatient.Rua === '' || newPatient.Numero === '' || newPatient.Bairro === '' || newPatient.Cidade === '' || newPatient.Estado === '') {
            toast.error('Preencha todos os dados antes de salvar.')
        } else {
            navigate('/Medicos')
            toast.success('Médico cadastrado com sucesso.')
        }
    }

    const navigate = useNavigate()

    return (
        <H.section>
            <C.ButtonContainer>
                <span onClick={() => navigate('/Pacientes')}>
                    <MdOutlineArrowBack size={22} />
                    <p>Voltar</p>
                </span>
            </C.ButtonContainer>

            <C.formContainer>
                <form action="">
                    <C.titleContainer>
                        <FaUserPlus size={22} />
                        <h1>Cadastrar Paciente</h1>
                    </C.titleContainer>

                    <C.inputContainer>
                        <div className="inputContainerItem">
                            <input type="text" placeholder='Nome completo' value={newPatient.Nome} onChange={(e) => setNewPatient((prev) => ({...prev, Nome: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="date" value={newPatient.DataDeNascimento} onChange={(e) => setNewPatient((prev) => ({...prev, DataDeNascimento: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={newPatient.Genero} onChange={(e) => setNewPatient((prev) => ({...prev, Genero: e.target.value}))}>
                                <option>Informe seu gênero</option>
                                <option value="cisgênero">cisgênero</option>
                                <option value="transgênero">transgênero</option>
                                <option value="não-binário">não-binário</option>
                                <option value="agênero">agênero</option>
                            </select>

                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={newPatient.Sexo} onChange={(e) => setNewPatient((prev) => ({...prev, Sexo: e.target.value}))}>
                                <option>Informe seu sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF' maxLength={11}  value={newPatient.CPF} onChange={(e) => setNewPatient((prev) => ({...prev, CPF: e.target.value}))}/>
                            <input type="tel" placeholder='Telefone' maxLength={11} value={newPatient.Telefone} onChange={(e) => setNewPatient((prev) => ({...prev, Telefone: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' value={newPatient.Email} onChange={(e) => setNewPatient((prev) => ({...prev, Email: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Naturalidade' value={newPatient.Naturalidade} onChange={(e) => setNewPatient((prev) => ({...prev, Naturalidade: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CEP' maxLength={8} value={newPatient.CEP} onChange={(e) => setNewPatient((prev) => ({...prev, CEP: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Rua' value={newPatient.Rua} onChange={(e) => setNewPatient((prev) => ({...prev, Rua: e.target.value}))} />
                            <input type="text" placeholder='Número' value={newPatient.Numero} onChange={(e) => setNewPatient((prev) => ({...prev, Numero: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Bairro' value={newPatient.Bairro} onChange={(e) => setNewPatient((prev) => ({...prev, Bairro: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Cidade' value={newPatient.Cidade} onChange={(e) => setNewPatient((prev) => ({...prev, Cidade: e.target.value}))}/>
                            <input type="text" placeholder='Estado' value={newPatient.Estado} onChange={(e) => setNewPatient((prev) => ({...prev, Estado: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="date" value={date} readOnly />
                        </div>

                        <button onClick={(e) => cadastrarPaciente(e)}>Salvar</button>
                    </C.inputContainer>
                </form>
            </C.formContainer>
        </H.section>
    )
}

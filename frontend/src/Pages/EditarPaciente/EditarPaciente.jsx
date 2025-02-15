import React, { useContext, useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from '../CadastrarMedico/Styles'
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { OrganizaClinicContext } from '../../Context/Context';

export const EditarPaciente = () => {
    const navigate = useNavigate()

    const {patientUpdate, setPatientUpdate, sendPatientUpdated} = useContext(OrganizaClinicContext)

    return (
        <H.section style={{flexDirection: 'column'}}>
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
                        <h1>Editar Paciente</h1>
                    </C.titleContainer>

                    <C.inputContainer>
                    <div className="inputContainerItem">
                            <input type="text" placeholder='Nome completo' maxLength={25} value={patientUpdate.Nome} onChange={(e) => setPatientUpdate((prev) => ({...prev, Nome: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="date" value={patientUpdate.DataDeNascimento} onChange={(e) => setPatientUpdate((prev) => ({...prev, DataDeNascimento: e.target.value}))}/>
                        </div>

                        <div className="inputContainerItem">
                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={patientUpdate.Genero} onChange={(e) => setPatientUpdate((prev) => ({...prev, Genero: e.target.value}))} >
                                <option>Informe seu gênero</option>
                                <option value="cisgênero">cisgênero</option>
                                <option value="transgênero">transgênero</option>
                                <option value="não-binário">não-binário</option>
                                <option value="agênero">agênero</option>
                            </select>

                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={patientUpdate.Sexo} onChange={(e) => setPatientUpdate((prev) => ({...prev, Sexo: e.target.value}))}>
                                <option>Informe seu sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF' maxLength={11} value={patientUpdate.CPF} onChange={(e) => setPatientUpdate((prev) => ({...prev, CPF: e.target.value}))} />
                            <input type="tel" placeholder='Telefone' maxLength={11} value={patientUpdate.Telefone} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' maxLength={50} value={patientUpdate.Email} onChange={(e) => setPatientUpdate((prev) => ({...prev, Email: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Naturalidade' maxLength={25} value={patientUpdate.Naturalidade} onChange={(e) => setPatientUpdate((prev) => ({...prev, Naturalidade: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CEP' maxLength={8} value={patientUpdate.CEP} onChange={(e) => setPatientUpdate((prev) => ({...prev, CEP: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Rua' maxLength={50} value={patientUpdate.Rua} onChange={(e) => setPatientUpdate((prev) => ({...prev, Rua: e.target.value}))} />
                            <input type="text" placeholder='Número' maxLength={10} value={patientUpdate.Numero} onChange={(e) => setPatientUpdate((prev) => ({...prev, Numero: e.target.value}))}  />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Bairro' maxLength={50}  value={patientUpdate.Bairro} onChange={(e) => setPatientUpdate((prev) => ({...prev, Bairro: e.target.value}))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Cidade' maxLength={50} value={patientUpdate.Cidade} onChange={(e) => setPatientUpdate((prev) => ({...prev, Cidade: e.target.value}))}/>
                            <input type="text" placeholder='Estado' maxLength={50} value={patientUpdate.Estado} onChange={(e) => setPatientUpdate((prev) => ({...prev, Estado: e.target.value}))}/>
                        </div>

                        <div className="inputContainerItem">
                            <input type="date" value={patientUpdate.DataDeCadastro} readOnly />
                        </div>

                        <button type='button' onClick={() => sendPatientUpdated(patientUpdate.IDPaciente)}>Salvar</button>
                    </C.inputContainer>
                </form>
            </C.formContainer>
        </H.section>
    )
}

import React, { useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from './Styles'
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';

export const CadastrarPaciente = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

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
                            <input type="text" placeholder='Nome completo' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="date" />
                        </div>

                        <div className="inputContainerItem">
                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                <option>Informe seu gênero</option>
                                <option value="cisgênero">cisgênero</option>
                                <option value="transgênero">transgênero</option>
                                <option value="não-binário">não-binário</option>
                                <option value="agênero">agênero</option>
                            </select>

                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                <option>Informe seu sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF' maxLength={11} />
                            <input type="tel" placeholder='Telefone' maxLength={11} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Naturalidade' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CEP' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Rua' />
                            <input type="text" placeholder='Número' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Bairro' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Cidade' />
                            <input type="text" placeholder='Estado' />
                        </div>

                        <button>Salvar</button>
                    </C.inputContainer>
                </form>
            </C.formContainer>
        </H.section>
    )
}

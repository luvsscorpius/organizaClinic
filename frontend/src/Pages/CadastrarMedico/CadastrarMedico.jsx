import React, { useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from './Styles'
import { FaUserPlus } from "react-icons/fa6";

export const CadastrarMedico = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))

    return (
        <H.section>
            <C.ButtonContainer>
                <span>
                    <MdOutlineArrowBack size={22} />
                    <p>Voltar</p>
                </span>
            </C.ButtonContainer>

            <C.formContainer>
                <form action="">
                    <C.titleContainer>
                        <FaUserPlus size={22} />
                        <h1>Cadastrar Médico</h1>
                    </C.titleContainer>

                    <C.inputContainer> 
                        <div className="inputContainerItem">
                            <input type="text" placeholder='Nome completo' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CRM' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Especialidade' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' />
                        </div>

                        <div className="inputContainerItem">
                            <input type="tel" placeholder='Telefone' maxLength={11} />
                            <input type="date" value={date} readOnly/>
                        </div>

                        <button>Salvar</button>
                    </C.inputContainer>
                </form>
            </C.formContainer>
        </H.section>
    )
}

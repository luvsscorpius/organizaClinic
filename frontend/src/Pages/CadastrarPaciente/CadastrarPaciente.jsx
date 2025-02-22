import React, { useContext, useState } from 'react'
import * as H from '../Home/Styles'
import { MdOutlineArrowBack } from "react-icons/md";
import * as C from './Styles'
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { OrganizaClinicContext } from '../../Context/Context';
import axios from 'axios'

export const CadastrarPaciente = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
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
        DataDeCadastro: date,
    })

    // Feat: Implementando busca de endereço através do CEP
    const buscarCEP = async () => {
        if (newPatient.CEP.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${newPatient.CEP}/json/`)
                setNewPatient((prev) => ({ ...prev, Rua: response.data.logradouro, Bairro: response.data.bairro, Cidade: response.data.localidade, Estado: response.data.estado }))
            } catch (error) {
                console.error("Erro ao buscar o CEP", error)
            }
        }
    }

    console.log(newPatient)

    const { pacientes, setPacientes } = useContext(OrganizaClinicContext)

    const checkCPFs = (CPF) => {
        return pacientes.some((paciente) => paciente.CPF === CPF)
    }

    const cadastrarPaciente = async (e) => {
        e.preventDefault()

        const { Nome, DataDeNascimento, Genero, Sexo, CPF, Telefone, Email, Naturalidade, CEP, Rua, Numero, Bairro, Cidade, Estado, DataDeCadastro } = newPatient

        if (Nome === '' || DataDeNascimento === '' || Genero === '' || Sexo === '' || CPF === '' || Telefone === '' || Email === '' || Naturalidade === '' || CEP === '' || Rua === '' || Numero === '' || Bairro === '' || Cidade === '' || Estado === '', DataDeCadastro === '') {
            toast.error('Preencha todos os dados antes de salvar.')
        } else if (CPF.length < 11) {
            toast.error('Campo CPF precisa ter 11 digitos.')
        } else if (checkCPFs(CPF)) {
            toast.error('CPF já cadastrado no banco de dados.')
        } else {
            try {
                const res = await axios.post('http://localhost:2000/addNewPatient', newPatient, {
                    headers: { 'Content-Type': 'application/json' }
                })

                if (res.status === 200) {
                    navigate('/Pacientes')
                    setPacientes((prev) => [...prev, newPatient])
                    toast.success('Médico cadastrado com sucesso.')
                }

            } catch (error) {
                console.error(error)
            }
        }
    }

    const navigate = useNavigate()

    return (
        <H.section style={{ flexDirection: 'column' }}>
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
                            <input type="text" placeholder='Nome completo' maxLength={25} value={newPatient.Nome} onChange={(e) => setNewPatient((prev) => ({ ...prev, Nome: e.target.value }))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="date" value={newPatient.DataDeNascimento} onChange={(e) => setNewPatient((prev) => ({ ...prev, DataDeNascimento: e.target.value }))} />
                        </div>

                        <div className="inputContainerItem">
                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={newPatient.Genero} onChange={(e) => setNewPatient((prev) => ({ ...prev, Genero: e.target.value }))}>
                                <option>Informe seu gênero</option>
                                <option value="cisgênero">cisgênero</option>
                                <option value="transgênero">transgênero</option>
                                <option value="não-binário">não-binário</option>
                                <option value="agênero">agênero</option>
                            </select>

                            <select
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" value={newPatient.Sexo} onChange={(e) => setNewPatient((prev) => ({ ...prev, Sexo: e.target.value }))}>
                                <option>Informe seu sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CPF' minLength={11} maxLength={11} value={newPatient.CPF} onChange={(e) => setNewPatient((prev) => ({ ...prev, CPF: e.target.value }))} />
                            <input type="tel" placeholder='Telefone' maxLength={11} value={newPatient.Telefone} onChange={(e) => setNewPatient((prev) => ({ ...prev, Telefone: e.target.value }))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="email" placeholder='E-mail' maxLength={50} value={newPatient.Email} onChange={(e) => setNewPatient((prev) => ({ ...prev, Email: e.target.value }))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='Naturalidade' maxLength={25} value={newPatient.Naturalidade} onChange={(e) => setNewPatient((prev) => ({ ...prev, Naturalidade: e.target.value }))} />
                        </div>

                        <div className="inputContainerItem">
                            <input type="text" placeholder='CEP' maxLength={8} value={newPatient.CEP} onChange={(e) => setNewPatient((prev) => ({ ...prev, CEP: e.target.value }))} onBlur={buscarCEP} />
                        </div>

                        {newPatient.Rua ? (
                            <>
                                <div className="inputContainerItem">
                                    <input type="text" placeholder='Rua' maxLength={50} value={newPatient.Rua} onChange={(e) => setNewPatient((prev) => ({ ...prev, Rua: e.target.value }))} readOnly />
                                    <input type="text" placeholder='Número' maxLength={10} value={newPatient.Numero} onChange={(e) => setNewPatient((prev) => ({ ...prev, Numero: e.target.value }))} />
                                </div>

                                <div className="inputContainerItem">
                                    <input type="text" placeholder='Cidade' maxLength={50} value={newPatient.Cidade} onChange={(e) => setNewPatient((prev) => ({ ...prev, Cidade: e.target.value }))} readOnly />
                                    <input type="text" placeholder='Estado' maxLength={50} value={newPatient.Estado} onChange={(e) => setNewPatient((prev) => ({ ...prev, Estado: e.target.value }))} readOnly />
                                </div>
                            </>
                        ) : ''}

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

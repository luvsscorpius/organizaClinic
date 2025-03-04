import React, { useContext, useEffect, useState } from 'react'
import * as H from '../Home/Styles'
import * as M from '../Medicos/Styles'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { OrganizaClinicContext } from '../../Context/Context';

export const Pacientes = () => {

  const navigate = useNavigate()

  const { pacientes, getPacientes, deletePatient, editPatient } = useContext(OrganizaClinicContext)

  const [filteredPacientes, setFilteredPacientes] = useState([])
  
  useEffect(() => {
    getPacientes()
  }, [])

  useEffect(() => {
    setFilteredPacientes(pacientes)
  }, [pacientes])

  const findPatient = (patientName) => {
    const lowerCasePatientName = patientName.toLowerCase()

    const patientFound = pacientes.filter((patient) => patient.Nome.toLowerCase().includes(lowerCasePatientName))
    setFilteredPacientes(patientFound)
  }

  return (
    <H.section style={{ flexDirection: 'column' }}>
      <M.buttonContainer>
        <span className="searchSpan">
          <HiOutlineMagnifyingGlass />
          <input type="search" placeholder='Pesquise um paciente' onChange={(e) => findPatient(e.target.value)} />
        </span>

        <span className='buttonSpan' onClick={() => navigate('cadastrarpaciente')}>
          <FaPlus />
          <button>Novo</button>
        </span>
      </M.buttonContainer>

      <M.tableContainer>
        <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table class="w-full text-left table-auto min-w-max text-slate-800">
            <thead>
              <tr class="text-slate-500 border-b border-slate-300 bg-slate-50 bg-[#3B448E] text-[#eee]">
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    ID
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Nome
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Data de nascimento
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Gênero
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Sexo
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    CPF
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Telefone
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Email
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Naturalidade
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    CEP
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Rua
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Numero
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Bairro
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Cidade
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Estado
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Data de Cadastro
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">Ações</p>
                </th>
              </tr>
            </thead>
            <tbody>

              {filteredPacientes.map((paciente) => (
                <tr class="hover:bg-slate-50" key={paciente.IDPaciente}>
                  <td class="p-4">
                    <p class="text-sm font-bold">
                      {paciente.IDPaciente}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {paciente.Nome}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.DataDeNascimento}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Genero}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Sexo}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.CPF}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Telefone}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Email}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Naturalidade}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.CEP}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Rua}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Numero}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Bairro}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Cidade}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.Estado}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {paciente.DataDeCadastro}
                    </p>
                  </td>
                  <td class="p-4 tdIcons">
                    <a href="#/Pacientes" class="text-sm font-semibold ">
                      <FaRegTrashAlt size={22} onClick={() => deletePatient(paciente.IDPaciente)} />
                    </a>
                    <a href="#/Pacientes/editarPaciente" class="text-sm font-semibold">
                      <FaEdit size={22} onClick={() => editPatient(paciente.IDPaciente)} />
                    </a>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </M.tableContainer>
    </H.section>
  )
}

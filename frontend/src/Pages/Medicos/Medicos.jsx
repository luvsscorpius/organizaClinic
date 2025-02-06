import React, { useContext, useEffect } from 'react'
import * as H from '../Home/Styles'
import * as M from './Styles'
import { FaPlus } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { OrganizaClinicContext } from '../../Context/Context';

export const Medicos = () => {

  const navigate = useNavigate()

  const { medicos, getMedicos, deleteDoctor, editDoctor } = useContext(OrganizaClinicContext)

  useEffect(() => {
    getMedicos()
  }, [])

  return (
    <H.section style={{ flexDirection: 'column' }}>
      <M.buttonContainer>
        <span className='searchSpan'>
          <HiOutlineMagnifyingGlass />
          <input type="search" placeholder='Pesquise um médico' />
        </span>

        <span className='buttonSpan' onClick={() => navigate('cadastrarmedico')}>
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
                    CPF
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    CRM
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Especialidade
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    E-mail
                  </p>
                </th>
                <th class="p-4">
                  <p class="text-sm leading-none font-normal">
                    Telefone
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

              {medicos.map((medico) => (
                <tr class="hover:bg-slate-50" key={medico.IDMedico}>
                  <td class="p-4">
                    <p class="text-sm font-bold">
                      {medico.IDMedico}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {medico.Nome}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {medico.CPF}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {medico.CRM}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {medico.Especialidade}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {medico.Email}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {medico.Telefone}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                    {medico.DataDeCadastro}
                    </p>
                  </td>
                  <td class="p-4 tdIcons">
                    <a href="/#/Medicos" class="text-sm font-semibold ">
                      <FaRegTrashAlt size={22} onClick={() => deleteDoctor(medico.IDMedico)} />
                    </a>
                    <a href="/#/Medicos/editarmedico" class="text-sm font-semibold ">
                      <FaEdit size={22} onClick={() => editDoctor(medico.IDMedico)} />
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

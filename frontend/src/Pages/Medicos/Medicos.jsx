import React from 'react'
import * as H from '../Home/Styles'
import * as M from './Styles'
import { FaPlus } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../../Css/index.css'
import { useNavigate } from 'react-router';

export const Medicos = () => {

  const navigate = useNavigate()

  return (
    <H.section>
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
              <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
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
                  <p class="text-sm leading-none font-normal">Ações</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-slate-50">
                <td class="p-4">
                  <p class="text-sm font-bold">
                    1
                  </p>
                </td>
                <td class="p-4">
                  <p class="text-sm">
                    João
                  </p>
                </td>
                <td class="p-4">
                  <p class="text-sm">
                    15630436252
                  </p>
                </td>
                <td class="p-4">
                  <p class="text-sm">
                    1262336
                  </p>
                </td>
                <td class="p-4">
                  <p class="text-sm">
                    Psicólogo
                  </p>
                </td>
                <td class="p-4">
                  <p class="text-sm">
                    joao@gmail.com
                  </p>
                </td>
                <td class="p-4">
                  <p class="text-sm">
                    35998922086
                  </p>
                </td>
                <td class="p-4 tdIcons">
                  <a href="#" class="text-sm font-semibold ">
                    <FaRegTrashAlt size={22}/>
                  </a>
                  <a href="#" class="text-sm font-semibold ">
                    <FaEdit size={22}/>
                  </a>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </M.tableContainer>
    </H.section>
  )
}

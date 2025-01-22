import React from 'react'
import * as H from '../Home/Styles'
import * as M from './Styles'
import { FaPlus } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const Medicos = () => {
  return (
    <H.section>
        <M.buttonContainer>
          <span className='searchSpan'>
            <HiOutlineMagnifyingGlass/>
            <input type="search" placeholder='Pesquise um médico'  />
          </span>

          <span className='buttonSpan'>
            <FaPlus/>
            <button>Novo</button>
          </span>
        </M.buttonContainer>
    </H.section>
  )
}

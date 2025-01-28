import React, { useEffect, useState } from 'react'
import * as N from './Styles'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const Nav = () => {
    const [activeName, setActiveName] = useState('Home')

    // usando o useEffect para recuperar o hash da url e adicionar a classname active 

    const activeUpdate = () => {
        const path = window.location.hash
        const pathArray = path.split('#/')
        const pathUpdated = pathArray[1]

        console.log(pathUpdated)

        if (pathUpdated === 'Medicos/cadastrarmedico' || pathUpdated === 'Medicos/editarmedico') {
            setActiveName('Medicos')
        } else if (pathUpdated === 'Pacientes/cadastrarpaciente') {
            setActiveName('Pacientes')
        } else if (pathUpdated === '' || pathUpdated === undefined) {
            setActiveName('Home')
        } else {
            setActiveName(pathUpdated)
        }
    }
    
    useEffect(() => {
        activeUpdate()
    })


    const navigate = useNavigate()

    const handleActive = (e) => {
        console.log(e)
        setActiveName(e)
        if (e === 'Home') {
            console.log('teste')
            navigate('/')
        } else {
            navigate(`/${e}`)
        }
    }


    return (
        <N.navContainer>
            <N.titleContainer>
                <FaClinicMedical size={22} />
                <h1>OrganizaClinic</h1>
            </N.titleContainer>

            <N.Nav>
                <ul>
                    <span className={activeName === 'Home' ? 'active' : ''} onClick={(e) => handleActive('Home')} >
                        <IoHomeOutline size={22} />
                        <li>Inicio</li>
                    </span>

                    <span className={activeName === 'Agenda' ? 'active' : ''} onClick={(e) => handleActive('Agenda')}>
                        <FaRegCalendarAlt size={22} />
                        <li>Agenda</li>
                    </span>

                    <span className={activeName === 'Pacientes' ? 'active' : ''} onClick={(e) => handleActive('Pacientes')}>
                        <IoIosPeople size={22} />
                        <li>Pacientes</li>
                    </span>

                    <span className={activeName === 'Medicos' ? 'active' : ''} onClick={(e) => handleActive('Medicos')}>
                        <FaUserDoctor size={22} />
                        <li>Médicos</li>
                    </span>
                </ul>
            </N.Nav>
        </N.navContainer>
    )
}

import React, { useState } from 'react'
import * as N from './Styles'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";

export const Nav = () => {
    const [activeName, setActiveName] = useState('Home')

    const handleActive = (e) => {
        console.log(e)
        setActiveName(e)
    }

    console.log(activeName)

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

                    <span className={activeName === 'Médicos' ? 'active' : ''} onClick={(e) => handleActive('Médicos')}>
                        <FaUserDoctor size={22} />
                        <li>Médicos</li>
                    </span>
                </ul>
            </N.Nav>
        </N.navContainer>
    )
}

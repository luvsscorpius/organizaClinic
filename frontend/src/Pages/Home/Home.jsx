import React, { useContext, useEffect } from 'react'
import * as H from './Styles'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import { ptBR} from 'react-day-picker/locale'
import "react-day-picker/style.css";
import { OrganizaClinicContext } from '../../Context/Context';

export const Home = () => {
    const [selected, setSelected] = useState(new Date());

    const bookedDays = [
        new Date(2025, 0, 20), // 20 de Janeiro de 2025
        new Date(2025, 0, 21), // 21 de Janeiro de 2025
        new Date(2025, 0, 25), // 25 de Janeiro de 2025
    ];

    const {agenda, pacientes, medicos, getMedicos, getPacientes, getAppointments} = useContext(OrganizaClinicContext)

    useEffect(() => {
        getMedicos()
        getAppointments()
        getPacientes()
    }, [])
 
    return (
        <H.section>
            <H.Container className='first'>
                <span>
                    <FaChartLine size={22} />
                    <h1>Informações</h1>
                </span>

                <H.infoContainer>
                    <div className="container-items">
                        <div className="container-item">
                            <div className="iconContainer">
                                <FaRegCalendarAlt size={22} />
                            </div>

                            <span>
                                <h3>Agendamentos</h3>
                                <p>{agenda.length}</p>
                            </span>
                        </div>
                    </div>

                    <div className="container-items">
                        <div className="container-item">
                            <div className="iconContainer">
                                <FaRegCalendarAlt size={22} />
                            </div>

                            <span>
                                <h3>Pacientes</h3>
                                <p>{pacientes.length}</p>
                            </span>
                        </div>

                        <div className="container-item">
                            <div className="iconContainer">
                                <FaRegCalendarAlt size={22} />
                            </div>

                            <span>
                                <h3>Médicos</h3>
                                <p>{medicos.length}</p>
                            </span>
                        </div>
                    </div>

                </H.infoContainer>
            </H.Container>

            <H.Container className='second'>
                <span className='titleContainer'>
                    <FaRegCalendarCheck size={22} />
                    <h1>Datas Disponíveis</h1>
                </span>

                <span className='calendarContainer'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        className='daypicker'
                        onSelect={setSelected}
                        disabled={[{ before: new Date() }, ...bookedDays]}
                        defaultMonth={new Date()}
                        locale={ptBR}
                        modifiers={{
                            booked: bookedDays,
                        }}
                        modifiersClassNames={{
                            booked: 'booked-day',
                        }}
                        footer={
                            selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                        } />
                </span>
            </H.Container>
        </H.section>
    )
}

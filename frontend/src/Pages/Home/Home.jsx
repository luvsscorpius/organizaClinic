import React, { useContext, useEffect } from 'react'
import * as H from './Styles'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import { da, ptBR} from 'react-day-picker/locale'
import "react-day-picker/style.css";
import { OrganizaClinicContext } from '../../Context/Context';

export const Home = () => {
    const [selected, setSelected] = useState(new Date());

    const [bookedDays, setBookedDays] = useState([])

    const {agenda, pacientes, medicos, getMedicos, getPacientes, getAppointments, groupedTimes} = useContext(OrganizaClinicContext)

    useEffect(() => {
        getMedicos()
        getAppointments()
        getPacientes()
    }, [])
    
    // Função para colocar os dias com todas as datas agendadas no daypicker
    const newBookedDays = () => {

        if (groupedTimes) {
            const bookedDays = Object.keys(groupedTimes).filter((day) => {
                return groupedTimes[day].length === 10
            })

            const bookedDaysRefactored = bookedDays.map((day) => {
                const [year, month, date] = day.split('-').map(Number) 
                return new Date(year, month - 1, date)
            })
    
            setBookedDays((prev) => [...new Set([...prev, ...bookedDaysRefactored])])
        }
    } 

    useEffect(() => {
        newBookedDays()
    }, [groupedTimes])
 
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
                                <h3 aria-label="Número de agendamentos">Agendamentos</h3>
                                <p aria-label={`Total de agendamentos: ${agenda.length}`}>{agenda.length}</p>
                            </span>
                        </div>
                    </div>

                    <div className="container-items">
                        <div className="container-item">
                            <div className="iconContainer">
                                <FaRegCalendarAlt size={22} />
                            </div>

                            <span>
                                <h3 aria-label="Número de pacientes">Pacientes</h3>
                                <p aria-label={`Total de pacientes: ${pacientes.length}`}>{pacientes.length}</p>
                            </span>
                        </div>

                        <div className="container-item">
                            <div className="iconContainer">
                                <FaRegCalendarAlt size={22} />
                            </div>

                            <span>
                                <h3 aria-label="Número de médicos">Médicos</h3>
                                <p aria-label={`Total de médicos: ${medicos.length}`}>{medicos.length}</p>
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
                        }} />
                </span>
            </H.Container>
        </H.section>
    )
}

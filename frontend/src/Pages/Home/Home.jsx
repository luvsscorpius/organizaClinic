import React from 'react'
import * as H from './Styles'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export const Home = () => {
    return (
        <H.section>
            <H.Container>
                <span>
                    <FaRegCalendarCheck size={22} />
                    <h1>Datas Disponíveis</h1>
                </span>
            </H.Container>

            <H.Container>
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
                                <p>10</p>
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
                                <p>10</p>
                            </span>
                        </div>

                        <div className="container-item">
                            <div className="iconContainer">
                                <FaRegCalendarAlt size={22} />
                            </div>

                            <span>
                                <h3>Médicos</h3>
                                <p>10</p>
                            </span>
                        </div>
                    </div>

                </H.infoContainer>
            </H.Container>
        </H.section>
    )
}

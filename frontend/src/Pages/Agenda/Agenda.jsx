import React, { useContext, useEffect, useState } from 'react';
import * as A from './Styles'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import '../../Css/index.css'
import { OrganizaClinicContext } from '../../Context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash } from "react-icons/fa";

export const Agenda = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const [eventData, setEventData] = useState({
        id: '',
        cliente: '',
        medico: '',
        data: '',
        horario: '',
        desc: ''
    })

    const handleDateClick = (arg) => {
        setEventData((prev) => ({ ...prev, data: arg.dateStr }))
        handleOpen()
    };

    const allTimeSlots = [
        7, 8, 9, 10, 11, 13, 14, 15, 16, 17
    ]

    const { medicos, pacientes, getMedicos, getPacientes, agenda, getAppointments } = useContext(OrganizaClinicContext)

    useEffect(() => {
        getMedicos()
        getPacientes()
        getAppointments()
    }, [])

    const bookedTimes = agenda.map(event => ({ date: event.DataConsulta.split('T')[0], hours: event.HorarioConsulta.split(':').slice(0, 2).join(':') }))

    const groupedTimes = bookedTimes.reduce((acc, { date, hours }) => {
        (acc[date] ||= []).push(hours)
        return acc
    }, [])

    useEffect(() => {
        const formattedEventsFromDataBase = agenda.map((consulta) => {
            const horarioFim = Number.parseFloat(consulta.HorarioConsulta) + 1
            console.log(consulta.HorarioConsulta)

            const dataConsultaSplit = consulta.DataConsulta.split('T')
            const dataConsultaRefatorada = dataConsultaSplit[0]

            const horarioFimUpdated = horarioFim < 10 ? `0${horarioFim}:00` : `${horarioFim}:00`;

            // encontrando o medico e o paciente para usar no useEffect para colocar o nome que nao tem na consulta
            const findPatient = pacientes.find((pacienteID) => pacienteID.IDPaciente === consulta.pacientes_IDPaciente)
            const findDoctor = medicos.find((doctorID) => doctorID.IDMedico === consulta.medicos_IDMedico)

            return {
                id: consulta.IDConsulta,
                title: `Paciente ${findPatient.Nome} - Médico ${findDoctor.Nome}`,
                start: `${dataConsultaRefatorada}T${consulta.HorarioConsulta}`,
                end: `${dataConsultaRefatorada}T${horarioFimUpdated}`,
                description: consulta.DescricaoConsulta || 'Sem descrição',
                allDay: false,
            }
        })

        setEvents(formattedEventsFromDataBase)
    }, [agenda])

    const findMedicoId = (nome) => {
        const medico = medicos.find((medico) => medico.Nome === nome)
        return medico ? medico.IDMedico : 'ID não encontrado'
    }

    const findPacienteId = (nome) => {
        const paciente = pacientes.find((paciente) => paciente.Nome === nome)
        return paciente ? paciente.IDPaciente : 'ID não encontrado'
    }

    const [newAppointment, setNewAppointment] = useState({
        IDConsulta: '',
        DataConsulta: eventData.data,
        HorarioConsulta: eventData.horario,
        DescricaoConsulta: eventData.desc,
        pacientes_IDPaciente: findPacienteId(eventData.cliente),
        medicos_IDMedico: findMedicoId(eventData.medico)
    })

    const horarioFim = Number.parseFloat(eventData.horario) + 1
    const horarioFimUpdated = horarioFim < 10 ? `0${horarioFim}:00` : `${horarioFim}:00`

    const endEvent = `${eventData.data}T${horarioFimUpdated}`

    // Função para adicionar eventos
    const eventAdd = async (e) => {
        e.preventDefault()
        console.log('teste')

        if (eventData.cliente === '' || eventData.medico === '' || eventData.data === '' || eventData.horario === '') {
            alert('Preencha todas as informações')
        } else {

            try {
                const res = await axios.post('http://localhost:2000/addNewAppointment', newAppointment, {
                    headers: { "Content-Type": "application/json" }
                })

                if (res.status === 200) {
                    const newEvent = {
                        id: `${eventData.cliente} - ${eventData.medico} - ${eventData.data}`,
                        title: `Paciente ${eventData.cliente} - Médico ${eventData.medico}`,
                        start: `${eventData.data}T${eventData.horario}`,
                        end: endEvent,
                        description: eventData.desc,
                        allDay: false
                    }

                    setEvents((prev) => ([...prev, newEvent]))
                    console.log(events.newEvent)
                    toast.success('Consulta agendada com sucesso')
                    handleOpen()
                }
            } catch (error) {
                console.error(error)
                toast.error('Erro ao agendar consulta', error)
            }
        }
    }

    useEffect(() => {
        setNewAppointment({
            IDConsulta: eventData.id,
            DataConsulta: eventData.data,
            HorarioConsulta: eventData.horario,
            DescricaoConsulta: eventData.desc,
            pacientes_IDPaciente: findPacienteId(eventData.cliente),
            medicos_IDMedico: findMedicoId(eventData.medico)
        });
    }, [eventData]);

    console.log(newAppointment)

    // Função para editar eventos na agenda
    const handleEventClick = (clickInfo) => {

        const firstSplit = clickInfo.event.title.split('-')
        const patientSplit = firstSplit[0].split('Paciente')[1].trim()
        const doctorSplit = firstSplit[1].split('Médico')[1].trim()

        // encontrando o medico e o paciente para usar no useEffect para colocar o nome que nao tem na consulta
        const findPatient = pacientes.find((paciente) => paciente.Nome === patientSplit)
        const findDoctor = medicos.find((doctor) => doctor.Nome === doctorSplit)

        setEventData({
            id: clickInfo.event.id,
            cliente: findPatient ? findPatient.Nome : '',
            medico: findDoctor ? findDoctor.Nome : '',
            data: clickInfo.event.startStr.split('T')[0],
            horario: clickInfo.event.startStr.split('T')[1].slice(0, 5),
            desc: clickInfo.event.extendedProps.description || ''
        });

        setNewAppointment({
            IDConsulta: clickInfo.event.id,
            DataConsulta: eventData.data,
            HorarioConsulta: eventData.horario,
            DescricaoConsulta: eventData.desc,
            pacientes_IDPaciente: findPacienteId(eventData.cliente),
            medicos_IDMedico: findMedicoId(eventData.medico)
        });

        console.log(eventData)

        setOpen(true);

        if (clickInfo.event.id) {
            setEventData((prev) => ({ ...prev, id: clickInfo.event.id }))
        }
    };

    const eventUpdate = async (e) => {
        e.preventDefault()

        if (newAppointment.IDConsulta === '' || newAppointment.DataConsulta === '' || newAppointment.HorarioConsulta === '' || newAppointment.pacientes_IDPaciente === '' || newAppointment.medicos_IDMedico === '') {
            toast.error('Preencha todas as informações')
        } else {
            try {
                const res = await axios.put(`http://localhost:2000/updateAppointment/${newAppointment.IDConsulta}`, newAppointment, {
                    headers: { "Content-Type": "application/json" }
                })

                if (res.status === 200) {
                    setOpen(false)
                    toast.success('Evento atualizado com sucesso')
                    getAppointments()
                }
            } catch (error) {
                console.error(error)
                toast.error(error)
            }
        }
    }

    return (
        <A.section style={{ padding: '10px' }}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "today prev next",
                    center: "title",
                    end: "dayGridMonth dayGridWeek dayGridDay",
                }}
                locale='pt-BR'
                views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                dateClick={handleDateClick}
                selectable={true}
                events={events}
                eventClick={handleEventClick}
            />

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in "
                />

                <div className="fixed inset-0 z-10 max-w-100 overflow-y-auto place-items-center">
                    <div className="flex min-h-full !min-w-full items-center justify-center p-4 text-center sm:items-center sm:p-0"  >
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <form className="space-y-6" onSubmit={(e) => eventAdd(e)}>
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="text-center sm:text-left">
                                        <div className="TitleContainer" style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                                                Adicionar Evento
                                            </DialogTitle>

                                            {eventData.id && (
                                                <button
                                                    type="button"
                                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                                >
                                                    <FaTrash/>
                                                </button>
                                            )}
                                        </div>

                                        <div className="mt-6 space-y-4">
                                            {/* Paciente */}
                                            <div>
                                                <label htmlFor="Paciente" className="block text-sm font-medium text-gray-700 text-start">
                                                    Paciente
                                                </label>
                                                <select
                                                    id="Paciente"
                                                    name="Paciente"
                                                    className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-sm"
                                                    value={eventData.cliente}
                                                    onChange={(e) => setEventData((prev) => ({ ...prev, cliente: e.target.value }))}
                                                >
                                                    <option value="">Selecione um cliente</option>
                                                    {pacientes.map((paciente) => (
                                                        <option value={paciente.Nome}>{paciente.Nome}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Médico */}
                                            <div>
                                                <label htmlFor="medico" className="block text-sm font-medium text-gray-700 text-start">
                                                    Médico
                                                </label>
                                                <select
                                                    id="medico"
                                                    name="medico"
                                                    className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-sm"
                                                    value={eventData.medico}
                                                    onChange={(e) => setEventData((prev) => ({ ...prev, medico: e.target.value }))}
                                                >
                                                    <option value="">Selecione um médico</option>
                                                    {medicos.map((medico) => (
                                                        <option value={medico.Nome}>{medico.Nome}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Data */}
                                            <div>
                                                <label htmlFor="data" className="block text-sm font-medium text-gray-700 text-start">
                                                    Data
                                                </label>
                                                <input
                                                    type="date"
                                                    id="data"
                                                    name="data"
                                                    value={eventData.data}
                                                    readOnly
                                                    className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-sm"
                                                />
                                            </div>

                                            {/* Horário */}
                                            <div>
                                                <label htmlFor="horario" className="block text-sm font-medium text-gray-700 text-start">
                                                    Horário
                                                </label>
                                                <select
                                                    id="horario"
                                                    name="horario"
                                                    className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-sm"
                                                    value={eventData.horario}
                                                    onChange={(e) => setEventData((prev) => ({ ...prev, horario: e.target.value }))}
                                                >
                                                    <option value="">Selecione um horário</option>
                                                    {allTimeSlots.map((hour) => (
                                                        <option key={hour} value={hour < 10 ? `0${hour}:00` : `${hour}:00`} disabled={groupedTimes[eventData.data]?.includes(hour < 10 ? `0${hour}:00` : `${hour}:00`)}  >
                                                            {`${hour}` < 10 ? `0${hour}:00` : `${hour}:00`}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Descrição */}
                                            <div>
                                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-start">
                                                    Descrição do evento
                                                </label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    placeholder="Descreva o evento"
                                                    className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-sm"
                                                    rows="4"
                                                    value={eventData.desc}
                                                    onChange={(e) => setEventData((prev) => ({ ...prev, desc: e.target.value }))}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full justify-center rounded-md bg-[#15babc] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                        onClick={(e) => eventData.id ? eventUpdate(e) : eventAdd(e)}
                                    >
                                        Salvar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </A.section>
    );
};

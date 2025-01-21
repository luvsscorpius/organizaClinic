import React, { useState } from 'react';
import * as H from '../Home/Styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import '../../Css/index.css'

export const Agenda = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const [eventData, setEventData] = useState({
        cliente: '',
        medico: '',
        data: '',
        horario: '',
        desc: ''
    })

    const handleDateClick = (arg) => {
        setEventData((prev) => ({...prev, data: arg.dateStr}))
        handleOpen()
    };
    console.log(events)

    // Função para adicionar eventos
    const eventAdd = (e) => {
        e.preventDefault()
        console.log('teste')

        if (eventData.cliente === '' || eventData.medico === '' || eventData.data === '' || eventData.horario === '') {
            alert('Preencha todas as informações')
        } 

        const newEvent = {
            id: `${eventData.cliente} - ${eventData.medico} - ${eventData.data}`,
            title: `${eventData.cliente} - ${eventData.medico}`,
            start: eventData.data,
            description: eventData.desc
        }

        setEvents((prev) => ([...prev, newEvent]))
        console.log(events.newEvent)
        handleOpen()
    }


    return (
        <H.section style={{ padding: '10px'}}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                selectable={true}
                height={'100%'}
                events={events}
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
                                        <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                                            Adicionar Evento
                                        </DialogTitle>
                                        <div className="mt-6 space-y-4">
                                            {/* Cliente */}
                                            <div>
                                                <label htmlFor="cliente" className="block text-sm font-medium text-gray-700 text-start">
                                                    Cliente
                                                </label>
                                                <select
                                                    id="cliente"
                                                    name="cliente"
                                                    className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-sm"
                                                    value={eventData.cliente}
                                                    onChange={(e) => setEventData((prev) => ({...prev, cliente: e.target.value}))}
                                                >
                                                    <option value="">Selecione um cliente</option>
                                                    <option value="Anderson">Anderson</option>
                                                    <option value="Vitor">Vitor</option>
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
                                                    onChange={(e) => setEventData((prev) => ({...prev, medico: e.target.value}))}
                                                >
                                                    <option value="">Selecione um médico</option>
                                                    <option value="Anderson">Anderson</option>
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
                                                    onChange={(e) => setEventData((prev) => ({...prev, horario: e.target.value}))}
                                                >
                                                    <option value="">Selecione um horário</option>
                                                    {[7, 8, 9, 10, 11, 13, 14, 15, 16, 17].map((hour) => (
                                                        <option key={hour} value={hour}>
                                                            {`${hour}:00`}
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
                                                    onChange={(e) => setEventData((prev) => ({...prev, desc: e.target.value}))}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full justify-center rounded-md bg-[#15babc] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                        onClick={(e) => eventAdd(e)}
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
        </H.section>
    );
};

"use client";

import { useState } from 'react';

export default function Home() {
  const [nombre, setNombre] = useState<string>('');
  const [cancha, setCancha] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [fecha, setFecha] = useState<string>('');

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleCanchaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCancha(e.target.value);
  };

  const handleHorarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHorario(e.target.value);
  };

  const handleFechaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Reserva hecha para: ${nombre} el día ${fecha}, cancha: ${cancha}, en el horario: ${horario}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }} // Ruta de la imagen
    >
      <h1 className="text-4xl font-bold text-white">Reserva tu Cancha</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
        {/* Campo para el nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleNombreChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        {/* Campo para seleccionar cancha */}
        <div>
          <label htmlFor="cancha" className="block text-sm font-medium text-gray-700">
            Selecciona Cancha
          </label>
          <select
            id="cancha"
            name="cancha"
            value={cancha}
            onChange={handleCanchaChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Elige una opción</option>
            <option value="futbol5">Fútbol 5</option>
            <option value="futbol7">Fútbol 7</option>
          </select>
        </div>

        {/* Campo para seleccionar horario */}
        <div>
          <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
            Selecciona Horario
          </label>
          <select
            id="horario"
            name="horario"
            value={horario}
            onChange={handleHorarioChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Elige un horario</option>
            <option value="8-10am">8:00 AM - 10:00 AM</option>
            <option value="10-12pm">10:00 AM - 12:00 PM</option>
            <option value="12-2pm">12:00 PM - 2:00 PM</option>
            <option value="2-4pm">2:00 PM - 4:00 PM</option>
            <option value="4-6pm">4:00 PM - 6:00 PM</option>
          </select>
        </div>

        {/* Campo para seleccionar fecha */}
        <div>
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
            Selecciona el día de la reserva
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={handleFechaChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Reservar
        </button>
      </form>
    </div>
  );
}

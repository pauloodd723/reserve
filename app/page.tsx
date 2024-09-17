"use client";

import { useState } from 'react';

export default function Home() {
  const [cancha, setCancha] = useState<string>('');
  const [horario, setHorario] = useState<string>('');

  const handleCanchaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCancha(e.target.value);
  };

  const handleHorarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHorario(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Reserva hecha para: ${cancha}, en el horario: ${horario}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Reserva tu Cancha</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
          >
            <option value="">Elige una opción</option>
            <option value="futbol5">Fútbol 5</option>
            <option value="futbol7">Fútbol 7</option>
          </select>
        </div>

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
          >
            <option value="">Elige un horario</option>
            <option value="8-10am">8:00 AM - 10:00 AM</option>
            <option value="10-12pm">10:00 AM - 12:00 PM</option>
            <option value="12-2pm">12:00 PM - 2:00 PM</option>
            <option value="2-4pm">2:00 PM - 4:00 PM</option>
            <option value="4-6pm">4:00 PM - 6:00 PM</option>
          </select>
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

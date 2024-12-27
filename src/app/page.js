"use client";
import { useState } from "react";
import { obtenerGastos } from "./services/gastosService";

const Gastos = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [gastos, setGastos] = useState([]);
  const [error, setError] = useState("");

  const handleFiltrar = async () => {
    setError("");
    try {
      const data = await obtenerGastos(fechaInicio, fechaFin);
      setGastos(data);
    } catch (err) {
      setError("Error al obtener los datos. Verifica las fechas.");
    }
  };

  // Función para formatear los números
  const formatoMoneda = (valor) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(valor);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Filtrar Gastos
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <div className="flex flex-col">
          <label htmlFor="fechaInicio" className="text-sm font-medium">
            Fecha Inicio:
          </label>
          <input
            type="date"
            id="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fechaFin" className="text-sm font-medium">
            Fecha Fin:
          </label>
          <input
            type="date"
            id="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleFiltrar}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Filtrar
        </button>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <table className="table-auto w-full border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="px-4 py-2 border border-gray-300">Departamento</th>
            <th className="px-4 py-2 border border-gray-300">Total Gasto</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((gasto, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 border border-gray-300">
                {gasto.Departamento}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">
                {formatoMoneda(gasto.TotalGasto)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gastos;

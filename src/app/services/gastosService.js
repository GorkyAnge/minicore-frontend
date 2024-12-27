export const obtenerGastos = async (fechaInicio, fechaFin) => {
  const response = await fetch(
    `https://minicore-backend.onrender.com/api/gastos?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
  );
  if (!response.ok) {
    throw new Error("Error al obtener los datos.");
  }
  return response.json();
};

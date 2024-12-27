# Frontend - Filtrar Gastos

Este es el proyecto de frontend desarrollado en Next.js para consumir la API de backend y mostrar los gastos filtrados por rango de fechas en una tabla interactiva.

## Características
- Selección de rango de fechas con un diseño moderno.
- Tabla interactiva con formato numérico y colores atractivos.
- Integración con una API de backend para obtener datos.

## Requisitos
- Node.js (v16 o superior)
- npm (v7 o superior)

## Instalación
1. Clonar este repositorio:
   ```
   git clone <repositorio-frontend-url>
   cd next-frontend
   ```

2. Instalar las dependencias:
   ```
   npm install
   ```

3. Ejecutar el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abrir el proyecto en el navegador:
   ```
   http://localhost:3000
   ```

## Configuración
Asegúrate de que el backend esté en funcionamiento y que la API esté disponible en `http://localhost:5000/api/gastos`. Si la URL cambia, actualiza el archivo `services/gastosService.js`.

## Estructura del Proyecto
```
next-frontend/
├── pages/
│   ├── gastos.js    # Página principal de gastos
├── services/
│   ├── gastosService.js  # Servicio para consumir la API
├── public/          # Archivos estáticos
├── styles/          # Estilos globales
```

## Scripts Disponibles
- `npm run dev`: Ejecutar el entorno de desarrollo.
- `npm run build`: Construir el proyecto para producción.
- `npm start`: Iniciar el proyecto en producción.

## Personalización
Puedes personalizar los colores y el diseño editando los estilos en la carpeta `styles`.

---

### Autor
Desarrollado por [Tu Nombre].

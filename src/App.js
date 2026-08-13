import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [carrera, setCarrera] = useState("");

   const [personas, setPersonas] = useState(() => {
    const personasGuardadas = localStorage.getItem("personas");

    if (personasGuardadas) {
      return JSON.parse(personasGuardadas);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("personas", JSON.stringify(personas));
  }, [personas]);

  const agregarPersona = (e) => {
    e.preventDefault();

    if(nombre === "" || correo === "" || edad === "" || universidad === "" || carrera === ""){
      alert("Por favor completa todos los campos");
      return;
    }

    const nuevaPersona = {
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      edad: edad,
      universidad : universidad,
      carrera : carrera,
    };

    setPersonas([...personas, nuevaPersona]);

     alert("Persona agregada correctamente");

    setNombre("");
    setCorreo("");
    setEdad("");
    setUniversidad("");
    setCarrera("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Registro de Personas
        </h1>

        <form
          onSubmit={agregarPersona}
          className="flex flex-col gap-4"
        >

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Universidad"
            value={universidad}
            onChange={(e) => setUniversidad(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Carrera"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Agregar Persona
          </button>

        </form>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Personas registradas
        </h2>

        <div className="space-y-4">

          {personas.map((persona) => (
            <div
              key={persona.id}
              className="border border-gray-200 rounded-lg p-4 shadow"
            >
              <h3 className="text-xl font-bold">
                {persona.nombre}
              </h3>

              <p className="text-gray-600">
                Correo: {persona.correo}
              </p>

              <p className="text-gray-600">
                Edad: {persona.edad}
              </p>

              <p className="text-gray-600">
                Universidad: {persona.universidad}
              </p>

              <p className="text-gray-600">
                carrera: {persona.carrera}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;

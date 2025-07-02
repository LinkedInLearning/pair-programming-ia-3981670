function Nosotros() {

  const miembrosJunta = [
    { nombre: "Juan Pérez", cargo: "Director" },
    { nombre: "Ana Gómez", cargo: "Subdirectora" },
    { nombre: "Luis Martínez", cargo: "Secretario" }
  ];

  return (
    <>
      <h1>Sobre Nosotros</h1>

      <p>Bienvenidos a nuestra página. Aquí encontrarás información sobre nuestra junta directiva.</p>

      <ul>
        {miembrosJunta.map((miembro, index) => (
          <li key={index}>
            {miembro.nombre} - {miembro.cargo}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Nosotros
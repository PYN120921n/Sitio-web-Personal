export const metadata = { title: 'Tecnologías' };

const filas = [
  ['HTML', '1991', 'Estructura y significado del contenido'],
  ['HTTP', '1991', 'Comunicación entre navegador y servidor'],
  ['CSS', '1996', 'Colores, tipografía y diseño de la página'],
  ['JavaScript', '1995', 'Interactividad y lógica en el navegador'],
  ['HTTPS', '1994', 'Comunicación cifrada y segura'],
  ['SQL en la nube', '2010s', 'Datos persistentes, como en Supabase'],
];

export default function Tecnologias() {
  return (
    <>
      <h1>Tecnologías de la web</h1>
      <p>Cada tecnología resuelve <strong>un problema distinto</strong>. Juntas forman lo que ves en pantalla.</p>
      <h2>Las piezas principales</h2>
      <div className="tabla-contenedor">
        <table>
          <caption>Tecnologías clave y su aporte</caption>
          <thead>
            <tr><th scope="col">Tecnología</th><th scope="col">Año aproximado</th><th scope="col">Para qué sirve</th></tr>
          </thead>
          <tbody>
            {filas.map(([t, a, d]) => (
              <tr key={t}><th scope="row">{t}</th><td>{a}</td><td>{d}</td></tr>
            ))}
          </tbody>
          <tfoot>
            <tr><td colSpan="3">Total: {filas.length} tecnologías</td></tr>
          </tfoot>
        </table>
      </div>
      <h3>Cómo se usan en este sitio</h3>
      <p>Next.js genera el HTML, un archivo CSS da el estilo, JavaScript valida el formulario y Supabase guarda los mensajes.</p>
    </>
  );
}

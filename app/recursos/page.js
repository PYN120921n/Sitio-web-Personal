import Link from 'next/link';
export const metadata = { title: 'Recursos' };

export default function Recursos() {
  return (
    <>
      <h1>Recursos para seguir aprendiendo</h1>
      <h2>Enlaces externos (absolutos)</h2>
      <ul>
        <li><a href="https://info.cern.ch/" target="_blank" rel="noopener noreferrer">info.cern.ch</a>: réplica del primer sitio web.</li>
        <li><a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>: la referencia más completa de HTML, CSS y JavaScript.</li>
        <li><a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">Validador del W3C</a>: revisa que tu HTML esté bien escrito.</li>
        <li><a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer">Documentación de Supabase</a>.</li>
      </ul>
      <h2>Enlaces dentro de este sitio (relativos)</h2>
      <ol>
        <li><Link href="/historia">Historia</Link>, para entender el origen.</li>
        <li><Link href="/tecnologias">Tecnologías</Link>, para ver las piezas.</li>
        <li><Link href="/linea-del-tiempo">Línea del tiempo</Link>, para ubicar las fechas.</li>
        <li><Link href="/contacto">Contacto</Link>, para enviar tus dudas.</li>
      </ol>
    </>
  );
}

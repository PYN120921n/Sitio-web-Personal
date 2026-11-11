import Link from 'next/link';

const accesos = [
  ['/historia', 'Historia', 'Cómo un documento del CERN se volvió la red más usada del planeta.'],
  ['/tecnologias', 'Tecnologías', 'HTML, CSS, JavaScript y los demás ladrillos de la web, en una tabla.'],
  ['/linea-del-tiempo', 'Línea del tiempo', 'Doce momentos clave de 1989 a hoy.'],
  ['/recursos', 'Recursos', 'Dónde seguir aprendiendo, con enlaces a fuentes oficiales.'],
  ['/contacto', 'Contacto', 'Envía una pregunta o una corrección; se guarda en Supabase.'],
];

export default function Inicio() {
  return (
    <>
      <p className="direccion">http://info.cern.ch/</p>
      <h1>Todo empezó con un enlace.</h1>
      <p className="entrada">
        En 1989 un ingeniero propuso conectar documentos entre sí mediante <strong>hipertexto</strong>.
        Hoy esa idea sostiene tiendas, escuelas, juegos y bancos. Este sitio recorre <em>cómo llegamos hasta aquí</em>.
      </p>
      <p><Link href="/linea-del-tiempo" className="boton">Ver la línea del tiempo</Link></p>
      <div className="accesos">
        {accesos.map(([href, titulo, texto]) => (
          <Link key={href} href={href} className="acceso">
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

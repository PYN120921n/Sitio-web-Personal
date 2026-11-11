export const metadata = { title: 'Línea del tiempo' };

const hitos = [
  ['1989', 'Nace la propuesta', 'Tim Berners-Lee presenta en el CERN la idea de un sistema de hipertexto.'],
  ['1991', 'Primer sitio web', 'Se publica el primer sitio, info.cern.ch, que explicaba qué era la web.'],
  ['1993', 'Mosaic', 'El primer navegador popular con imágenes junto al texto.'],
  ['1994', 'Nace el W3C', 'Se funda el consorcio que estandariza la web.'],
  ['1995', 'JavaScript', 'Netscape lanza el lenguaje que hace las páginas interactivas.'],
  ['1996', 'CSS', 'Se publica CSS1 y el estilo se separa del contenido.'],
  ['1998', 'Google', 'Aparece un buscador que ordena la web por relevancia.'],
  ['2004', 'Web 2.0', 'Blogs, redes sociales y wikis: los usuarios crean contenido.'],
  ['2007', 'La web en el bolsillo', 'El iPhone llega con un navegador completo y la web se vuelve móvil.'],
  ['2014', 'HTML5', 'Es recomendación oficial: video, audio y gráficos sin plugins.'],
  ['2015', 'HTTP/2 y PWA', 'Cargas más rápidas y apps web que funcionan sin conexión.'],
  ['2022', 'IA generativa', 'Los asistentes conversacionales llegan al navegador de millones de personas.'],
];

export default function LineaDelTiempo() {
  return (
    <>
      <h1>Línea del tiempo</h1>
      <p>Doce momentos que explican cómo pasamos de un documento con enlaces a la web actual.</p>
      <ol className="linea">
        {hitos.map(([anio, titulo, texto], i) => (
          <li key={anio} className="hito" style={{ '--hito-color': `color-mix(in srgb, var(--enlace) ${100 - i * 8}%, var(--visitado))` }}>
            <span className="anio">{anio}</span>
            <h2 style={{ fontSize: '1.3rem', margin: '.25rem 0 .35rem' }}>{titulo}</h2>
            <p>{texto}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

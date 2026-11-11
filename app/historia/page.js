export const metadata = { title: 'Historia' };

export default function Historia() {
  return (
    <>
      <h1>Historia de la web</h1>
      <p>
        La <strong>World Wide Web</strong> no es lo mismo que <strong>Internet</strong>. Internet es la red de
        computadoras; la web es <em>un servicio</em> que corre sobre ella y que se navega con un programa llamado navegador.
      </p>

      <h2>El origen en el CERN</h2>
      <p>
        En marzo de 1989, <strong>Tim Berners-Lee</strong> propuso en el CERN un sistema para compartir información entre
        investigadores. Su jefe lo describió con una frase célebre: <em>«vago, pero emocionante»</em>.
      </p>
      <h3>Los tres inventos básicos</h3>
      <ul>
        <li><strong>URL:</strong> la dirección única de cada recurso.</li>
        <li><strong>HTTP:</strong> el protocolo con el que se pide y se entrega una página.</li>
        <li><strong>HTML:</strong> el lenguaje que describe el contenido y sus enlaces.</li>
      </ul>

      <h2>Qué pasa cuando abres una página</h2>
      <ol>
        <li>Escribes una dirección o das clic en un enlace.</li>
        <li>El navegador pregunta al sistema DNS qué servidor corresponde a ese nombre.</li>
        <li>Envía una petición HTTP a ese servidor.</li>
        <li>El servidor responde con HTML, CSS, JavaScript e imágenes.</li>
        <li>El navegador junta todo y dibuja la página.</li>
      </ol>

      <h2>De páginas fijas a aplicaciones</h2>
      <h3>Web 1.0: leer</h3>
      <p>Páginas estáticas escritas a mano. Se visitaban, pero <em>casi nadie publicaba</em>.</p>
      <h3>Web 2.0: participar</h3>
      <p>Blogs, redes sociales y enciclopedias colaborativas. Cualquiera podía crear contenido.</p>
      <h3>Web actual: aplicaciones</h3>
      <p>Editores, videollamadas y tiendas que funcionan en el navegador, en el celular y sin conexión.</p>
    </>
  );
}

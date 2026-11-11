// Validación del formulario de contacto (JavaScript puro, sin librerías).
export function validarFormulario(v) {
  const e = {};
  const nombre = v.nombre.trim();
  if (nombre.length < 3) e.nombre = 'Escribe tu nombre completo (mínimo 3 letras).';
  else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' ]+$/.test(nombre)) e.nombre = 'El nombre solo puede tener letras y espacios.';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo.trim())) e.correo = 'Escribe un correo válido, por ejemplo nombre@dominio.com.';

  if (!v.fecha) e.fecha = 'Elige tu fecha de nacimiento.';
  else if (new Date(v.fecha) >= new Date()) e.fecha = 'La fecha debe ser anterior a hoy.';

  if (!v.pais) e.pais = 'Selecciona tu país.';
  if (!v.tipo) e.tipo = 'Elige el tipo de mensaje.';
  if (v.temas.length === 0) e.temas = 'Marca al menos un tema de interés.';

  const nivel = Number(v.nivel);
  if (!Number.isInteger(nivel) || nivel < 1 || nivel > 10) e.nivel = 'El nivel debe estar entre 1 y 10.';

  const m = v.mensaje.trim().length;
  if (m < 10) e.mensaje = 'El mensaje necesita al menos 10 caracteres.';
  else if (m > 500) e.mensaje = 'El mensaje no puede pasar de 500 caracteres.';

  if (!v.acepto) e.acepto = 'Debes aceptar el uso de tus datos para continuar.';
  return e;
}

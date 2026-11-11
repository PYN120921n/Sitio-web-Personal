'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { validarFormulario } from '../lib/validar';

const TEMAS = ['HTML', 'CSS', 'JavaScript', 'Bases de datos', 'Inteligencia artificial'];
const inicial = { nombre: '', correo: '', fecha: '', pais: '', tipo: '', temas: [], nivel: 5, mensaje: '', acepto: false };

export default function FormularioContacto() {
  const [v, setV] = useState(inicial);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState({ tipo: '', texto: '' });

  const cambiar = (campo, valor) => setV((p) => ({ ...p, [campo]: valor }));
  const cambiarTema = (t) =>
    cambiar('temas', v.temas.includes(t) ? v.temas.filter((x) => x !== t) : [...v.temas, t]);

  async function enviar(ev) {
    ev.preventDefault();
    const e = validarFormulario(v);
    setErrores(e);
    if (Object.keys(e).length) {
      setEstado({ tipo: 'error', texto: 'Revisa los campos marcados antes de enviar.' });
      return;
    }
    if (!supabase) {
      setEstado({ tipo: 'ok', texto: 'Formulario válido. Configura Supabase (.env.local) para guardar los mensajes.' });
      return;
    }
    const { error } = await supabase.from('contactos').insert({
      nombre: v.nombre.trim(), correo: v.correo.trim(), fecha_nacimiento: v.fecha, pais: v.pais,
      tipo: v.tipo, temas: v.temas, nivel: Number(v.nivel), mensaje: v.mensaje.trim(),
    });
    if (error) setEstado({ tipo: 'error', texto: 'No se pudo guardar el mensaje. Inténtalo de nuevo en un momento.' });
    else { setEstado({ tipo: 'ok', texto: 'Mensaje enviado. Gracias por escribir.' }); setV(inicial); }
  }

  const Err = ({ k }) => (errores[k] ? <p className="error" role="alert">{errores[k]}</p> : null);

  return (
    <form onSubmit={enviar} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre completo</label>
        <input id="nombre" type="text" value={v.nombre} onChange={(e) => cambiar('nombre', e.target.value)} />
        <Err k="nombre" />
      </div>
      <div className="campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input id="correo" type="email" value={v.correo} onChange={(e) => cambiar('correo', e.target.value)} />
        <Err k="correo" />
      </div>
      <div className="campo">
        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input id="fecha" type="date" value={v.fecha} onChange={(e) => cambiar('fecha', e.target.value)} />
        <Err k="fecha" />
      </div>
      <div className="campo">
        <label htmlFor="pais">País</label>
        <select id="pais" value={v.pais} onChange={(e) => cambiar('pais', e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option>México</option><option>Argentina</option><option>Colombia</option>
          <option>Chile</option><option>España</option><option>Otro</option>
        </select>
        <Err k="pais" />
      </div>
      <fieldset className="campo">
        <legend>Tipo de mensaje</legend>
        {['Pregunta', 'Sugerencia', 'Corrección'].map((t) => (
          <label key={t} className="opcion">
            <input type="radio" name="tipo" value={t} checked={v.tipo === t} onChange={() => cambiar('tipo', t)} /> {t}
          </label>
        ))}
        <Err k="tipo" />
      </fieldset>
      <fieldset className="campo">
        <legend>Temas que te interesan</legend>
        {TEMAS.map((t) => (
          <label key={t} className="opcion">
            <input type="checkbox" checked={v.temas.includes(t)} onChange={() => cambiarTema(t)} /> {t}
          </label>
        ))}
        <Err k="temas" />
      </fieldset>
      <div className="campo">
        <label htmlFor="nivel">Tu nivel de experiencia con la web: {v.nivel} de 10</label>
        <input id="nivel" type="range" min="1" max="10" value={v.nivel} onChange={(e) => cambiar('nivel', e.target.value)} />
        <Err k="nivel" />
      </div>
      <div className="campo">
        <label htmlFor="mensaje">Mensaje ({v.mensaje.trim().length}/500)</label>
        <textarea id="mensaje" rows="5" value={v.mensaje} onChange={(e) => cambiar('mensaje', e.target.value)} />
        <Err k="mensaje" />
      </div>
      <div className="campo">
        <label className="opcion">
          <input type="checkbox" checked={v.acepto} onChange={(e) => cambiar('acepto', e.target.checked)} /> Acepto que se guarden estos datos para responderme.
        </label>
        <Err k="acepto" />
      </div>
      <button type="submit" className="boton">Enviar mensaje</button>
      {estado.texto && <p className={estado.tipo === 'ok' ? 'aviso ok' : 'aviso error'} role="status">{estado.texto}</p>}
    </form>
  );
}

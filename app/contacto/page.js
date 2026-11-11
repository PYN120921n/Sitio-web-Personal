import FormularioContacto from '../../components/FormularioContacto';
export const metadata = { title: 'Contacto' };

export default function Contacto() {
  return (
    <>
      <h1>Contacto</h1>
      <p>Todos los campos son obligatorios. Se validan en tu navegador antes de enviarse.</p>
      <FormularioContacto />
    </>
  );
}

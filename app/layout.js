import Image from 'next/image';
import Link from 'next/link';
import { Bricolage_Grotesque, Source_Serif_4 } from 'next/font/google';
import Nav from '../components/Nav';
import './globals.css';

const titulos = Bricolage_Grotesque({ subsets: ['latin'], variable: '--f-titulo' });
const cuerpo = Source_Serif_4({ subsets: ['latin'], variable: '--f-cuerpo' });

export const metadata = {
  title: { default: 'La web, de un enlace a todo', template: '%s | La web, de un enlace a todo' },
  description: 'Un recorrido por la evolución de la web: historia, tecnologías, línea del tiempo y recursos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${titulos.variable} ${cuerpo.variable}`}>
      <body>
        <header className="cabecera">
          <Link href="/" className="marca">
            <Image src="/logo.svg" alt="Logotipo: globo terráqueo con red de enlaces" width={40} height={40} unoptimized />
            <span>La web, de un enlace a todo</span>
          </Link>
          <Nav />
        </header>
        <main>{children}</main>
        <footer className="pie">
          <p>Proyecto escolar hecho con Next.js y Supabase. Datos históricos basados en <a href="https://www.w3.org/History.html" target="_blank" rel="noopener noreferrer">el archivo del W3C</a>.</p>
        </footer>
      </body>
    </html>
  );
}

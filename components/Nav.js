'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const enlaces = [
  ['/', 'Inicio'],
  ['/historia', 'Historia'],
  ['/tecnologias', 'Tecnologías'],
  ['/linea-del-tiempo', 'Línea del tiempo'],
  ['/recursos', 'Recursos'],
  ['/contacto', 'Contacto'],
];

export default function Nav() {
  const ruta = usePathname();
  return (
    <nav aria-label="Principal">
      <ul className="menu">
        {enlaces.map(([href, texto]) => (
          <li key={href}>
            <Link href={href} aria-current={ruta === href ? 'page' : undefined}>{texto}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

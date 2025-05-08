'use client';

import { usePathname } from 'next/navigation';
import classes from './main-header.module.css';
import Link from 'next/link';
export default function NavLink({ children, path }) {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={pathName.startsWith(path) ? classes.active : ''}
    >
      {children}
    </Link>
  );
}

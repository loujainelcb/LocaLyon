import type { ReactNode } from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
  /** Contenu optionnel affiché sous le titre (ex. barre de recherche). */
  children?: ReactNode;
}

export function Header({ title, subtitle, children }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo" aria-hidden="true">
          📍
        </span>
        <span className="header__name">LocaLyon</span>
      </div>
      <h1 className="header__title">{title}</h1>
      {subtitle && <p className="header__subtitle">{subtitle}</p>}
      {children && <div className="header__actions">{children}</div>}
    </header>
  );
}

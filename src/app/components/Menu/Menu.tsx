"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuContainer, LinkContainer, MenuItem, SpanMenu } from './Menu.style';


const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleChangeMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleChangeMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <MenuContainer onMouseEnter={handleChangeMouseEnter} onMouseLeave={handleChangeMouseLeave}>
      <SpanMenu>Menu</SpanMenu>
      {isMenuOpen && (
        <LinkContainer>
          <Link href="/">
            <MenuItem aria-label="Ir para a página inicial">Home</MenuItem>
          </Link>
            
          <Link href="/faq">
            <MenuItem aria-label="Ir para as páginas frequentes">Faq</MenuItem>
          </Link>
          
          <Link href="/cadastro">
            <MenuItem aria-label="Ir para a página de cadastro">Cadastro</MenuItem>
          </Link>
          
          <Link href="/Tutoriais">
            <MenuItem aria-label="Ir para a página de">Tutoriais</MenuItem>
          </Link>

          <Link href="/AttLogin">
            <MenuItem aria-label="Atualizar o login">Att-Login</MenuItem>
          </Link>
        </LinkContainer>
      )}
    </MenuContainer>
  );
};

export default Menu;
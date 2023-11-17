"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuContainer, LinkContainer, MenuItem, SpanMenu } from './Menu.style';
import { colors } from '@/styles/colors';

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
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem>About</MenuItem>
          </Link>
        </LinkContainer>
      )}
    </MenuContainer>
  );
};

export default Menu;
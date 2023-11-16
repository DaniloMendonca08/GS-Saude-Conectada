"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuContainer, LinkContainer, MenuItem } from './Menu.style';

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
      <span>Menu</span>
      {isMenuOpen && (
        <LinkContainer>
          <Link href="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem>About</MenuItem>
          </Link>
          {/* Add more links as needed */}
        </LinkContainer>
      )}
    </MenuContainer>
  );
};

export default Menu;
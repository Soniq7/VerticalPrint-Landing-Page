import React, { useState, useEffect } from 'react';
import { StyledNav, Logo, NavList, VPrintIcon, StyledCloseIcon, StyledMenuIcon, Button, MobileMenu } from "./styled";


const Navigation = () => {
  // Początkowy stan menu mobilnego - zamknięte
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1199);

  // Funkcja do obsługi kliknięcia na przycisk menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Przełączamy stan na przeciwny (toggle)
  };

  // Funkcja do zamknięcia menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Efekt do śledzenia zmiany szerokości ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1199);
      
      // Ustaw isMenuOpen na false, jeśli szerokość ekranu przekracza 1199px i menu jest otwarte
      if (window.innerWidth > 1199 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize); // Dodajemy nasłuchiwanie na zmiany szerokości ekranu
    handleResize(); // Wywołujemy raz na początku, aby ustawić stan na podstawie szerokości ekranu

    return () => window.removeEventListener('resize', handleResize); // Czyszczenie nasłuchiwania na zmiany szerokości ekranu przy odmontowaniu komponentu
  }, [isMenuOpen]); // Dodaj isMenuOpen do zależności efektu, aby reagować na jego zmianę

  return (
    <StyledNav>
      <Logo to="/">
        <VPrintIcon />
      </Logo>
      {isMobileView ? (
        // Menu z rozwijaną listą na mniejszych ekranach
        <div>
          {/* Przycisk menu */}
          <Button onClick={toggleMenu}>
            {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />} {/* Warunkowe renderowanie ikon */}
          </Button>
          {/* Ustawienie początkowego stanu menu mobilnego na zamknięte */}
          {isMenuOpen && (
            <MobileMenu $isOpen={isMenuOpen}>
              <NavList onClick={closeMenu}>O nas</NavList>
              <NavList onClick={closeMenu}>Technologia</NavList>
              <NavList onClick={closeMenu}>Realizacje</NavList>
              <NavList onClick={closeMenu}>Galeria</NavList>
              <NavList onClick={closeMenu}>Detale</NavList>
              <NavList onClick={closeMenu}>Kontakt</NavList>
            </MobileMenu>
          )}
        </div>
      ) : (
        // Nawigacja na większych ekranach
        <>
          <NavList>O nas</NavList>
          <NavList>Technologia</NavList>
          <NavList>Realizacje</NavList>
          <NavList>Galeria</NavList>
          <NavList>Detale</NavList>
          <NavList>Kontakt</NavList>
        </>
      )}
    </StyledNav>
  );
};

export default Navigation;

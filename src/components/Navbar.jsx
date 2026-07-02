import { useState, useEffect } from "react";
import portfolioData from "../data/portfolioData";

import Button from "./buttons";

export default function Navbar() {
  const { navLinks } = portfolioData;
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ─── MAIN NAVIGATION BAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 px-[5%] h-17 flex items-center justify-between backdrop-blur-[20px] transition-all duration-400
          ${scrolled ? "border-b border-[rgba(245,197,66,0.1)]" : "border-b border-glass-border-base"}
          ${isDark ? "background-[rgba(11,31,59,0.6)]" : "background-[rgba(240,244,255,0.7)]"}`}
      >
        {/* Logo */}
        <a
          href=""
          className="font-display font-extrabold text-[1.25rem] tracking-[-0.02em] text-white-base no-underline"
        >
          DI<span className="text-gold-base">.</span>
        </a>

        {/* Desktop Links (JSON Map) */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-[0.875rem] font-medium text-muted-base no-underline tracking-[0.01em] transition-colors duration-250 relative hover:text-white-base
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold-base after:transition-[width] after:duration-300 after:ease-out hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions Button Side */}
        <div className="flex gap-3 items-center">
          {/* ─── THEME TOGGLE BUTTON (FIXED SIZE) ─── */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-glass-border-base bg-glass-base rounded-full cursor-pointer flex items-center justify-center text-muted-base text-lg transition-all duration-300 hover:border-gold-base hover:text-gold-base select-none"
            title="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <Button
              variant="nav"
              onClick={() => (window.location.href = "#contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Hamburger Menu Icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col gap-1.25 cursor-pointer p-2"
          >
            <span className="w-5.5 h-0.5 bg-white-base rounded-xs transition-all duration-300"></span>
            <span className="w-5.5 h-0.5 bg-white-base rounded-xs transition-all duration-300"></span>
            <span className="w-5.5 h-0.5 bg-white-base rounded-xs transition-all duration-300"></span>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE DROPDOWN MENU ─── */}
      {menuOpen && (
        <div className={`fixed top-17 left-0 right-0 bottom-0 backdrop-blur-[20px] z-9999 flex flex-col items-center justify-center gap-8 md:hidden
          ${isDark ? "bg-[rgba(11,31,59,0.97)]" : "bg-[rgba(240,244,255,0.97)]"}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`font-display text-[2rem] font-extrabold no-underline transition-colors duration-250 ${isDark ? "text-white-base hover:text-gold-base" : "text-[#0B1F3B] hover:text-[#d4a017]"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

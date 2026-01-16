import React, { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import { X, MenuIcon, Moon, Sun, OrigamiIcon } from "lucide-react";

const sections = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#showcase", label: "Showcase" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ lightmode, setLightmode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className={`${
        lightmode
          ? "bg-yellow-600 text-black hover:border-b-gray-800 border-t-yellow-600"
          : "bg-gray-800 text-white hover:border-b-amber-300 border-gray-800"
      } h-15 w-dvw fixed top-0 flex items-center justify-between px-5 md:px-10 z-10 border-b-2 duration-1000`}
    >
      <motion.a
        href="#home"
        aria-label="Go to home"
        className={`text-yellow-400 drop-shadow-sm text-3xl font-extrabold italic flex items-center cursor-pointer ${
          lightmode ? "drop-shadow-black" : "drop-shadow-yellow-500"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(false)}
      >
        ducks
      </motion.a>
      <motion.div
        className=" absolute left-40"
        drag
        dragConstraints={{ left: 0, top: 5, bottom: 5, right: 1700 }}
      >
        <OrigamiIcon
          className={`${
            !lightmode ? "text-amber-500" : "text-black"
          } cursor-pointer animate-bounce`}
        />
      </motion.div>
      <div className="flex gap-5 md:gap-10">
        <nav
          className={`hidden md:flex gap-2 rounded-4xl text-xl uppercase `}
          aria-label="Primary navigation"
        >
          {sections.map((section, index) => (
            <motion.a
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.9 }}
              className={`p-2  rounded-2xl font-bold hover:drop-shadow-sm duration-100  ${
                lightmode ? "text-black hover:drop-shadow-black" : "text-yellow-400 hover:drop-shadow-yellow-500" 
              }`}
              href={section.href}
              key={index}
            >
              {section.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setLightmode(!lightmode)}
          className={` w-fit p-1 rounded-full cursor-pointer`}
          aria-pressed={lightmode}
          aria-label={lightmode ? "Activate dark mode" : "Activate light mode"}
        >
          {lightmode ? (
            <Moon
              fill="white"
              className="animate-bounce drop-shadow-md drop-shadow-black"
            />
          ) : (
            <Sun
              fill="yellow"
              className="text-yellow-300 animate-pulse drop-shadow-sm drop-shadow-yellow-300"
            />
          )}
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`cursor-pointer md:hidden ${
            lightmode ? "text-black" : "text-gray-500"
          }`}
          aria-expanded={menuOpen}
          aria-controls="menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X strokeWidth={5} /> : <MenuIcon strokeWidth={5} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu"
            role="menu"
            aria-label="Mobile menu"
            aria-hidden={!menuOpen}
            className={` ${
              lightmode ? "bg-white" : "bg-gray-500"
            } h-70 w-dvw absolute -bottom-70 left-0 mt-10 p-10 flex text-end justify-end`}
            initial={{ opacity: 0, scale: 0, translateX: 500 }}
            animate={{ opacity: 1, scale: 1, translateX: 0 }}
            exit={{ opacity: 0, scale: 0, translateX: 500 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col gap-2 rounded-4xl text-xl uppercase">
              {sections.map((section, index) => (
                <motion.a
                  whileHover={{ scale: 1.05, fontStyle: "Italic" }}
                  whileTap={{ scale: 0.9 }}
                  role="menuitem"
                  className={`p-2  rounded-2xl font-bold ${
                    lightmode ? "text-black" : "text-white"
                  }`}
                  href={section.href}
                  key={index}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

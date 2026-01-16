import React from "react";
import { motion, AnimatePresence } from "motion/react";

export const Hero = ({ lightmode, amount, isMobile }) => {
  return (
    <AnimatePresence>
      <section
        id="home"
        role="region"
        aria-label="Home"
        tabIndex={-1}
        className={`h-svh grid justify-center grid-cols-1 md:grid-cols-2 md:pt-10 md:px-10 md:gap-10 ${
          lightmode ? "bg-gray-200 text-black" : "bg-gray-600 text-white"
        }`}
      >
        <motion.div
          className="bg-transparent my-10  flex flex-col justify-center items-center gap-1 w-full px-10"
          style={{ willChange: "transform, opacity" }}
          whileInView={{ translateX: 0, scale: 1, opacity: 1 }}
          viewport={{ amount: amount, once: isMobile }}
          initial={{ translateX: -200, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl place-self-start">Presenting:</p>
          <h1 className="text-9xl md:scale-150 font-extrabold italic text-yellow-400 md:place-self-start md:ml-40">
            ducks
          </h1>
        </motion.div>
        <motion.div
          className="bg-purple-400 my-10"
          style={{ willChange: "transform, opacity" }}
          whileInView={{ translateX: 0, scale: 1, opacity: 1 }}
          viewport={{ amount: amount, once: isMobile }}
          initial={{ translateX: 300, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </section>
    </AnimatePresence>
  );
};

// import { Link } from 'react-scroll';

// function Navbar() {
//   return (
//     <nav className="fixed top-0 bg-white">
//       <ul>
//         <li>
//           <Link
//             activeClass="text-red-500 font-bold" // Klasse, wenn aktiv
//             to="home" // ID der Ziel-Section
//             spy={true} // Aktiviert das "Beobachten" (Dein Ziel)
//             smooth={true} // Sanftes Scrollen
//             offset={-50} // Platz für Navbar lassen
//             duration={500}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link activeClass="text-red-500 font-bold" to="about" spy={true} smooth={true}>
//             About
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

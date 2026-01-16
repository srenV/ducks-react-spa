import React from "react";
import { motion, AnimatePresence } from "motion/react";

export const Showcase = ({ lightmode, amount, isMobile }) => {
  return (
    <AnimatePresence>
      <section
        id="showcase"
        role="region"
        aria-label="Showcase"
        tabIndex={-1}
        className={`h-svh grid justify-center grid-cols-1 md:grid-cols-2 md:pt-10 md:px-10 md:gap-10 ${
          lightmode ? "bg-gray-200 text-black" : "bg-gray-600 text-white"
        }`}
      >
        <motion.div
          className="bg-amber-400 my-10"
          style={{ willChange: "transform, opacity" }}
          whileInView={{ translateX: 0, scale: 1, opacity: 1 }}
          viewport={{ amount: amount}}
          initial={{ translateX: -300, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="bg-purple-400 my-10"
          style={{ willChange: "transform, opacity" }}
          whileInView={{ translateX: 0, scale: 1, opacity: 1 }}
          viewport={{ amount: amount }}
          initial={{ translateX: 300, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </section>
    </AnimatePresence>
  );
};

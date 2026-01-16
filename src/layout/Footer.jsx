import { Github, Linkedin } from "lucide-react";
import React from "react";

export const Footer = ({ lightmode }) => {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className={`${
        lightmode
          ? "bg-yellow-600 text-black hover:border-t-gray-800 border-t-yellow-600"
          : "bg-gray-800 text-white hover:border-t-amber-300 border-gray-800"
      } w-full h-20 bottom-0 flex items-center justify-between gap-3 p-10 z-10 duration-1000 border-t-2`}
    >
      <div>
        <a
          href="https://srenv.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open stv personal website (opens in new tab)"
          className="text-2xl font-bold italic"
        >
          <span className="text-white hover:text-yellow-300 duration-300">
            stv
          </span>
          <span className="text-orange-500">.</span>
        </a>
        <p className="hover:text-yellow-300 cursor-default  text-gray-500">© Sören Timo Voigt • 2025 - 2026</p>
      </div>
      <div className="">
        <nav aria-label="Social links" className="flex gap-3 justify-end">
          <a
            href="https://github.com/srenV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile (opens in new tab)"
          >
            <Github className="animate-bounce delay-100 hover:text-yellow-300 duration-300 " />
          </a>
          <a
            href="https://www.linkedin.com/in/soren-timo-voigt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile (opens in new tab)"
          >
            <Linkedin className="animate-bounce delay-200 hover:text-yellow-300 duration-300 animation-delay-200" />
          </a>
        </nav>
        <nav aria-label="Legal links" className="flex gap-3">
          <a
            href="https://srenv.vercel.app/impressum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Impressum (opens in new tab)"
            className="hover:text-yellow-300 duration-300"
          >
            Impressum
          </a>
          <a
            href="https://srenv.vercel.app/legal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Privacy Policy (opens in new tab)"
            className="hover:text-yellow-300 duration-300"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Showcase } from "./sections/Showcase";
import { Contact } from "./sections/Contact";

function App() {
  const [lightmode, setLightmode] = useState(false);

  const [amount, setAmount] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAmount(0);
      } else {
        setAmount(0.5);
      }
    };
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <div className={`flex flex-col  h-dvh relative overflow-x-hidden`}>
      <Navbar lightmode={lightmode} setLightmode={setLightmode} />
      <main>
        <Hero lightmode={lightmode}  amount={amount}/>
        <About lightmode={lightmode} amount={amount}/>
        <Showcase lightmode={lightmode} amount={amount}/>
        <Contact lightmode={lightmode} amount={amount}/>
      </main>
      <Footer lightmode={lightmode} />
    </div>
  );
}

export default App;

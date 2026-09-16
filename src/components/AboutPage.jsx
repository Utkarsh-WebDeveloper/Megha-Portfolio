import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css";

import Img3 from "../assets/Img3.png";
import Img5 from "../assets/Img5.png";
import Img6 from "../assets/Img6.png";
import Img7 from "../assets/Img7.png";
import Img8 from "../assets/Img8.png";
import Img9 from "../assets/Img9.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ onNavigateHome }) {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-headline", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".main-portrait", {
        y: 70,
        scale: 0.92,
        opacity: 0,
        duration: 1.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 82%",
        },
      });

      gsap.from(".floating-frame", {
        y: 90,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 80%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={aboutRef}>
      <header className="about-header">
        <nav className="about-nav" aria-label="Main navigation">
          <button type="button" className="nav-btn nav-btn--inactive" onClick={onNavigateHome}>
            Home
          </button>
          <button type="button" className="nav-btn nav-btn--active">
            About
          </button>
        </nav>
      </header>

      <main className="about-hero">
        <div className="about-headline-wrap">
          <h1 className="about-headline">
            This is Megha, a social media manager with a sharp eye for strategy,
            storytelling, and visuals that turn attention into growth.
          </h1>
        </div>

        <div className="about-collage" aria-label="Megha portfolio collage">
          <div className="floating-frame frame-left">
            <img src={Img3} alt="Megha portrait" />
          </div>

          <div className="floating-frame frame-right">
            <img src={Img9} alt="Megha smiling in portrait" />
          </div>

          <div className="floating-frame frame-bottom-left">
            <img src={Img5} alt="Megha in creative work" />
          </div>

          <div className="floating-frame frame-bottom-right">
            <img src={Img7} alt="Megha with lifestyle portrait" />
          </div>

          <div className="main-portrait">
            <img src={Img6} alt="Megha in a lifestyle portrait" />
          </div>
        </div>
      </main>
    </div>
  );
}

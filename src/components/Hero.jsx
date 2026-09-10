import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

import Img1 from "../assets/Img3.png";
import Img2 from "../assets/Img9.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
import ImgMain from "../assets/Img6.png";
import Img8 from "../assets/Img8.png";
import Img9 from "../assets/Img9.png";

const surroundingImages = [Img1, Img2, null, Img4, Img8, null];

export default function Hero() {
  const root = useRef();
  const card = useRef();
  const paper = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero__title", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".hero", start: "top 85%" },
      });

      gsap.from(".polaroid", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".polaroid", start: "top 85%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = card.current;
    const back = paper.current;

    if (!el || !back) return;

    gsap.set(back, { opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(el, {
      duration: 0.7,
      rotationY: -180,
      transformOrigin: "center center",
      ease: "power2.inOut",
    }).to(back, { duration: 0.6, opacity: 1, ease: "power2.inOut" }, 0.05);

    let isHovered = false;
    let autoTimer = null;
    let holdTimer = null;

    const startAutoFlip = () => {
      clearTimeout(autoTimer);
      clearTimeout(holdTimer);

      if (isHovered) return;

      autoTimer = setTimeout(() => {
        if (isHovered) return;
        tl.play(0);

        holdTimer = setTimeout(() => {
          if (isHovered) return;
          tl.reverse();
          startAutoFlip();
        }, 2000);
      }, 3000);
    };

    const handleEnter = () => {
      isHovered = true;
      clearTimeout(autoTimer);
      clearTimeout(holdTimer);
      tl.play(0);
    };

    const handleLeave = () => {
      isHovered = false;
      tl.reverse();
      startAutoFlip();
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchstart", handleEnter);
    el.addEventListener("touchend", handleLeave);

    startAutoFlip();

    return () => {
      clearTimeout(autoTimer);
      clearTimeout(holdTimer);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchstart", handleEnter);
      el.removeEventListener("touchend", handleLeave);
      tl.kill();
    };
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero__inner">
        <h3 className="hero__pre hero__title">Hey there, I'm</h3>
        <h1 className="hero__name hero__title">
          Megha Rana<span className="hero__dot">.</span>
        </h1>

        <div className="polaroid-wrap">
          <div className="polaroid" ref={card}>
            <div className="polaroid-face polaroid-front">
              <img src={ImgMain} alt="Megha" className="polaroid-img" />
            </div>
            <div className="polaroid-face polaroid-back" ref={paper}>
              <div className="paper-content">
                <h4>Design & Product</h4>
                <p>
                  I design and ship growth, platform, and AI-assisted learning
                  products.
                </p>
                <p className="small">6 years • Bangalore, IN</p>
              </div>
            </div>
            <div className="polaroid-caption">Based in Bangalore IN</div>
          </div>

          {surroundingImages.map((src, index) => {
            if (!src) return null;

            return (
              <img
                key={`${src}-${index}`}
                src={src}
                className={`dec dec-${index + 1}`}
                alt={`photo-${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

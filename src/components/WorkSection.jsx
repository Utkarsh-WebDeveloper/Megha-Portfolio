import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WorkSection.css";

import CourseStory from "../assets/Img1.png";
import CollegeStory from "../assets/Img2.png";
import BrandStory from "../assets/Img7.png";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    number: "01",
    category: "EDUCATION · STORYTELLING",
    title: "Learning, without the lecture",
    description:
      "Making a course update feel personal, practical, and worth saving.",
    image: CourseStory,
    imageAlt: "Social post about building real skills through courses",
    className: "work-card--course",
  },
  {
    number: "02",
    category: "CREATOR CONTENT · COMMUNITY",
    title: "College life, honestly",
    description:
      "A warm, relatable take on the little moments students recognize.",
    image: CollegeStory,
    imageAlt: "Relatable college-life social post with a personal portrait",
    className: "work-card--college",
  },
  {
    number: "03",
    category: "PERSONAL BRAND · LINKEDIN",
    title: "A point of view worth sharing",
    description:
      "Turning a personal moment into a clear, thoughtful brand story.",
    image: BrandStory,
    imageAlt: "Personal-brand social post about sharing a LinkedIn growth strategy",
    className: "work-card--brand",
  },
];

export default function WorkSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from(".work-section__header", {
        y: 22,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".work-card", {
        y: 36,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-gallery",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".work-card__visual img", {
        scale: 1.12,
        duration: 1.1,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".work-gallery",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      className="work-section"
      id="work"
      ref={sectionRef}
      aria-labelledby="work-heading"
    >
      <div className="work-section__inner">
        <div className="work-section__header">
          <div className="work-section__intro">
            <p className="work-section__eyebrow">
              <span aria-hidden="true" />
              A little peek inside the studio
            </p>
            <h2 className="work-section__heading" id="work-heading">
              Made to stop
              <br />
              <em>the scroll.</em>
            </h2>
          </div>
          <p className="work-section__note">
            A collection of thoughtful social stories—made with a clear point
            of view, a human voice, and a little bit of magic.
          </p>
        </div>

        <div className="work-gallery">
          {stories.map((story) => (
            <article className={`work-card ${story.className}`} key={story.number}>
              <div className="work-card__visual">
                <div className="work-card__image-mat">
                  <img src={story.image} alt={story.imageAlt} loading="lazy" />
                </div>
                <span className="work-card__index">{story.number}</span>
                <span className="work-card__stamp" aria-hidden="true">M.</span>
                <span className="work-card__label">{story.category}</span>
              </div>
              <div className="work-card__content">
                <span className="work-card__category">{story.category}</span>
                <h3>{story.title}</h3>
                <p className="work-card__description">{story.description}</p>
              </div>
            </article>
          ))}
        </div>

        <a className="work-section__cta" href="mailto:megharana.social@gmail.com">
          <span className="work-section__cta-copy">
            <span className="work-section__cta-eyebrow">YOUR NEXT GOOD IDEA</span>
            <span>Let&apos;s give it a voice.</span>
          </span>
          <span className="work-section__cta-link" aria-label="Email Megha">
            <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProcessSection.css";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    number: "01",
    name: "Notion",
    stage: "PLAN",
    description: "Collect ideas, shape content plans, and keep the calendar clear.",
    symbol: "N",
    className: "tool-flow__card--notion",
  },
  {
    number: "02",
    name: "Claude",
    stage: "IDEATE",
    description: "Explore angles, sharpen hooks, and find the words for a story.",
    symbol: "✳",
    className: "tool-flow__card--claude",
  },
  {
    number: "03",
    name: "Canva Pro",
    stage: "CREATE",
    description: "Bring the idea to life with polished, platform-ready visuals.",
    symbol: "C",
    className: "tool-flow__card--canva",
  },
  {
    number: "04",
    name: "Meta Business Suite",
    stage: "PUBLISH",
    description: "Manage publishing and conversations across Instagram and Facebook.",
    symbol: "∞",
    className: "tool-flow__card--meta",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      timeline
        .from(".tool-flow__eyebrow, .tool-flow__title, .tool-flow__intro", {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        })
        .from(
          ".tool-flow__card",
          {
            y: 38,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.13,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          ".tool-flow__connector-fill",
          { scaleX: 0, duration: 1, ease: "power2.inOut" },
          "-=0.4",
        )
        .from(
          ".tool-flow__closing",
          { y: 12, autoAlpha: 0, duration: 0.5, ease: "power2.out" },
          "-=0.35",
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      className="tool-flow"
      ref={sectionRef}
      aria-labelledby="tool-flow-title"
    >
      <div className="tool-flow__inner">
        <header className="tool-flow__header">
          <div>
            <p className="tool-flow__eyebrow">
              <span aria-hidden="true">✳</span>
              Behind the scroll-stopping stories
            </p>
            <h2 className="tool-flow__title" id="tool-flow-title">
              A thoughtful
              <br />
              <em>little toolkit.</em>
            </h2>
          </div>
          <p className="tool-flow__intro">
            Different tools for different parts of the process—from the first
            idea to the moment it reaches your feed.
          </p>
        </header>

        <div className="tool-flow__board">
          <div className="tool-flow__board-header">
            <span>THE SOCIAL CONTENT FLOW</span>
            <span>IDEA IN&nbsp; / &nbsp;STORY OUT</span>
          </div>

          <div className="tool-flow__rail">
            <span className="tool-flow__connector" aria-hidden="true" />
            <span className="tool-flow__connector-fill" aria-hidden="true" />
            <div className="tool-flow__cards">
              {tools.map((tool) => (
                <article
                  className={`tool-flow__card ${tool.className}`}
                  key={tool.number}
                >
                  <div className="tool-flow__card-top">
                    <span>{tool.number}</span>
                    <span>{tool.stage}</span>
                  </div>
                  <div className="tool-flow__symbol-wrap" aria-hidden="true">
                    <span className="tool-flow__symbol">{tool.symbol}</span>
                    <span className="tool-flow__symbol-orbit" />
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="tool-flow__card-bottom">
                    PART OF THE PROCESS
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="tool-flow__board-footer">
            <span>01 — PLAN</span>
            <span>02 — IDEATE</span>
            <span>03 — CREATE</span>
            <span>04 — PUBLISH</span>
          </div>
        </div>

        <p className="tool-flow__closing">
          Good tools help. <em>Good thinking makes the difference.</em>
        </p>
      </div>
    </section>
  );
}

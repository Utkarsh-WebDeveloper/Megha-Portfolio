import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".box", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={container}>
      <section className="h-screen flex items-center justify-center">
        <div className="box text-6xl font-bold">
          GSAP + ScrollTrigger
        </div>
      </section>
    </main>
  );
}

export default App;
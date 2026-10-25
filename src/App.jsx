import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import WorkSection from "./components/WorkSection";
import ProcessSection from "./components/ProcessSection";

function getPageFromPath(pathname) {
  return pathname.replace(/\/+$/, "") === "/about" ? "about" : "home";
}

function App() {
  const [page, setPage] = useState(() => getPageFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPage) => {
    const nextPath = nextPage === "about" ? "/about" : "/";
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <main className="app-shell">
        {page === "about" ? (
          <AboutPage onNavigateHome={() => navigate("home")} />
        ) : (
          <>
            <Hero onNavigateAbout={() => navigate("about")} />
            <WorkSection />
            <ProcessSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
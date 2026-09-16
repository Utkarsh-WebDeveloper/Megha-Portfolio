import { useState } from "react";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      <main className="app-shell">
        {page === "about" ? (
          <AboutPage onNavigateHome={() => setPage("home")} />
        ) : (
          <Hero onNavigateAbout={() => setPage("about")} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
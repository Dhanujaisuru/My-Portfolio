import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="antialiased selection:bg-gold-base selection:text-navy-base">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
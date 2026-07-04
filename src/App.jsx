import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="antialiased selection:bg-gold-base selection:text-navy-base">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
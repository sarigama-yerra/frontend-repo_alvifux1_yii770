import Hero from './components/Hero';
import Features from './components/Features';
import QuoteForm from './components/QuoteForm';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="text-white font-semibold">TransitFlow</div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#get-quote" className="hover:text-white">Get a Quote</a>
            <a href="#track" className="hover:text-white">Track</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <QuoteForm />
        <div id="track">
          <Tracker />
        </div>
        <footer className="py-12 border-t border-white/10 bg-black">
          <div className="max-w-6xl mx-auto px-6 md:px-10 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} TransitFlow</div>
            <div className="flex gap-6">
              <a href="#features" className="hover:text-white/80">Features</a>
              <a href="#get-quote" className="hover:text-white/80">Quote</a>
              <a href="#track" className="hover:text-white/80">Track</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

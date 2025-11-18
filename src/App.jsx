import Hero from './components/Hero';
import Catalog from './components/Catalog';
import InquiryForm from './components/InquiryForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-blue-500/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-300 shadow" />
            <span className="font-semibold">Medicin Dis Company</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-blue-100/90">
            <a href="#catalog" className="hover:text-white">Catalog</a>
            <a href="#inquiry" className="hover:text-white">Request a Quote</a>
          </nav>
        </div>
      </header>

      <Hero />
      <Catalog />
      <InquiryForm />

      <footer className="mt-16 border-t border-blue-500/10 py-8">
        <div className="container mx-auto px-6 text-blue-200/80 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Medicin Dis Company. All rights reserved.</span>
          <span>GMP-compliant • Cold-chain ready • Regional delivery</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

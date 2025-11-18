import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError('Could not load catalog');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="catalog" className="container mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Product Catalog</h2>
          <p className="text-blue-200/80">Popular pharmaceuticals in stock</p>
        </div>
      </div>

      {loading && <p className="text-blue-200">Loading...</p>}
      {error && <p className="text-red-300">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="rounded-2xl bg-slate-800/60 border border-blue-500/20 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-400/20">
                {p.rx_required ? 'Rx' : 'OTC'}
              </span>
            </div>
            <p className="text-blue-200/80 text-sm mt-1">{p.strength} • {p.dosage_form}</p>
            <p className="text-blue-200/60 text-sm">{p.manufacturer}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-white font-semibold">${'{'}p.price.toFixed(2){'}'}</span>
              <span className={`text-xs ${'${'}p.cold_chain ? 'text-cyan-300' : 'text-blue-300/70'{'}'}`}>{p.cold_chain ? 'Cold-chain' : 'Standard'}</span>
            </div>
          </div>
        ))}
      </div>

      {!loading && products.length === 0 && (
        <div className="rounded-xl bg-slate-800/50 border border-blue-500/20 p-6 text-blue-200">
          No products yet. Add some via the API.
        </div>
      )}
    </section>
  );
}

export default Catalog;

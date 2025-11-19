import { useState } from 'react';

function Tracker() {
  const [code, setCode] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const lookup = async (e) => {
    e.preventDefault();
    setError('');
    setData(null);
    try {
      const res = await fetch(`${backend}/api/track/${encodeURIComponent(code)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.detail || 'Not found');
      setData(json.shipment);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-white text-2xl font-semibold">Track Shipment</h2>
          <p className="text-white/70 text-sm mt-1">Enter your tracking code to see the latest status.</p>
          <form onSubmit={lookup} className="mt-6 flex gap-3">
            <input className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Tracking code" value={code} onChange={(e)=>setCode(e.target.value)} />
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">Search</button>
          </form>

          {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
          {data && (
            <div className="mt-6 text-white/90 text-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                  <div className="text-white/60">Status</div>
                  <div className="text-white font-semibold text-lg">{data.status}</div>
                </div>
                <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                  <div className="text-white/60">Customer</div>
                  <div className="text-white font-semibold text-lg">{data.customer_name}</div>
                </div>
                <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                  <div className="text-white/60">Route</div>
                  <div className="text-white font-semibold text-lg">{data.origin} → {data.destination}</div>
                </div>
                <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                  <div className="text-white/60">Tracking</div>
                  <div className="text-white font-semibold text-lg">{data.tracking_code}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Tracker;

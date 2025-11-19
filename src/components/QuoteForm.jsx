import { useState } from 'react';

function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    date: '',
    cargo_details: '',
    weight_kg: '',
    volume_m3: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${backend}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          weight_kg: form.weight_kg ? Number(form.weight_kg) : null,
          volume_m3: form.volume_m3 ? Number(form.volume_m3) : null,
        })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Failed to submit');
      setMessage('Thanks! Your request has been received.');
      setForm({ name:'', email:'', phone:'', origin:'', destination:'', date:'', cargo_details:'', weight_kg:'', volume_m3:'' });
    } catch (err) {
      setMessage(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="get-quote" className="py-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-white text-2xl font-semibold">Request a Quote</h2>
          <p className="text-white/70 text-sm mt-1">Tell us where you’re moving cargo. We’ll get back fast.</p>

          <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 mt-6">
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Preferred date (YYYY-MM-DD)" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Origin" value={form.origin} onChange={e=>setForm({...form,origin:e.target.value})} required />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Destination" value={form.destination} onChange={e=>setForm({...form,destination:e.target.value})} required />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Weight (kg)" value={form.weight_kg} onChange={e=>setForm({...form,weight_kg:e.target.value})} />
            <input className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40" placeholder="Volume (m³)" value={form.volume_m3} onChange={e=>setForm({...form,volume_m3:e.target.value})} />
            <textarea className="md:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 min-h-[100px]" placeholder="Cargo details" value={form.cargo_details} onChange={e=>setForm({...form,cargo_details:e.target.value})} />
            <button disabled={loading} className="md:col-span-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-400 transition disabled:opacity-60">
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </form>

          {message && <p className="mt-4 text-sm text-white/80">{message}</p>}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;

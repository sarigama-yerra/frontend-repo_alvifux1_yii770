function Features() {
  const items = [
    {
      title: 'Instant Quotes',
      desc: 'Capture leads with a sleek quote form and manage them in your pipeline.'
    },
    {
      title: 'Live Tracking',
      desc: 'Share tracking links your customers love, with real-time status updates.'
    },
    {
      title: 'Fleet & Drivers',
      desc: 'Keep vehicles and drivers organized with statuses and capacity.'
    },
    {
      title: 'Clean Analytics',
      desc: 'Know what’s moving, what’s stuck, and what’s next at a glance.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

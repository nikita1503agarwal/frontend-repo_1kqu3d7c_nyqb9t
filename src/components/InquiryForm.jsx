import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          phone: form.phone || undefined,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      setForm({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (e) {
      setStatus('error');
      setError('Submission failed. Please try again.');
    }
  };

  return (
    <section id="inquiry" className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Request a Quote</h2>
        <p className="text-blue-200/80 mt-1">Tell us what you need and we’ll get back within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className="w-full rounded-xl bg-slate-800/60 border border-blue-500/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input name="email" value={form.email} onChange={onChange} required type="email" placeholder="Email address" className="w-full rounded-xl bg-slate-800/60 border border-blue-500/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="company" value={form.company} onChange={onChange} placeholder="Company (optional)" className="w-full rounded-xl bg-slate-800/60 border border-blue-500/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="w-full rounded-xl bg-slate-800/60 border border-blue-500/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} required placeholder="What products do you need? Include SKUs, quantities, and delivery location." rows={5} className="w-full rounded-xl bg-slate-800/60 border border-blue-500/20 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />

          <div className="flex items-center gap-3">
            <button disabled={status==='loading'} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition disabled:opacity-60">
              {status==='loading' ? 'Sending...' : 'Send Request'}
            </button>
            {status==='success' && <span className="text-green-300">Thanks! We’ll be in touch.</span>}
            {status==='error' && <span className="text-red-300">{error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default InquiryForm;

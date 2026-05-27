'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [secret, setSecret] = useState('');
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    fetch('/api/instagram').then((r) => r.json()).then((d) => setPosts(d.posts || []));
  }, []);

  const refresh = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    await fetch(`${apiUrl}/api/instagram/refresh`, {
      method: 'POST',
      headers: { 'x-admin-secret': secret },
    });
    const d = await fetch('/api/instagram').then((r) => r.json());
    setPosts(d.posts || []);
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-elegant-black pt-24">
        <div className="glass-dark p-10 rounded-sm max-w-md w-full">
          <h1 className="luxury-heading text-ivory text-2xl mb-6">Admin Dashboard</h1>
          <input type="password" placeholder="Admin Secret" className="w-full bg-ivory/5 border border-ivory/10 px-4 py-3 text-ivory mb-4" value={secret} onChange={(e) => setSecret(e.target.value)} />
          <button onClick={() => setAuthed(true)} className="btn-gold w-full">Enter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 section-padding bg-ivory min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="luxury-heading text-elegant-black">Admin Dashboard</h1>
          <button onClick={refresh} className="btn-primary">Refresh Instagram Feed</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-sm shadow"><p className="text-sm text-elegant-black/50">Instagram Posts</p><p className="text-4xl font-[family-name:var(--font-playfair)] text-wine">{posts.length}</p></div>
          <div className="bg-white p-6 rounded-sm shadow"><p className="text-sm text-elegant-black/50">Videos</p><p className="text-4xl font-[family-name:var(--font-playfair)] text-wine">{posts.filter((p) => p.type === 'video').length}</p></div>
          <div className="bg-white p-6 rounded-sm shadow"><p className="text-sm text-elegant-black/50">Carousels</p><p className="text-4xl font-[family-name:var(--font-playfair)] text-wine">{posts.filter((p) => p.type === 'carousel').length}</p></div>
        </div>
        <div className="bg-white rounded-sm shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-wine text-ivory"><tr><th className="p-4 text-left">Type</th><th className="p-4 text-left">Caption</th><th className="p-4 text-left">Category</th></tr></thead>
            <tbody>{posts.map((p) => (
              <tr key={p.id} className="border-b border-ivory"><td className="p-4">{p.type}</td><td className="p-4 max-w-md truncate">{p.caption?.slice(0, 80)}</td><td className="p-4">{p.category}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

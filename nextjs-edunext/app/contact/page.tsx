"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Kapcsolat</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Név"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Üzenet"
          required
          rows={4}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Küldés
        </button>
        {sent && <p className="text-green-600 mt-2">Üzenet elküldve!</p>}
      </form>
    </main>
  );
}

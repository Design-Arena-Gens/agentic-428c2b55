"use client";

import { useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function sayHello() {
    setLoading(true);
    try {
      const resp = await fetch(`/api/hello?name=${encodeURIComponent(name || "world")}`);
      const data = await resp.json();
      setMessage(data.message);
    } catch (e) {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 16,
      fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
    }}>
      <h1 style={{ fontSize: 64, margin: 0 }}>hh</h1>
      <p style={{ color: "#666", margin: 0 }}>Say hello via the API route.</p>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={{ padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
        />
        <button onClick={sayHello} disabled={loading} style={{ padding: "8px 12px", borderRadius: 6, border: "1px solid #222", background: "#111", color: "white" }}>
          {loading ? "Calling..." : "Say hello"}
        </button>
      </div>
      {message && (
        <pre style={{ background: "#f7f7f7", padding: 12, borderRadius: 6, marginTop: 8 }}>{message}</pre>
      )}
      <a href="https://agentic-428c2b55.vercel.app" style={{ marginTop: 24, color: "#0070f3" }}>Production URL</a>
    </main>
  );
}

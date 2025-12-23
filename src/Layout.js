import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="text-lg font-semibold">Mon App</div>
          <div className="text-sm text-slate-500">Self-hosted template</div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Mon App
        </div>
      </footer>
    </div>
  );
}

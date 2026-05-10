import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-border text-center">
      <div className="font-mono text-xs text-textMuted">
        <p>© {new Date().getFullYear()} Johnson Nunoo. All systems nominal.</p>
        <p className="mt-2 text-[10px] opacity-50">Designed & Built with precision.</p>
      </div>
    </footer>
  );
}

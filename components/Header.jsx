'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const PHONE = '+995557496359';
const WHATSAPP_INTL = '995557496359'; // برای wa.me باید بدون +

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    window.addEventListener('scroll', close);
    return () => {
      window.removeEventListener('resize', close);
      window.removeEventListener('scroll', close);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link href="/" className="font-semibold text-2xl tracking-tight text-green-700">
          IV Cars
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link href="/cars" className="text-gray-700 hover:text-green-700">Cars</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-700">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
        </nav>

        {/* Right controls */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Lang toggle */}
          <div className="flex items-center rounded-md border border-gray-300 p-1">
            <button
              onClick={() => setLang('EN')}
              className={`h-7 w-10 rounded ${lang === 'EN' ? 'bg-green-700 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-pressed={lang === 'EN'}
            >
              EN
            </button>
            <button
              onClick={() => setLang('AR')}
              className={`h-7 w-10 rounded ${lang === 'AR' ? 'bg-green-700 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-pressed={lang === 'AR'}
            >
              AR
            </button>
          </div>

          {/* Call */}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-md border border-green-700 px-3 py-2 text-sm font-medium text-green-800 hover:bg-green-50"
            aria-label={`Call ${PHONE}`}
          >
            {/* phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
            </svg>
            Call
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_INTL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-green-700 px-3 py-2 text-sm font-medium text-white hover:bg-green-800"
            aria-label="Open WhatsApp chat"
          >
            {/* whatsapp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
              <path d="M19.11 17.1c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-1.74-.87-2.88-1.56-4.03-3.53-.3-.51.3-.48.86-1.6.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.35z"/>
              <path d="M27 5a13 13 0 10-5.05 24.99l.13.01A12.9 12.9 0 0027 19c0-3.46-1.37-6.61-3.59-8.83A12.44 12.44 0 0019 5.05 12.96 12.96 0 0027 5zM6.73 25.27l.9-3.3a10.27 10.27 0 01-1.7-5.6c0-5.68 4.6-10.29 10.28-10.29a10.25 10.25 0 017.28 17.53 10.25 10.25 0 01-7.26 3c-1.76 0-3.42-.42-4.9-1.18l-3.6.84z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(v => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-200/70 bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-gray-700">
            <Link href="/" className="rounded px-2 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/cars" className="rounded px-2 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>Cars</Link>
            <Link href="/about" className="rounded px-2 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="rounded px-2 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>Contact</Link>

            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => setLang('EN')}
                className={`h-8 w-12 rounded border ${lang === 'EN' ? 'bg-green-700 text-white border-green-700' : 'border-gray-300 text-gray-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('AR')}
                className={`h-8 w-12 rounded border ${lang === 'AR' ? 'bg-green-700 text-white border-green-700' : 'border-gray-300 text-gray-700'}`}
              >
                AR
              </button>
              <a href={`tel:${PHONE}`} className="ml-auto rounded-md border border-green-700 px-3 py-2 text-sm text-green-800">
                Call
              </a>
              <a href={`https://wa.me/${WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer" className="rounded-md bg-green-700 px-3 py-2 text-sm text-white">
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

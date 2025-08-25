'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BG_IMG =
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80'; // Ferrari studio shot
const BG_IMG_MOBILE =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'; // sports car - mobile safe

export default function Hero() {
  const [q, setQ] = useState('');
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(q ? `/cars?search=${encodeURIComponent(q)}` : '/cars');
  };

  return (
    <section className="relative">
      {/* background */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${BG_IMG})`,
        }}
      />
      {/* mobile fallback (اختیاری اما مطمئن) */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover md:hidden"
        style={{ backgroundImage: `url(${BG_IMG_MOBILE})` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

<div className="mx-auto flex min-h-[80vh] md:min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6">

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Rent Luxury Cars in <span className="text-white">Dubai</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Experience the best car rental service in Dubai with our premium fleet of luxury vehicles.
        </p>

        {/* CTA + Search */}
        <div className="mt-8 flex w-full max-w-2xl flex-col items-stretch gap-3 sm:flex-row">
          <Link
            href="/cars"
            className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 text-base font-semibold text-white hover:bg-green-800 shadow-lg shadow-black/10"
          >
            View Cars
          </Link>

          <form onSubmit={onSubmit} className="flex-1">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                {/* search icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.53 20.47l-4.7-4.7a8 8 0 10-1.06 1.06l4.7 4.7a.75.75 0 101.06-1.06zM10.5 17a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/>
                </svg>
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="text"
                placeholder="Search cars, brands..."
                className="w-full rounded-md border border-white/30 bg-white/95 pl-10 pr-4 py-3 text-gray-800 placeholder-gray-500 shadow-lg shadow-black/10 focus:border-green-700 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                Search Cars
              </button>
            </div>
          </form>
        </div>

        {/* scroll indicator */}
        <a
          href="#finder"
          className="mt-10 inline-flex h-10 w-6 items-center justify-center rounded-full border-2 border-white/70 text-white/80 hover:text-white"
          aria-label="Scroll down"
          title="Scroll"
        >
          <span className="block h-2 w-1 animate-bounce rounded bg-white"></span>
        </a>
      </div>
    </section>
  );
}

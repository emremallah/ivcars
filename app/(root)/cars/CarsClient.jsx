// app/(root)/cars/CarsClient.jsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';

function matches(car, qs) {
  if (qs.brand && car.brand !== qs.brand) return false;
  if (qs.gearbox && car.gearbox !== qs.gearbox) return false;

  if (qs.price) {
    const [minStr, maxStr] = qs.price.split('-');
    const min = parseInt(minStr || '0', 10);
    const max = maxStr?.includes('+') ? Infinity : parseInt(maxStr || '999999', 10);
    if (car.price < min || car.price > max) return false;
  }

  if (qs.search) {
    const s = qs.search.toLowerCase();
    const inName = car.name.toLowerCase().includes(s);
    const inBrand = car.brand.toLowerCase().includes(s);
    if (!inName && !inBrand) return false;
  }
  return true;
}

export default function CarsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get('search') || '');

  // Keep local input in sync with URL changes (back/forward, etc.)
  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const filtered = useMemo(() => {
    const qs = Object.fromEntries(searchParams.entries());
    return cars.filter((c) => matches(c, qs));
  }, [searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set('search', query);
    else params.delete('search');
    router.push(`/cars?${params.toString()}`);
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Available Cars</h1>
          <p className="mt-1 text-gray-600">
            Showing {filtered.length} of {cars.length} cars
          </p>
        </div>

        {/* Search box */}
        <form onSubmit={onSubmit} className="w-full max-w-md">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.53 20.47l-4.7-4.7a8 8 0 10-1.06 1.06l4.7 4.7a.75.75 0 101.06-1.06zM10.5 17a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
              </svg>
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search cars or brands..."
              className="w-full rounded-md border border-gray-300 bg-white pl-10 pr-4 py-2 text-gray-800 placeholder-gray-500 shadow-sm focus:border-green-700 focus:ring-green-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-green-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-gray-200 p-10 text-center text-gray-600">
          No cars matched your filters. Try adjusting your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </>
  );
}

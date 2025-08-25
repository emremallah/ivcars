'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from '@/components/ui/Select';

export default function Finder() {
  const router = useRouter();
  const [brand, setBrand] = useState('');
  const [gearbox, setGearbox] = useState('');
  const [price, setPrice] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (brand) params.set('brand', brand);
    if (gearbox) params.set('gearbox', gearbox);
    if (price) params.set('price', price);
    router.push(`/cars?${params.toString()}`);
  };

  const brandOptions = [
    { label: 'Any', value: '' },
    { label: 'Mercedes', value: 'mercedes' },
    { label: 'BMW', value: 'bmw' },
    { label: 'Audi', value: 'audi' },
    { label: 'Lamborghini', value: 'lamborghini' },
    { label: 'Ferrari', value: 'ferrari' },
  ];

  const gearboxOptions = [
    { label: 'Any', value: '' },
    { label: 'Automatic', value: 'automatic' },
    { label: 'Manual', value: 'manual' },
  ];

  const priceOptions = [
    { label: 'Any', value: '' },
    { label: '0 - 500 AED', value: '0-500' },
    { label: '500 - 1000 AED', value: '500-1000' },
    { label: '1000 - 2000 AED', value: '1000-2000' },
    { label: '2000+ AED', value: '2000+' },
  ];

  return (
    <section id="finder" className="relative z-10 -mt-16">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white/95 px-4 py-8 shadow-xl ring-1 ring-black/5 backdrop-blur sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Find Your Perfect Car
        </h2>

        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Select
            label="Brand"
            value={brand}
            onChange={setBrand}
            options={brandOptions}
          />
          <Select
            label="Gearbox"
            value={gearbox}
            onChange={setGearbox}
            options={gearboxOptions}
          />
          <Select
            label="Price Range (per day)"
            value={price}
            onChange={setPrice}
            options={priceOptions}
          />

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-md bg-green-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-800 active:translate-y-[1px]"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// app/(root)/cars/page.jsx
import { Suspense } from 'react';
import CarsClient from './CarsClient';

export const metadata = {
  title: 'Cars | IV Cars',
  description: 'Browse our available cars and filter by brand or search.',
};

export default function CarsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <Suspense
        fallback={
          <div className="rounded-xl border border-gray-200 p-10 text-center text-gray-600">
            Loading cars…
          </div>
        }
      >
        <CarsClient />
      </Suspense>
    </main>
  );
}

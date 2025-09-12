// components/CarCard.jsx
import Link from 'next/link';

const PHONE = '+971569866636';
const WHATSAPP_INTL = '971569866636';

export default function CarCard({ car }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* لینک نامرئی که کل کارت را کلیک‌پذیر می‌کند */}
      <Link href={`/cars/${car.id}`} className="absolute inset-0 z-10" aria-label={`View ${car.name}`} />

      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-80" />
        <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow">
          {car.brand.toUpperCase()}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            {car.name}
          </h3>
          <span className="shrink-0 rounded-md bg-green-50 px-2 py-1 text-sm font-semibold text-green-700">
            {car.price} AED<span className="font-normal text-gray-500">/day</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 3a2 2 0 100 4h1v3H6a2 2 0 100 4h2v3H7a2 2 0 100 4h10a2 2 0 100-4h-1v-3h2a2 2 0 100-4h-2V7h1a2 2 0 100-4H7zm5 7h2v4h-2v-4z"/></svg>
            {car.gearbox === 'automatic' ? 'Automatic' : 'Manual'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>
            Dubai, UAE
          </span>
        </div>

        {/* دکمه‌ها همچنان کار می‌کنند، ولی کلیک روی کارت هم به صفحهٔ جزئیات می‌برد */}
        <div className="pointer-events-none flex gap-2 pt-2">
          <a href={`tel:${PHONE}`} className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-md border border-green-700 px-3 py-2 text-sm font-medium text-green-800 hover:bg-green-50">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
            Call
          </a>
          <a href={`https://wa.me/${WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white hover:bg-green-800">
            <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.1c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-1.74-.87-2.88-1.56-4.03-3.53-.3-.51.3-.48.86-1.6.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.35z"/><path d="M27 5a13 13 0 10-5.05 24.99l.13.01A12.9 12.9 0 0027 19c0-3.46-1.37-6.61-3.59-8.83A12.44 12.44 0 0019 5.05 12.96 12.96 0 0027 5zM6.73 25.27l.9-3.3a10.27 10.27 0 01-1.7-5.6c0-5.68 4.6-10.29 10.28-10.29a10.25 10.25 0 017.28 17.53 10.25 10.25 0 01-7.26 3c-1.76 0-3.42-.42-4.9-1.18l-3.6.84z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

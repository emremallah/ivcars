// app/(root)/cars/[id]/page.jsx
import { notFound } from 'next/navigation';
import { cars } from '@/data/cars';

const PHONE = '+971569866636';
const WHATSAPP_INTL = '971569866636';

export function generateStaticParams() {
  // برای SSG (اختیاری ولی خوبه)
  return cars.map(c => ({ id: c.id }));
}

export function generateMetadata({ params }) {
  const car = cars.find(c => c.id === params.id);
  if (!car) return { title: 'Car not found | IV Cars' };
  return {
    title: `${car.name} – Rent in Dubai | IV Cars`,
    description: `Rent ${car.name} in Dubai. ${car.price} AED/day. Call or WhatsApp to book.`,
  };
}

export default function CarDetailsPage({ params }) {
  const car = cars.find(c => c.id === params.id);
  if (!car) return notFound();

  const waText = encodeURIComponent(
    `Hello IV Cars,%0AI'm interested in booking: ${car.name} (%23${car.id}).%0APlease share availability and total price.`
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600">
        <a href="/" className="hover:underline">Home</a> <span>/</span>{' '}
        <a href="/cars" className="hover:underline">Cars</a> <span>/</span>{' '}
        <span className="text-gray-900 font-medium">{car.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Media */}
        <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="relative aspect-[16/10]">
            <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Summary / CTAs */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
            <p className="mt-1 text-gray-600">Brand: {car.brand.toUpperCase()}</p>
            <p className="text-gray-600">Gearbox: {car.gearbox === 'automatic' ? 'Automatic' : 'Manual'}</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-green-700">
              <span className="text-2xl font-extrabold">{car.price} AED</span>
              <span className="text-gray-600">/ day</span>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-gray-200 p-4">
            <h2 className="font-semibold">Included</h2>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>Free delivery in Dubai</li>
              <li>Comprehensive insurance</li>
              <li>24/7 customer support</li>
            </ul>
          </div>

          <div className="space-y-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-green-700 px-4 py-3 font-semibold text-green-800 hover:bg-green-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
              Call to Book
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_INTL}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.1c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-1.74-.87-2.88-1.56-4.03-3.53-.3-.51.3-.48.86-1.6.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.35z"/><path d="M27 5a13 13 0 10-5.05 24.99l.13.01A12.9 12.9 0 0027 19c0-3.46-1.37-6.61-3.59-8.83A12.44 12.44 0 0019 5.05 12.96 12.96 0 0027 5zM6.73 25.27l.9-3.3a10.27 10.27 0 01-1.7-5.6c0-5.68 4.6-10.29 10.28-10.29a10.25 10.25 0 017.28 17.53 10.25 10.25 0 01-7.26 3c-1.76 0-3.42-.42-4.9-1.18l-3.6.84z"/></svg>
              WhatsApp Booking
            </a>
            <p className="text-center text-sm text-gray-600">Address: Dubai, UAE</p>
          </div>
        </div>
      </div>

      {/* ویژگی‌ها/توضیحات بیشتر (نمونه) */}
      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 p-5">
          <h3 className="mb-2 text-lg font-semibold">Performance</h3>
          <p className="text-gray-700 text-sm">Powerful engine, premium handling, and top-tier braking for Dubai roads.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-5">
          <h3 className="mb-2 text-lg font-semibold">Comfort</h3>
          <p className="text-gray-700 text-sm">Luxury interior, climate control, and advanced infotainment.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-5">
          <h3 className="mb-2 text-lg font-semibold">Policy</h3>
          <p className="text-gray-700 text-sm">Deposit required. Minimum driver age 21+. Passport or UAE ID needed.</p>
        </div>
      </section>
    </main>
  );
}

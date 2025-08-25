import ImageWithFallback from '@/components/ui/ImageWithFallback';

export const metadata = {
  title: 'About IV Cars | Luxury Car Rental in Dubai',
  description:
    'Learn about IV Cars — premium fleet, fast delivery, transparent pricing, and 24/7 support in Dubai, UAE.',
};

const PHONE = '+995557496359';
const WHATSAPP_INTL = '995557496359';

// Hero car images (keyword endpoints; always return an image)
const HERO_SRCS = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Audi-R8-V10-Front.jpg?width=1600"
];

// Story image (luxury sedan / supercar)
const STORY_SRCS = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20W223%20IMG%206663.jpg?width=1600"
];

// Coverage image (car in Dubai context / supercar)
const COVERAGE_SRCS = [
  'https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Ferrari%20F8%20Tributo.jpg?width=1600'
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero (uses <img> not background-image) */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <ImageWithFallback
            srcs={HERO_SRCS}
            alt="Luxury supercars hero"
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="mx-auto flex min-h-[50vh] items-center justify-center px-4 text-center text-white md:min-h-[60vh]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              About IV Cars
            </h1>
            <p className="mt-3 text-white/90">
              Luxury car rentals in Dubai with fast delivery, premium service, and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our story
            </h2>
            <p className="mt-3 text-gray-700">
              IV Cars was founded to make luxury car rental simple and reliable. We focus on what
              matters: a premium fleet, quick handovers, and clear communication. Whether you need a
              supercar for a special weekend or a luxury sedan for business, our team delivers
              a smooth, end‑to‑end experience anywhere in Dubai.
            </p>
            <p className="mt-3 text-gray-700">
              We proudly serve visitors, residents, and corporate clients with 24/7 availability,
              flexible terms, and concierge‑level support over phone and WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-50 sm:w-auto"
              >
                Call us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_INTL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800 sm:w-auto"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Car image (with fallbacks) */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <ImageWithFallback
              srcs={STORY_SRCS}
              alt="Luxury sedan"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Our mission</h3>
            <p className="mt-2 text-gray-700">
              Deliver an effortless luxury mobility experience with fast delivery, premium vehicles,
              and honest pricing.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Our vision</h3>
            <p className="mt-2 text-gray-700">
              Become Dubai’s most trusted luxury car rental brand by combining concierge service with
              the latest technology.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">What we value</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
              <li>Reliability & on‑time delivery</li>
              <li>Transparent terms</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact & Coverage */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-green-700 bg-green-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>
                Phone / Botim / WhatsApp:{' '}
                <a href={`tel:${PHONE}`} className="font-semibold text-green-700 underline">
                  +995 557 496 359
                </a>
              </li>
              <li>
                WhatsApp direct:{' '}
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-700 underline"
                >
                  wa.me/995557496359
                </a>
              </li>
              <li>Address: Dubai, UAE</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">Service coverage</h3>
            <p className="mt-2 text-gray-700">
              We deliver across Dubai including Downtown, Marina, Palm Jumeirah, JBR, Business Bay,
              and DXB Airport. Delivery to Abu Dhabi or Sharjah is available upon request.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <ImageWithFallback
                srcs={COVERAGE_SRCS}
                alt="Supercar in Dubai"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

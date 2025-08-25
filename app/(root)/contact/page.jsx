// app/(root)/contact/page.jsx
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact IV Cars | Luxury Car Rental in Dubai',
  description:
    'Contact IV Cars in Dubai via phone or WhatsApp. Fast replies, 24/7 support, and quick delivery.',
};

const PHONE = '+995557496359';
const WHATSAPP_INTL = '995557496359';
const ADDRESS = 'Dubai, UAE';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      {/* Page header */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold">Contact us</h1>
        <p className="mt-2 text-gray-600">
          Reach us 24/7 via phone or WhatsApp. We usually respond within minutes.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact details */}
        <aside className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Direct contact</h2>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li className="flex items-center justify-between gap-3">
                <span>Phone / Botim / WhatsApp</span>
                <a
                  href={`tel:${PHONE}`}
                  className="font-semibold text-green-700 hover:underline"
                >
                  +995 557 496 359
                </a>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>WhatsApp direct</span>
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-700 hover:underline"
                >
                  wa.me/995557496359
                </a>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Address</span>
                <span className="font-medium text-gray-900">{ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Find us
            </h3>
            <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title="Dubai map"
                src="https://www.google.com/maps?q=Dubai%2C%20UAE&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dubai%2C%20UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-green-700 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </aside>

        {/* WhatsApp booking form (client) */}
        <section className="lg:col-span-2">
          <ContactForm />

          <div className="mt-6 rounded-xl border border-green-700 bg-green-50 p-4 text-sm text-gray-800">
            Prefer a quick chat? Click{' '}
            <a
              href={`https://wa.me/${WHATSAPP_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-700 underline"
            >
              here
            </a>{' '}
            to start a WhatsApp conversation right away.
          </div>
        </section>
      </section>
    </main>
  );
}

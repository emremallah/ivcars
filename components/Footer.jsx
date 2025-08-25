// components/Footer.jsx
import Link from 'next/link';

const PHONE = '+995557496359';
const WHATSAPP_INTL = '995557496359';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight text-green-700">
              IV Cars
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-600">
              Luxury car rentals in Dubai with fast delivery, transparent pricing, and 24/7 support.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-md border border-green-700 px-3 py-2 text-sm font-medium text-green-800 hover:bg-green-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
                Call
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_INTL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.1c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-1.74-.87-2.88-1.56-4.03-3.53-.3-.51.3-.48.86-1.6.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.35z"/><path d="M27 5a13 13 0 10-5.05 24.99l.13.01A12.9 12.9 0 0027 19c0-3.46-1.37-6.61-3.59-8.83A12.44 12.44 0 0019 5.05 12.96 12.96 0 0027 5zM6.73 25.27l.9-3.3a10.27 10.27 0 01-1.7-5.6c0-5.68 4.6-10.29 10.28-10.29a10.25 10.25 0 017.28 17.53 10.25 10.25 0 01-7.26 3c-1.76 0-3.42-.42-4.9-1.18l-3.6.84z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Pages</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-green-700">Home</Link></li>
              <li><Link href="/cars" className="hover:text-green-700">Cars</Link></li>
              <li><Link href="/about" className="hover:text-green-700">About</Link></li>
              <li><Link href="/contact" className="hover:text-green-700">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <span className="block">Phone / Botim / WhatsApp</span>
                <a href={`tel:${PHONE}`} className="font-medium text-gray-900 hover:underline">
                  +995 557 496 359
                </a>
              </li>
              <li>
                <span className="block">WhatsApp direct</span>
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 hover:underline"
                >
                  wa.me/995557496359
                </a>
              </li>
              <li>
                <span className="block">Address</span>
                <span className="font-medium text-gray-900">Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Hours / CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Hours</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Mon–Sun: 24/7 support</li>
            </ul>

            <div className="mt-5 rounded-xl border border-green-700 bg-green-50 p-4">
              <p className="text-sm text-gray-800">Ready to drive?</p>
              <a
                href={`https://wa.me/${WHATSAPP_INTL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-600 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} IV Cars. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-green-700">Terms</Link>
            <Link href="/privacy" className="hover:text-green-700">Privacy</Link>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-green-700">
              Back to top
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3l5 6H5l5-6zm0 5v9a1 1 0 01-2 0V8h2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

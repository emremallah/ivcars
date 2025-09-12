// components/WhyChoose.jsx
export default function WhyChoose() {
  const features = [
    {
      title: 'Fast Delivery',
      desc: 'Get your luxury car delivered anywhere in Dubai within minutes — hotel, airport, or residence.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M3 7h11a2 2 0 012 2v6h-1a3 3 0 10-3 3 3 3 0 003-3h-4a3 3 0 10-3 3 3 3 0 003-3H6a2 2 0 01-2-2V7zM18 9h1.586A2 2 0 0121 9.586L22.414 11A2 2 0 0123 12.414V15a2 2 0 01-2 2h-1a3 3 0 10-3 3 3 3 0 003-3h1a1 1 0 001-1v-2.586L19.586 11A2 2 0 0018.172 10H18V9z"/>
        </svg>
      ),
    },
    {
      title: 'Premium Fleet',
      desc: 'Choose from the latest Lamborghini, Ferrari, Mercedes, BMW, and Audi models.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M5 11a7 7 0 0114 0v3h1a1 1 0 110 2h-1.126A3.001 3.001 0 0115 20a3.001 3.001 0 01-2.874-4H11.874A3.001 3.001 0 019 20a3.001 3.001 0 01-2.874-4H5a1 1 0 110-2h1v-3zm2 0v3h10v-3a5 5 0 10-10 0z"/>
        </svg>
      ),
    },
    {
      title: '24/7 Support',
      desc: 'We are available day and night via phone and WhatsApp for your assistance.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M2 5a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3H6v2a8 8 0 0016 0V9a1 1 0 112 0v3a10 10 0 11-20 0V9a3 3 0 01-2-3V5zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H5z"/>
        </svg>
      ),
    },
    {
      title: 'Insurance Included',
      desc: 'Full insurance coverage on every rental with transparent conditions.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3zm0 4.18L7 7v4.82C7 14.9 9.47 18.76 12 20c2.53-1.24 5-5.1 5-8.18V7l-5-0.82zM11 11h2v5h-2v-5zm0-3h2v2h-2V8z"/>
        </svg>
      ),
    },
  ];

  const stats = [
    { label: 'Happy Clients', value: '3,500+' },
    { label: 'Cars Available', value: '120+' },
    { label: 'Avg. Delivery Time', value: '45 min' },
    { label: 'Rating', value: '4.9/5' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Copy */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why choose <span className="text-green-700">IV Cars</span>?
          </h2>
          <p className="mt-3 text-gray-600">
            Designed for a hassle-free experience: premium fleet, fast delivery, 24/7 support, and transparent pricing.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700">
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-gray-50 p-4 text-center">
                <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+971569866636"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-green-700 px-4 py-3 font-semibold text-green-800 hover:bg-green-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
              Call Now
            </a>
            <a
              href="https://wa.me/971569866636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.1c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-1.74-.87-2.88-1.56-4.03-3.53-.3-.51.3-.48.86-1.6.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.35z"/><path d="M27 5a13 13 0 10-5.05 24.99l.13.01A12.9 12.9 0 0027 19c0-3.46-1.37-6.61-3.59-8.83A12.44 12.44 0 0019 5.05 12.96 12.96 0 0027 5zM6.73 25.27l.9-3.3a10.27 10.27 0 01-1.7-5.6c0-5.68 4.6-10.29 10.28-10.29a10.25 10.25 0 017.28 17.53 10.25 10.25 0 01-7.26 3c-1.76 0-3.42-.42-4.9-1.18l-3.6.84z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

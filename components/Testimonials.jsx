// components/Testimonials.jsx
export default function Testimonials() {
  const reviews = [
    {
      name: 'Ahmed K.',
      role: 'Business traveler',
      text:
        'Perfect service. Car delivered to my hotel in under an hour. Will rent again.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/100?img=12',
    },
    {
      name: 'Lina M.',
      role: 'Visitor from KSA',
      text:
        'Loved the Lamborghini. Booking over WhatsApp was super easy and transparent.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/100?img=32',
    },
    {
      name: 'Daniel S.',
      role: 'Tourist',
      text:
        'Clean car, fair pricing, and quick support when I had a question.',
      rating: 4,
      avatar: 'https://i.pravatar.cc/100?img=24',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">What customers say</h2>
        <a
          href="https://wa.me/971569866636"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-green-700 hover:underline"
        >
          Book on WhatsApp
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{r.name}</h3>
                <p className="text-sm text-gray-500">{r.role}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">{r.text}</p>

            <div className="mt-4 flex items-center gap-1" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  className={`h-5 w-5 ${idx < r.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-green-700 bg-green-50 p-6 text-center">
        <p className="text-gray-800">
          Need help choosing a car? Call us at{' '}
          <a href="tel:+971569866636" className="font-semibold text-green-700 underline">
            +971 569 866 636
          </a>{' '}
          — Dubai, UAE
        </p>
      </div>
    </section>
  );
}

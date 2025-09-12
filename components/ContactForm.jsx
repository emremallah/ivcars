'use client';

const WHATSAPP_INTL = '971569866636';

function buildWaUrl(fields) {
  const {
    name = '',
    phone = '',
    pickupDate = '',
    pickupTime = '',
    dropoffDate = '',
    dropoffTime = '',
    car = '',
    note = '',
  } = fields || {};

  const lines = [
    'Hello IV Cars,',
    'I would like to book a car:',
    car && `• Car: ${car}`,
    (pickupDate || pickupTime) && `• Pick-up: ${pickupDate} ${pickupTime}`,
    (dropoffDate || dropoffTime) && `• Drop-off: ${dropoffDate} ${dropoffTime}`,
    phone && `• My phone: ${phone}`,
    name && `• Name: ${name}`,
    note && `• Note: ${note}`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(lines)}`;
}

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Quick WhatsApp booking</h2>
      <p className="mt-1 text-sm text-gray-600">
        Fill this form and submit — it opens WhatsApp with your details prefilled.
      </p>

      <form
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = Object.fromEntries(new FormData(form).entries());
          const wa = buildWaUrl({
            name: data.name,
            phone: data.phone,
            pickupDate: data.pickupDate,
            pickupTime: data.pickupTime,
            dropoffDate: data.dropoffDate,
            dropoffTime: data.dropoffTime,
            car: data.car,
            note: data.note,
          });
          window.open(wa, '_blank', 'noopener,noreferrer');
        }}
      >
        {/* Name */}
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-green-700 focus:ring-green-700"
            required
          />
        </div>

        {/* Phone */}
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+971 5x xxx xxxx"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-green-700 focus:ring-green-700"
            required
          />
        </div>

        {/* Car */}
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Preferred car
          </label>
          <input
            name="car"
            type="text"
            placeholder="e.g., Lamborghini Huracán EVO"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-green-700 focus:ring-green-700"
          />
        </div>

        {/* Pickup */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Pick-up date
          </label>
          <input
            name="pickupDate"
            type="date"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-green-700 focus:ring-green-700"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Pick-up time
          </label>
          <input
            name="pickupTime"
            type="time"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-green-700 focus:ring-green-700"
          />
        </div>

        {/* Dropoff */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Drop-off date
          </label>
          <input
            name="dropoffDate"
            type="date"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-green-700 focus:ring-green-700"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Drop-off time
          </label>
          <input
            name="dropoffTime"
            type="time"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-green-700 focus:ring-green-700"
          />
        </div>

        {/* Note */}
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Note (optional)
          </label>
          <textarea
            name="note"
            rows={4}
            placeholder="Any special requests or questions?"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-green-700 focus:ring-green-700"
          />
        </div>

        {/* Actions */}
        <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
          >
            Send on WhatsApp
          </button>

          <a
            href="tel:+971569866636"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-50"
          >
            Call us
          </a>
        </div>
      </form>
    </div>
  );
}

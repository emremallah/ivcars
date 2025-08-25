'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What documents do I need to rent a car in Dubai?',
    a: 'For residents: a valid UAE driving license and Emirates ID. For tourists: a passport, visit visa, and a home country driving license (plus International Driving Permit if required).',
  },
  {
    q: 'Is there a minimum age to rent?',
    a: 'Yes. The minimum age is 21 years old. Some high-end cars may require the driver to be at least 25.',
  },
  {
    q: 'What is included in the rental price?',
    a: 'The daily rate includes standard mileage allowance, comprehensive insurance, and free delivery/pickup within Dubai.',
  },
  {
    q: 'How can I book a car?',
    a: 'You can book directly through WhatsApp, phone call, or by visiting our website and selecting your preferred car.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'Yes, a refundable security deposit is required. The amount depends on the selected car.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600">
          Find quick answers about our rental process, requirements, and policies.
        </p>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
        {faqs.map((item, idx) => (
          <div key={idx} className="p-4 sm:p-6">
            <button
              className="flex w-full items-center justify-between text-left text-gray-900"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-base font-semibold">{item.q}</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  openIndex === idx ? 'rotate-180 text-green-700' : 'text-gray-400'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.7.29l6 6a1 1 0 11-1.4 1.42L10 5.41 4.7 10.7a1 1 0 11-1.4-1.42l6-6A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {openIndex === idx && (
              <div className="mt-3 text-sm text-gray-700">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

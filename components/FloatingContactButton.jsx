'use client';

import { Phone, MessageCircle } from 'lucide-react'; // WhatsApp ≈ MessageCircle

const PHONE = '+971569866636';
const WHATSAPP_INTL = '971569866636';

export default function FloatingContactButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_INTL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700 transition"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Phone button */}
      <a
        href={`tel:${PHONE}`}
        className="flex items-center justify-center rounded-full bg-green-700 p-4 text-white shadow-lg hover:bg-green-800 transition"
        title="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

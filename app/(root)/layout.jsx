import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

export const metadata = {
  title: 'IV Cars – Rent Luxury Cars in Dubai',
  description: 'Luxury car rental in Dubai with competitive pricing and fast delivery.',
};

export default function RootGroupLayout({ children }) {
  return (
    <section className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <FloatingContactButton />
    </section>
  );
}

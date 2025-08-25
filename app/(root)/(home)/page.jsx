import Hero from '@/components/Hero';
import Finder from '@/components/Finder';
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  const featured = Array.isArray(cars) ? cars.slice(0, 3) : [];

  return (
    <>
      <Hero />
      <Finder />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Cars</h2>
          <a href="/cars" className="text-sm font-semibold text-green-700 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <WhyChoose />
      <Testimonials />
      <FAQ />
    </>
  );
}

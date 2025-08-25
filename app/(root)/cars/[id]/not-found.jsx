// app/(root)/cars/[id]/not-found.jsx
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6">
      <h1 className="text-2xl font-bold">Car not found</h1>
      <p className="mt-2 text-gray-600">The car you’re looking for doesn’t exist or was removed.</p>
      <a href="/cars" className="mt-6 inline-block rounded-md bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800">
        Back to Cars
      </a>
    </main>
  );
}

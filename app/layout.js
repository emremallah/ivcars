import './globals.css';

export const metadata = {
  title: 'IV Cars – Rent Luxury Cars in Dubai',
  description: 'Luxury car rental in Dubai with competitive pricing and fast delivery.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0 }}>
        <header style={{ background: '#111', padding: '1rem' }}>
          <nav style={{ display: 'flex', gap: '1rem', color: '#fff' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
        <footer style={{ background: '#111', color: '#fff', padding: '1rem', marginTop: '2rem', textAlign: 'center' }}>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Villa Roza - فيلا روزا | Luxury Interior Design',
  description: 'Premium interior design services in Jordan',
  generator: 'v0.app',
  // Optimize for fast loading
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a1a1a',
  // Preload hints for better performance
  other: {
    'preload': '/images/stone-wall-background.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      {/* Preload critical background images for faster loading */}
      <link
        rel="preload"
        as="image"
        href="/images/stone-wall-background.png"
        type="image/png"
      />
      <link
        rel="preload"
        as="image"
        href="/images/background-mobile.jpg"
        type="image/jpeg"
      />
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/images/beige-bathroom-gold-accents.jpg"
          type="image/jpeg"
        />
        <link
          rel="preload"
          as="image"
          href="/images/modern-grey-bathroom-complete.jpg"
          type="image/jpeg"
        />
        {/* Service Worker for caching */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

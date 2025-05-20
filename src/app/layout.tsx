import type { Metadata, Viewport } from 'next';

import Layout from '@/lib/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';
import { env } from 'process';

export const metadata: Metadata = {
  title: `${env.NEXT_PUBLIC_APP_NAME}`,
  description: `${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
  applicationName: `${env.NEXT_PUBLIC_APP_NAME}`,
  appleWebApp: {
    capable: true,
    title: `${env.NEXT_PUBLIC_APP_NAME}`,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://nextarter-tailwind.sznm.dev',
    title: `${env.NEXT_PUBLIC_APP_NAME}`,
    description: `${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
    images: {
      url: 'https://og-image.sznm.dev/**nextarter-tailwind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
      alt: 'nextarter-tailwind.sznm.dev og-image',
    },
  },
  twitter: {
    creator: '@agstnsnathaniel',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;

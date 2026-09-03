import type { Metadata } from 'next';
import './globals.css';
const siteBase = process.env.GITHUB_PAGES === 'true' ? '/PH-Portfolio' : '';

export const metadata: Metadata = {
  title: "Peiqi Hu's Portfolio",
  metadataBase: new URL('https://changbai-phu.github.io'),
  description: 'Practical AI applications, reliable data pipelines, and production engineering. Explore selected work and experience by Peiqi Hu.',
  icons: { icon: './favicon.svg' },
  openGraph: { title: 'Peiqi Hu — AI Applications & Data Engineer', description: 'Making data useful. Making AI practical.', type: 'website', images: [{ url: `${siteBase}/og.png`, width: 1730, height: 909, alt: 'Peiqi Hu — Making data useful. Making AI practical.' }] },
  twitter: { card: 'summary_large_image', images: [`${siteBase}/og.png`], title: 'Peiqi Hu — AI Applications & Data Engineer', description: 'Making data useful. Making AI practical.' },
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}

import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const jetBrainsMono = localFont({
  src: '../public/fonts/JETBRAINSMONO-REGULAR.ttf',
  variable: "--font-jetbrains-mono"
})

const siteUrl = "https://fisayobadina.vercel.ap"

export const metadata: Metadata = {
  title: "Fisayo Obadina",
  description: "I am Fisayo Obadina, a Full-stack developer with over 5 years of experience. I am competent with these following skills & technologies: Typescript, JavaScript, Next.js, React, Node.js, MonogDB, Postgres, etc",
  icons: {
    icon: "/pictures/Fisayo.jpg",
    shortcut: "/pictures/Fisayo.jpg",
    apple: "/pictures/Fisayo.jpg",
  },
  openGraph: {
    title: "Fisayo Obadina",
    description: "I am Fisayo Obadina, a Full-stack developer with over 5 years of experience. I am competent with these following skills & technologies: Typescript, JavaScript, Next.js, React, Node.js, MonogDB, Postgres, etc",
    url: siteUrl, 
    siteName: "Fisayo Obadina",
    images: [
      {
        url: `${siteUrl}/pictures/Fisayo.jpg`, // Put your image in /public folder
        width: 1200,
        height: 630,
        alt: "Fisayo Obadina SEO Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisayo Obadina",
    description: "I am Fisayo Obadina, a Full-stack developer with over 5 years of experience. I am competent with these following skills & technologies: Typescript, JavaScript, Next.js, React, Node.js, MonogDB, Postgres, etc",
    images: [`${siteUrl}/pictures/Fisayo.jpg`],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

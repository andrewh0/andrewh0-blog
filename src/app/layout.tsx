import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import { generateWebSiteSchema } from "lib/jsonLd";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Andrew Ho",
  description:
    "Andrew Ho is a software engineer based in the San Francisco Bay Area.",
};

export const viewport = {
  userScalable: false,
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

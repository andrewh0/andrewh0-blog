import { Metadata } from "next";
import { Providers } from "./providers";
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

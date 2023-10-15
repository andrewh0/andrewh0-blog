import { Metadata } from "next";
import { Providers } from "./providers";
import "../styles/global.css";

// TODO: Verify rendered HTML matches previous
export const metadata: Metadata = {
  title: "Andrew Ho",
  description:
    "Andrew Ho is a software engineer based in the San Francisco Bay Area.",
  viewport: {
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

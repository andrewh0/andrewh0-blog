"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme={pathname === "/sf" ? "light" : undefined}
    >
      {children}
    </ThemeProvider>
  );
}

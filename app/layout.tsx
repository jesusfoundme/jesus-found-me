import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesus Found Me",
  description: "Real stories. Real people. Real transformation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

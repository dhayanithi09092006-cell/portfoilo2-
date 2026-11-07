import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhayanithi B | AI & ML Developer",
  description: "Personal portfolio of Dhayanithi B — AI & Machine Learning student, developer and technology enthusiast."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

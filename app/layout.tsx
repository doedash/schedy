import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gradient-to-r from-slate-800 to-slate-900 text-slate-50`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            Hello
          </SignedIn>
          {children}</body>

      </html>
    </ClerkProvider>
  );
}

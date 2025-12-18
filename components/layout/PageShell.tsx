"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="flex-1 pt-20">
        {children}
      </main>
      
      <Footer />
    </>
  );
}


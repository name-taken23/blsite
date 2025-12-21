import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="flex-1 pt-20 focus:outline-none">
        {children}
      </main>
      
      <Footer />
    </>
  );
}


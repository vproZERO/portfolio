import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const MainLayout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Header />
      </header>
      <main className="bg-secondary h-full">{children}</main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

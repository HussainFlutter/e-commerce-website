import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

export default function RootLayout({ children }) {
  return (
    // <SessionWrapper>
      <html lang="en">
        <body className="flex flex-col min-h-[100vh]">
          <NavBar />
          <div className="flex-grow">
          {children}
          </div>
          <Footer />
        </body>
      </html>
    // {/* </SessionWrapper> */}
  );
}

import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}

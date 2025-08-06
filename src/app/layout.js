import { Oswald } from "next/font/google";
import "./globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Proelec Web",
  description: "Proelec Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}

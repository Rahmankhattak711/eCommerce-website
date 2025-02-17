import type { Metadata } from "next";
import { Poppins , Fraunces} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Internship Task 01",
  description: "Internship Task 01",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.className}  ${poppin.className} font-fraunces antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}


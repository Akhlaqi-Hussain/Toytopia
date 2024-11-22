// import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from "@next/font/google"

const poppins = Poppins({
  weight: ["200", "400", "700", "900"]
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Toytopia",
  description: "Delightful toys and hassle-free checkout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}

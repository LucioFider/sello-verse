import "../styles/globals.css";
import { Jura } from "@next/font/google";

const jura = Jura({
  subsets: ["latin"],
});

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
    </head>
    <body className={jura.className}>{children}</body>
  </html>
);

export default RootLayout;

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Smart Finance",
  description: "This is accessiblity website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="img/favicon.svg" sizes="any" />
      </head>

      <body>{children}</body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      />
    </html>
  );
}

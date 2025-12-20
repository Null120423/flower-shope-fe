import ToastContainer from "@/components/Plugin/toast-container";
import StaticLoadingScreen from "@/components/ui/StaticLoadingScreen";
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";

import InfoSection from "@/components/pages/home/info-section";
import { LOGO, SITE_URL } from "@/lib/data";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="g-qYu8lTTExle2xgjSpnTJTZXtIMPmAnLJOyGhhpQlE"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: SITE_URL,
            name: "Bất động sản - TP Hồ Chí Minh",
            logo: LOGO,
          })}
        </script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8RTNX8WCQX');
    `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StaticLoadingScreen />
        <ToastContainer />
        <div className="min-h-screen bg-bg-primary text-light">
          <Header />
          {children}
          <InfoSection />
          <Footer />
          {/* <FloatingContact /> */}
        </div>
      </body>
    </html>
  );
}

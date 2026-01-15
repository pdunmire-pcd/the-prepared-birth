import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: {
    default: "Birth Consultant & Childbirth Education | Seattle–Tacoma",
    template: "%s | The Prepared Birth",
  },
  description:
    "Private birth consultations and childbirth education for hospital and birth-center families in Seattle–Tacoma. Begin with a Birth Clarity Session.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

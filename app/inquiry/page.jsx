import InquiryClient from "./InquiryClient";

export const metadata = {
  title: "Inquiry - The Prepared Birth",
  description: "Start your birth preparation journey. Submit an inquiry to determine if we're a good fit for thoughtful, individualized birth education and consultation in the Puget Sound region.",
  keywords: "birth inquiry, contact birth educator, Tacoma birth support, schedule birth consultation",
  openGraph: {
    title: "Inquiry - The Prepared Birth",
    description: "Submit an inquiry for individualized birth education and consultation services.",
    url: "https://thepreparedbirth.com/inquiry",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  }
};

export default function Page() {
  return <InquiryClient />;
}
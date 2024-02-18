import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Sobre nosotros",
  keywords: [
    "about",
    "nosotros",
    "info",
    "información",
    "acerca de",
    "about us",
    "sobre",
  ],
};

const AboutPage = () => {
  return <h1 className="text-5xl">About</h1>;
};

export default AboutPage;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Pagina de contacto",
};

const ContactPage = () => {
  return <h1 className="text-5xl">Contact</h1>;
};

export default ContactPage;

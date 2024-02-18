import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina de precios",
  description: "Todos los precios de mis productos",
};

const PricingPage = () => {
  return <h1 className="text-5xl">Pricing</h1>;
};

export default PricingPage;

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Esta es la página de precios de mi servicio.",
  keywords: ["Pricing Page", "Leandro", "precios"],
};

const PricingPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">Pricing Page</span>
    </main>
  );
};

export default PricingPage;

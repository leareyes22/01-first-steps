import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ["About Page", "Leandro", "información"],
};

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">About Page</span>
    </main>
  );
};

export default AboutPage;

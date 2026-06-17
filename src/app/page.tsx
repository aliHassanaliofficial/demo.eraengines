import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Features from "./components/Features";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <ContentSection
          imageSide="right"
          badge="IDE"
          title="A Cloud IDE that thinks like a developer"
          description="Era Engines' cloud IDE comes pre-configured with linting, formatting, and AI-powered autocomplete. Open any repo in one click and start coding from any device, anywhere."
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&auto=format"
        />

        <Features />

        <Product />

        <Testimonials />

        <ContentSection
          imageSide="left"
          badge="Integrations"
          title="Plug into your dev stack"
          description="Native integrations with GitHub, GitLab, Bitbucket, VS Code, JetBrains, Slack, Jira, Linear, and 200+ other tools your team already uses every day."
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&auto=format"
        />

        <Stats />

        <FAQ />

        <CTA />

        <Pricing />
      </main>
      <Footer />
    </>
  );
}

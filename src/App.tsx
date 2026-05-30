/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Features from "./components/Features";
import PlugAndPlay from "./components/PlugAndPlay";
import ExpertsAndSecurity from "./components/ExpertsAndSecurity";
import TestimonialsAndAwards from "./components/TestimonialsAndAwards";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Features />
      <PlugAndPlay />
      <ExpertsAndSecurity />
      <TestimonialsAndAwards />
      <FooterSection />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-neon-blue/30 selection:text-white">
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}

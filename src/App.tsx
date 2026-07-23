/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Info } from './components/Info';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-gradient-brand text-white min-h-screen font-sans selection:bg-brand/30">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Info />
      </main>
      <Footer />
    </div>
  );
}


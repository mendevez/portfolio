import { useEffect } from 'react';

import Showcase from '../components/Showcase';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500});
  });
  return (
    <Layout>
      <Showcase />
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
}
import Head from "next/head";
import OurEvents from "../components/OurEvents/Index";
import AboutUs from "../components/AboutUs/Index";
import Agenda from "../components/Agenda/Index";
import AboutEvent from "../components/AboutEvent/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>IARE CONSORTIUM 2025</title>
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <OurEvents/>
        <Agenda />
      </main>
      <Footer />
    </>
  );
}

import Head from "next/head";
import Navbar from "../components/Hero/Navbar";
import Footer from "../components/Footer/Index";
import AboutUsPage from "../components/AboutUsPage/Index";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - IARE CONSORTIUM 2025</title>
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <div className="font-IBM-Plex">
        <AboutUsPage />
        <Footer />
      </div>
    </>
  );
}
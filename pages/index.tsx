import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import styles from "../styles/Home.module.css";
import Hero from "./components/Hero";
import Buttons from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greak Tech 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <div className="relative bottom-6">
        <Buttons />
      </div>
    </div>
  );
};

export default Home;

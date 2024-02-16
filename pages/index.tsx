import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel</title>
        <meta name="description" content="Travel UI/UX App for Camping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/camp.svg" />
      </Head>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
      </main>
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <Footer />
    </>
  );
}

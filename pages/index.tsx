import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel</title>
        <meta name="description" content="Travel UI/UX App for Camping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </html>
    </>
  );
}

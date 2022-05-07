import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>miyamonz activity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-height-screen px-0 py-4 flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 text-6xl">miyamonz activity</h1>
      </main>
    </div>
  );
};

export default Home;

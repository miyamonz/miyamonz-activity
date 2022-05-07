import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
  const { data } = useSWR("/api/sleep/list", fetcher);
  console.log(data);
  return (
    <div className="px-8 py-0">
      <Head>
        <title>miyamonz activity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-height-screen px-0 py-4 flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 text-6xl">miyamonz activity</h1>
        <svg>
        {data && (
          <g>
            {data.sleep.map((sleep) => (
              <line key={sleep.startTime} sleep={sleep} />
            ))}
          </g>
        )}
        </svg>
        {data && (
          <div className="flex flex-col">
            {data.sleep.map((sleep) => (
              <SleepItem key={sleep.startTime} sleep={sleep} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

const SleepItem = ({ sleep }) => {
  console.log(sleep);
  return (
    <div className="flex flex-row">
      <span>{sleep.dateOfSleep}</span>
      <span>{sleep.startTime}</span>
      <span>{sleep.endTime}</span>
    </div>
  );
};

export default Home;

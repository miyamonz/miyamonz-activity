import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
import { differenceInMinutes, format, parse, parseISO } from "date-fns";
import { groupBy } from "./groupBy";
import { SleepListResponseData } from "./api/fitbit";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data } = useSWR<SleepListResponseData>("/api/sleep/list", fetcher);
  console.log(data);
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, []);
  const grouped = groupBy(data?.sleep ?? [], (item) => item.dateOfSleep);

  if (!session || session.error) {
    return (
      <>
        not sined in
        <button onClick={() => signIn()}>sign in</button>
      </>
    );
  }
  return (
    <div className="px-8 py-0">
      <Head>
        <title>miyamonz activity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-height-screen px-0 py-4 flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 text-6xl mb-8">miyamonz activity</h1>
        {data && (
          <div className="flex flex-col w-screen">
            {Object.entries(grouped).map(([key, items]) => (
              <DateItem key={key} date={key} sleeps={items} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

const DateItem = ({
  date,
  sleeps,
}: {
  date: string;
  sleeps: SleepListResponseData["sleep"];
}) => {
  return (
    <div className="flex h-8">
      <span className="w-1/12 min-w-[8rem] text-center">{date}</span>
      <div className="flex-auto relative border-slate border-x border-y">
        {sleeps.map((sleep) => (
          <SleepItem key={sleep.startTime} sleep={sleep} />
        ))}
      </div>
    </div>
  );
};
const SleepItem: React.FC<{ sleep: SleepListResponseData["sleep"][0] }> = ({
  sleep,
}) => {
  console.log(sleep);
  const date = parse(sleep.dateOfSleep, "yyyy-MM-dd", new Date());
  const startTime = parseISO(sleep.startTime);
  const endTime = parseISO(sleep.endTime);
  const startDiff = differenceInMinutes(startTime, date);
  const duration = differenceInMinutes(endTime, startTime);
  const dayMin = 24 * 60;

  const verticalAlignInAbsolute = "top-1/2 transform -translate-y-1/2";
  return (
    <div
      className={`absolute ${verticalAlignInAbsolute} h-6 bg-slate-300 flex flex-row justify-between`}
      style={{
        left: (100 * startDiff) / dayMin + "%",
        width: (100 * duration) / dayMin + "%",
      }}
    >
      <span>{format(startTime, "HH:mm")}</span>
      <span>{format(endTime, "HH:mm")}</span>
    </div>
  );
};

export default Home;

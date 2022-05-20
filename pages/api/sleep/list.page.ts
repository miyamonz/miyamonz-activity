// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSleepList } from "../fitbit";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getSession({ req });
  console.log(session);
  const fitbitRes = await getSleepList(session.accessToken);
  const json = await fitbitRes.json();
  res.status(200).json(json);
}
export async function fetchGetSleepList(): Promise<JSON> {
  return fetch(`/api/fitbit/list`).then((res) => res.json());
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSleepList } from "../fitbit";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fitbitRes = await getSleepList();
  const json = await fitbitRes.json();
  res.status(200).json(json);
}

import { atom, useAtomValue } from "jotai";
import { SleepData } from "./SleepData";
import { client } from "./client";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div>
        <h1>miyamonz activity</h1>
        <a href="/auth">Connect with Fitbit</a>
        {/* <div id="json" data-json={JSON.stringify(json)}></div> */}
        <Suspense fallback={<div>Loading...</div>}>
          <SleepData_ />
        </Suspense>
      </div>
    </>
  );
}

const sleepAtom = atom(async () => {
  try {
    const res = await client.api.fitbit.$get();
    if (res.status === 200) {
      const json = await res.json();
      return json;
    } else {
      const json = await res.json();
      console.error(json);
      throw new Error("Failed to fetch sleep data");
    }
  } catch (error) {
    console.error(error);
    return { sleep: [], pagination: { next: null } };
  }
});
function SleepData_() {
  const json = useAtomValue(sleepAtom);
  return (
    <>
      <SleepData sleep={json.sleep} />
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </>
  );
}

export default App;

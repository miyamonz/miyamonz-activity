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
  const response = await client.api.fitbit.$get();
  return response.json();
});
function SleepData_() {
  const json = useAtomValue(sleepAtom);
  return (
    <>
      <SleepData sleep={json?.sleep} />
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </>
  );
}

export default App;

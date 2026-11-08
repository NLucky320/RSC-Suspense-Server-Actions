
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";


export default async function Home() {

  return (
    <main>
      <Suspense>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}

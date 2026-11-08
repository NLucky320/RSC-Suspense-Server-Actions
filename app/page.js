import ClientDemo from "@/components/ClientDemo";
import RSCDemo from "@/components/RSCDemo";

export default function Home() {
  return (
    <main>
      <RSCDemo />
      <ClientDemo />
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>

    </main>
  );
}

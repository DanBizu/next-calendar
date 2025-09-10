import Calendar from "@/components/calendar/calendar";
import Social from "@/components/social/social";
import Tickets from "@/components/tickets/tickets";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_1fr_20px] items-center justify-items-center min-h-screen p-8 pt-2 pb-20 gap-4 sm:p-10 sm:pt-2 font-[family-name:var(--font-geist-sans)]">
      <Tickets />
      <main className="flex">
        <Calendar className="basis-8/10" />
        <Social className="basis-2/10" />
      </main>
    </div>
  );
}

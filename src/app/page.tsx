
import { TypewriterEffect } from "@/components/typewriter-effect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from "@/components/mode-toggle";
import { EmailForm } from "@/components/popover-form";

export default function Home() {
  const words = [
    {
      text: "Something",
    },
    {
      text: "big",
    },
    {
      text: "is",
    },
    {
      text: "coming",
    },
    {
      text: "soon.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <div className="p-2">
        <ModeToggle></ModeToggle>
      </div>
      <main className="flex flex-col items-center justify-center h-[40rem] ">
        <h1>JHEC</h1>
        <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
          Embrace your inner chaos
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <Popover>
            <PopoverTrigger asChild>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Notify Me
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <EmailForm></EmailForm>
            </PopoverContent>
          </Popover>
        </div>
      </main>
    </div>
  );
}

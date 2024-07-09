"use client"
import { TypewriterEffect } from "@/components/typewriter-effect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Join waiting list</Button>
      </form>
    </Form>
  )
}


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

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useRouter } from "next/navigation";

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
import { useMutation } from "@tanstack/react-query"
import { LooplaEvent } from "../api/events/mockData"
import { createEvent } from "../helpers/hooks/api"

const emojiAtEndRegex = /\p{Emoji}+$/u;
const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

const FormSchema = z.object({
  title: z.string().regex(
    emojiAtEndRegex,
    "String must end with at least one emoji"
  ),
  description: z.string().optional(),
  date: z.string().regex(dateRegex,
    "Must be a valid date in DD-MM-YYYY format"
  ),
  location: z.string().refine(
    (val) => val === val.toUpperCase(),
    "String must be uppercase"
  ),
})
 const CreateEvent = () => {
  const router = useRouter();

  const createEventMutation = useMutation({
    mutationFn: async (
      event: LooplaEvent) => await createEvent(event),
      onSuccess: (data) => {
        router.push("/");
      },
  });  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      location: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    createEventMutation.mutate(data)
  }

  return (
    <div className="flex flex-col items-center gap-6 mt-10">

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default CreateEvent
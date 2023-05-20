"use client"

import React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function Events({ events }: any) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mt-12 h-[362px] w-fit rounded-md border"
      />

      <pre className="whitespace-pre-line">
        {/* {JSON.stringify(events?.data.items)} */}
      </pre>
    </>
  )
}

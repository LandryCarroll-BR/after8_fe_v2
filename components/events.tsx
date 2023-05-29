"use client"

import React from "react"
import Link from "next/link"

import { Calendar } from "@/components/ui/calendar"

import { buttonVariants } from "./ui/button"

export default function Events({ events }: any) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="mx-auto hidden flex-col justify-center gap-3 lg:mx-0 lg:flex">
        <Link
          href={"/contact"}
          className={buttonVariants({
            size: "sm",
            variant: "secondary",
            className: "font-bold",
          })}
        >
          Booking Info
        </Link>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-fit rounded-md border"
        />
      </div>

      <pre className="whitespace-pre-line">
        {/* {JSON.stringify(events?.data.items)} */}
      </pre>
    </>
  )
}

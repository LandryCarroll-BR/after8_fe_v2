import { google } from "googleapis"

import Events from "@/components/events"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
})

const params = {
  calendarId: "after8booking@gmail.com",
}

async function getEvents(params: { calendarId: string }) {
  try {
    const res = await calendar.events.list({
      calendarId: params.calendarId,
      prettyPrint: true,
      // timeMin: new Date().toDateString(),
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export default async function SongPage() {
  const res = await getEvents(params)
  const items = res?.data?.items
  const events = items?.map((item) => {
    return {
      id: item?.id,
      summary: item?.summary,
      start: item?.start?.dateTime,
      end: item?.end?.dateTime,
      location: item?.location,
      link: item?.htmlLink,
    }
  }) || [
    {
      id: "",
      summary: "",
      start: "",
      end: "",
      location: "",
      link: "",
    },
  ]

  return (
    <section className="container">
      <div className="flex items-start justify-center gap-6">
        <DataTable data={events} columns={columns} />
        <Events events={events} />
      </div>
    </section>
  )
}

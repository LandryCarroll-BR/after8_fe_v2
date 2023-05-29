import Link from "next/link"
import { google } from "googleapis"

import { fetchAPI } from "@/lib/api"
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

const EVENTS_TEMPLATE_FIELDS = `
  upcomingEvents {
    featuredEvents {
      address
      bgImage {
        sourceUrl
      }
      calendarLink {
        url
      }
      date
      title
    }
  }
`

const GET_PAGE_DATA = `
  query getPageData($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        template {
          ... on Template_UpcomingEvents {
            ${EVENTS_TEMPLATE_FIELDS}
          }
        }
        content
      }
    }
  }
`

async function getPageTemplateData(uri: string) {
  const data = await fetchAPI(GET_PAGE_DATA, { variables: { uri } })
  return data?.nodeByUri.template.upcomingEvents
}

export default async function ShowsPage() {
  const featuredEvents = getPageTemplateData("/upcoming-events")

  console.log({ featuredEvents })

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
    <section className="container my-16">
      <h1 className="mb-8 text-center  text-5xl font-bold">Upcoming Shows</h1>
      <p className="mx-auto mb-6 max-w-md text-center">
        Check out when our and where our next show is going to be. If you have
        any questions feel free to{" "}
        <Link
          href={"/contact"}
          className="font-bold text-primary hover:underline"
        >
          contact us
        </Link>
        .
      </p>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start">
        <DataTable data={events} columns={columns} />

        <Events events={events} />
      </div>
    </section>
  )
}

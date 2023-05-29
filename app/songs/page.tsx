import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { songschema } from "./data/schema"

export const metadata: Metadata = {
  title: "songs",
  description: "A song and issue tracker build using Tanstack Table.",
}

// Simulate a database read for songs.
async function getsongs() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/songs/data/songs.json")
  )

  const songs = JSON.parse(data.toString())

  return z.array(songschema).parse(songs)
}

export default async function SongPage() {
  const songs = await getsongs()

  return (
    <section className="container my-16">
      <h1 className="mb-8 text-center  text-5xl font-bold">After8 Song List</h1>
      <p className="mx-auto mb-6 max-w-md text-center">Updated Monthly!</p>

      <DataTable data={songs} columns={columns} />
    </section>
  )
}

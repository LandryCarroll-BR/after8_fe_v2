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
    <section className="container">
      <div className="flex h-full flex-1 flex-col space-y-8 py-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              After 8 Song List
            </h2>
            <p className="text-muted-foreground">Updated monthly!</p>
          </div>
        </div>
        <DataTable data={songs} columns={columns} />
      </div>
    </section>
  )
}

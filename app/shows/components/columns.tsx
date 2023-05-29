"use client"

import { ColumnDef } from "@tanstack/react-table"

import { event } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<event>[] = [
  {
    accessorKey: "summary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" className="" />
    ),
    cell: ({ row }) => <div className="w-36">{row.getValue("summary")}</div>,
    enableSorting: true,
    enableHiding: false,
    enableColumnFilter: true,
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" className="" />
    ),
    cell: ({ row }) => <div className="w-48">{row.getValue("location")}</div>,
    enableSorting: true,
    enableHiding: true,
    enableColumnFilter: true,
  },

  {
    accessorKey: "start",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Time" className="" />
    ),
    cell: ({ row }) => {
      if (row.getValue("start")) {
        const startTime = new Date(row.getValue("start")).toLocaleString()
        return <div className="w-48">{startTime}</div>
      }
    },
    enableSorting: true,
    enableHiding: true,
    enableColumnFilter: true,
  },
]

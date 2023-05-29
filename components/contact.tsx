import { redirect } from "next/navigation"

import { fetchAPI } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "./ui/textarea"

const SUBMIT_FORM = `
  mutation SubmitForm($databaseId: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: { id: $databaseId, fieldValues: $fieldValues }) {
      confirmation {
        message
      }
      errors {
        id
        message
      }
    }
  }
`

export function ContactForm() {
  async function onSubmit(formData: FormData) {
    "use server"
    const first = formData.get("first-name")
    const last = formData.get("last-name")
    const email = formData.get("email")
    const message = formData.get("message")

    try {
      fetchAPI(SUBMIT_FORM, {
        variables: {
          databaseId: 1,
          fieldValues: [
            {
              id: 1,
              nameValues: {
                first,
                last,
              },
            },
            {
              id: 2,
              emailValues: {
                value: email,
              },
            },
            {
              id: 4,
              value: message,
            },
          ],
        },
      })

      redirect("/")
    } catch {
      alert(
        "Looks like something went wrong. Please try contacting us again later!"
      )
    }
  }

  return (
    <div className="container my-16 font-sans">
      <h1 className="mb-8 text-center  text-5xl font-bold">Contact Us</h1>
      <p className="mb-6 text-center">
        Interested in having us at your event? Drop us a line!
      </p>
      <form action={onSubmit} className="mx-auto space-y-6 lg:max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <Label>First Name</Label>
            <Input required name="first-name" placeholder="Taylor" />
          </div>

          <div className="flex-1">
            <Label>Last Name</Label>
            <Input required name="last-name" placeholder="Swift" />
          </div>
        </div>

        <div>
          <Label>Email</Label>
          <Input
            required
            name="email"
            type="email"
            placeholder="address@email.com"
          />
        </div>

        <div>
          <Label>Message</Label>
          <Textarea name="message" placeholder="Enter your message here." />
        </div>
        <Button className={"font-bold uppercase"} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fetchAPI } from "@/lib/api"
import { fontCaxton, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const GET_PAGE_DATA = `
  query getPageData($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        seo {
          fullHead
        }
        content
      }
    }
  }
`

async function getPageTemplateData(uri: string) {
  const data = await fetchAPI(GET_PAGE_DATA, {
    variables: { uri },
  })
  return data?.nodeByUri.seo
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const seo = await getPageTemplateData("/")
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head dangerouslySetInnerHTML={{ __html: seo?.fullHead }} />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontCaxton.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 tracking-wide">{children}</div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

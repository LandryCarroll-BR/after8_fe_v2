import Image from "next/image"
import Link from "next/link"

import { fetchAPI } from "@/lib/api"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const HOME_TEMPLATE_FIELDS = `
  home {
    hero {
      headingLine1
      headingLine2
      bgImageDesktop {
        sourceUrl
      }
      bgImageMobile {
        sourceUrl
      }
      blurb
      cta {
        title
        url
      }
    }
    content1 {
      blurb
      heading
      image1 {
        sourceUrl
      }
      image2 {
        sourceUrl
      }
      image3 {
        sourceUrl
      }
      cta {
        title
        url
      }
    }
    awards {
      body
      fieldGroupName
      heading
      awardLogos {
        image {
          sourceUrl
        }
      }
    }
    cta {
      heading
      bgImage {
        sourceUrl
      }
      button {
        title
        url
      }
    }
  }
`

const GET_PAGE_DATA = `
  query getPageData($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        template {
          templateName
          ... on Template_Home {
            ${HOME_TEMPLATE_FIELDS}
          }
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
  return data?.nodeByUri.template.home
}

export default async function IndexPage() {
  const data = await getPageTemplateData("/")
  const { hero, content1, awards, cta } = data
  console.log({ data, GET_PAGE_DATA })
  return (
    <>
      <section className="container relative flex h-[80vh] flex-col gap-6 pb-8 pt-6 md:py-10">
        <div className="mt-auto flex flex-col items-end gap-2">
          <h1 className="text-right font-display text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl">
            {hero.headingLine1}
            <br className="" />
            <span className="text-primary">{hero.headingLine2}</span>
          </h1>
        </div>
        <div className="flex flex-col items-end justify-end gap-4 md:flex-row">
          <Link href={"#"} className={buttonVariants({ size: "xl" })}>
            {hero.cta.title}
          </Link>
        </div>

        <Image
          src={hero.bgImageDesktop.sourceUrl}
          className="absolute right-0 top-0 -z-10 hidden object-cover mix-blend-lighten md:block"
          fill
          alt=""
        />

        <Image
          src={hero.bgImageMobile.sourceUrl}
          className="absolute right-0 top-0 -z-10 block object-cover mix-blend-lighten md:hidden"
          fill
          alt=""
        />
      </section>

      <section className="my-16 md:my-28">
        <div className="container">
          <h2 className="z-10 mb-10 font-display text-2xl tracking-tighter sm:text-3xl md:text-4xl lg:text-4xl">
            {content1?.heading}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative aspect-video h-full w-full">
              <Image
                loading="lazy"
                src={content1?.image1?.sourceUrl}
                className="border-accent-600 h-full w-full rounded border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative aspect-video h-full w-full">
              <Image
                loading="lazy"
                src={content1?.image2?.sourceUrl}
                className="border-accent-600 h-full w-full rounded-md border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative hidden aspect-video h-full w-full md:block">
              <Image
                loading="lazy"
                src={content1?.image3?.sourceUrl}
                className="border-accent-600 h-full w-full rounded-md border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative flex aspect-video h-full w-full flex-col justify-center gap-5">
              <p>
                After 8 has spent the last two decades bringing the party and
                curating memories with newlyweds, corporate parties, and
                socialites of all kinds.
              </p>
              <Link href={"#"} className={buttonVariants({ size: "xl" })}>
                About Us
              </Link>
            </div>

            <div className="relative aspect-video h-full w-full">
              <Image
                loading="lazy"
                src={content1?.image1?.sourceUrl}
                className="border-accent-600 h-full w-full rounded border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative hidden aspect-video h-full w-full md:block">
              <Image
                loading="lazy"
                src={content1?.image2?.sourceUrl}
                className="border-accent-600 h-full w-full rounded border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative hidden aspect-video h-full w-full md:block">
              <Image
                loading="lazy"
                src={content1?.image3?.sourceUrl}
                className="border-accent-600 h-full w-full rounded border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative hidden aspect-video h-full w-full md:block">
              <Image
                loading="lazy"
                src={content1?.image2?.sourceUrl}
                className="border-accent-600 h-full w-full rounded border object-cover object-center mix-blend-lighten md:rounded-none"
                fill
                alt=""
              />
            </div>

            <div className="relative flex aspect-video h-full w-full flex-col justify-center gap-5">
              <p>
                After 8 has spent the last two decades bringing the party and
                curating memories with newlyweds, corporate parties, and
                socialites of all kinds.
              </p>
              <Link
                href={"/songs"}
                className={buttonVariants({ size: "xl", variant: "outline" })}
              >
                Our Song List
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          <Card>
            {/* <AwardIcon /> */}
            <CardHeader className="text-3xl font-bold">
              After 8 Weddings
            </CardHeader>
            <CardContent>
              <p>
                After 8 has spent the last two decades bringing the party and
                curating memories with newlyweds, corporate parties, and
                socialites of all kinds.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
              <p className="mr-auto">Check out our wedding profiles!</p>
              <div className="mr-auto flex flex-1 gap-5">
                <Link
                  href={
                    "https://www.theknot.com/marketplace/after-8-band-new-orleans-la-661616"
                  }
                  className={buttonVariants({ variant: "secondary" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Knot
                </Link>
                <Link
                  href={
                    "https://www.weddingwire.com/biz/after-8-band-baton-rouge/5a73f78cef5afceb.html"
                  }
                  className={buttonVariants({ variant: "secondary" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wedding Wire
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-4 gap-3 md:border-y md:py-8">
            {awards?.awardLogos?.map((node: any) => (
              <Image
                loading="lazy"
                src={node.image.sourceUrl}
                width="120"
                height="120"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      <section className=" relative my-16 flex flex-col items-center justify-center overflow-hidden pb-16 pt-36">
        <div className="container">
          <div className="relative mt-36 flex flex-col items-center justify-center gap-7">
            <h2 className="font-display text-2xl tracking-tighter sm:text-3xl md:text-4xl lg:text-6xl">
              {cta.heading}
            </h2>

            <Link
              href={"#"}
              className={buttonVariants({ size: "2xl", variant: "outline" })}
            >
              {cta.button.title}
            </Link>
          </div>
          <Image
            src={cta.bgImage?.sourceUrl}
            className="absolute right-0 top-0 -z-10 object-cover mix-blend-lighten"
            fill
            sizes="100vw"
            alt=""
          />
        </div>
      </section>
    </>
  )
}

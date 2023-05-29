import Image from "next/image"
import Link from "next/link"

import { fetchAPI } from "@/lib/api"
import { buttonVariants } from "@/components/ui/button"

const ABOUT_TEMPLATE_FIELDS = `
  about {
    hero {
      body
      headingLine1
      headingLine2
      image1 {
        sourceUrl
      }
      image2 {
        sourceUrl
      }
      image3 {
        sourceUrl
      }
    }
    cta {
      body
      button {
        title
        url
      }
      heading
      imageDesktop {
        sourceUrl
      }
    }
    content1 {
      body
      heading
    }
    calloutBox {
      body
      heading
      link {
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
          ... on Template_About {
            ${ABOUT_TEMPLATE_FIELDS}
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
  return data?.nodeByUri.template.about
}

export default async function IndexPage() {
  const data = await getPageTemplateData("about")
  const { hero, content1, calloutBox, cta } = data
  return (
    <>
      <section className="relative">
        <div className="container my-16 grid grid-cols-1 gap-8 lg:my-28 lg:grid-cols-2">
          <div className="">
            <h1 className="leading-tightest tracking-tightest mb-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">{hero.headingLine1}</span>
              <br />
              <span className="text-primary">{hero.headingLine2}</span>
            </h1>

            <p className="mb-16 max-w-md font-sans text-primary">{hero.body}</p>

            <Image
              src={hero.image1?.sourceUrl}
              className="mix-blend-lighten lg:translate-x-48"
              width="600"
              height="260"
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              src={hero.image2?.sourceUrl}
              className="hidden pr-28 mix-blend-lighten lg:block"
              width="624"
              height="980"
              alt=""
            />

            <Image
              src={hero.image3?.sourceUrl}
              className="absolute -right-0 top-20 hidden lg:block"
              width="350"
              height="191"
              alt=""
            />
          </div>
        </div>

        <div className="absolute left-0 top-52 -ml-1/2 scale-75 object-contain lg:-ml-1/4 lg:scale-100">
          <Number8SVG />
        </div>
      </section>

      <section className="container xl:-mt-36">
        <div className="my-16 flex flex-col gap-6 lg:my-28 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-8 font-display text-3xl text-primary md:text-4xl lg:text-5xl">
              {content1.heading}
            </h2>
            <div
              className="font-sans text-primary"
              dangerouslySetInnerHTML={{ __html: content1.body }}
            />
          </div>

          <div className="mt-auto flex flex-1 flex-col border text-center">
            <h3
              className="flex items-center justify-center bg-primary p-8 font-sans font-bold uppercase text-primary-foreground"
              dangerouslySetInnerHTML={{ __html: calloutBox.heading }}
            />
            <div className="p-8 font-sans text-gray-100">
              <div
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: calloutBox.body }}
              />
              <Link href={"/songs"} className={buttonVariants({ size: "xl" })}>
                {calloutBox.link.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative my-16 flex flex-col items-center justify-center overflow-hidden pb-16 pt-36 text-center">
        <div className="container">
          <div className="relative mt-36 flex flex-col items-center justify-center gap-7">
            <h2 className="tracking-tightest text-right font-display text-3xl text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {cta.heading}
            </h2>

            <div className="max-w-lg font-sans text-primary">{cta.body}</div>

            <Link
              href={cta.button.url}
              className={buttonVariants({
                size: "2xl",
                variant: "outline",
                className: "hover:bg-primary hover:text-primary-foreground",
              })}
            >
              {cta.button.title}
            </Link>
          </div>
          <Image
            src={cta.imageDesktop?.sourceUrl}
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

function Number8SVG() {
  return (
    <svg width="826.488" height="1266.968" viewBox="0 0 826.488 1266.968">
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="826.488"
            height="1266.968"
            fill="#d3a5d0"
          />
        </clipPath>
      </defs>
      <g id="Group_20" data-name="Group 20" opacity="0.026">
        <g id="Group_19" data-name="Group 19" clipPath="url(#clip-path)">
          <path
            id="Path_20"
            data-name="Path 20"
            d="M724.716,669.457c-22.923-23.512-50.753-42.717-77.174-64.667,174.7-129.867,173.09-367.8,32.414-501.864C608.09,34.448,512.3,0,415.576,0c-93.5,0-187.889,32.238-262.209,97.1C8.871,223.228-2.39,475.456,180.03,606.2c-5.349,4.039-10.577,7.621-15.4,11.623-23.124,19.168-48.1,36.735-68.81,58C-38.3,813.538-30.541,1026.668,112.307,1153.829c83.609,74.422,191.831,113.139,301.379,113.139a460.644,460.644,0,0,0,205.5-48.205c225.894-112.529,276.485-373.749,105.527-549.306M416.5,159.667c1.528,0,3.056.038,4.625.076,102.591,1.905,182.3,83.72,179.685,184.436-2.654,102.659-82.4,179.787-184.873,179.787-1.528,0-3.056,0-4.585-.038-108.422-2.4-188.01-81.815-185.637-185.16,2.453-105.479,81.2-179.1,190.785-179.1m-3.338,945.424h-.885c-123.825-.419-221.269-92.218-219.942-207.109,1.327-114.777,99.012-206.423,219.379-206.423.8,0,1.609.038,2.413.038,123.141,1.258,220.424,93.209,220.062,208.1-.362,115.158-97.524,205.394-221.027,205.394"
            transform="translate(0.001 0)"
            fill="#d3a5d0"
          />
        </g>
      </g>
    </svg>
  )
}

import Head from "next/head";

export default ({
  title = "SandyHacks",
  description = "An all-day hackathon for students across San Diego.",
  image = "https://sandyhacks.org/static/sandy_hacks_header_divider.svg", //idk really what's supposed to go here but angelhacks linked to a broken url of their banner, so i've one-upped them with a working url of ours
  url = "https://sandyhacks.org",
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={"https://sandyhacks.org"} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SandyHacks" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <link rel="icon" type="image/png" href="/static/favicon.png" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "sandyhacks",
          url: "https://sandyhacks.org",
          logo: "https://sandyhacks.org/static/logo.svg",
          sameAs: [
            //insert links to social media here in '', '', format
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "team@sandyhacks.org",
              contactType: "customer support",
              url: "https://sandyhacks.org",
            },
          ],
        }),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org/",
          "@type": "Event",
          name: "SandyHacks",
          startDate: "2023-04-08T9:00",
          endDate: "2023-04-08T21:00",
          description:
            "Register today for 12 hours of coding, fun, free food, and prizes, held April 8th 2023 from 9 AM to 9 PM. Open to students of all experience levels ages 13-18.",
          isAccessibleForFree: true,
          url: "https://sandyhacks.org",
          image: "https://sandyhacks.org/static/sandyhacks_logo_yellow.png",
          location: {
            "@type": "Place",
            name: "Ansir Cowork",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              postalCode: "92111",
              streetAddress: "7670 Opportunity Rd., #255 San Diego",
            },
          },
          sponsor: {
            "@type": "Organization",
            name: "Hack Club",
            url: "https://hackclub.com",
          },
          offers: {
            "@type": "Offer",
            name: "Free Admission",
            url: "https://sandyhacks.com",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            validFrom: "2023-01-01",
            validThrough: "2023-04-08", //unless it's delayed in which case change this
          },
          performer: {
            "@type": "PerformingGroup",
            name: "Sandy Hacks And The Amazing Technicolor Team",
          },
        }),
      }}
    />
  </Head>
);

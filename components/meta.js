import Head from 'next/head'

export default ({
  title = 'SandyHacks',
  description = 'An all-day hackathon for students across San Diego.',
  image = 'https://sandyhacks.org/static/sandy_hacks_header_divider.svg', //idk really what's supposed to go here but sandyhacks linked to a broken url of their banner, so i've one-upped them with a working url of ours
  url = 'https://sandyhacks.org'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={'https://sandyhacks.org'} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SandyHacks" />
    <meta name="twitter:site" content="@twitterhandle" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'sandyhacks',
          url: 'https://sandyhacks.org',
          logo: 'https://sandyhacks.org/static/logo.svg',
          sameAs: [
            //insert links to social media here in '', '', format
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'team@sandyhacks.org',
              contactType: 'customer support',
              url: 'https://sandyhacks.org'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'SandyHacks',
          startDate: '2023-02-04T9:00',
          endDate: '2023-02-04T18:00',
          description:
            'Register today for 9 hours of coding, fun, free food, and prizes, held Feburary 4th 2023 from 9 AM to 6 PM. Open to students of all experience levels ages 13-18.',
          isAccessibleForFree: true,
          url: 'https://sandyhacks.org',
          image: 'https://sandyhacks.org/static/logo.svg',
          location: {
            '@type': 'Place',
            name: 'TBA', //GOTTA ADD THIS ONCE THE VENUE IS DECIDED ;A; <---- <---- DONT FORGET!!
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'San Diego',
              addressRegion: 'CA',
              postalCode: 'TBA',
              streetAddress: 'TBA'
            }
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://sandyhacks.com',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2023-01-01',
            validThrough: '2019-02-04' //unless it's delayed in which case change this
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'Sandy Hacks And The Amazing Technicolor Team'
          }
        })
      }}
    />
  </Head>
)

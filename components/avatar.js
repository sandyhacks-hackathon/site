import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://sandyhacks.org">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src="/static/sandyhacks_logo_yellow.png"
        alt="Sandy Hacks avatar"
        width={size}
        height={size}
        sx={{
          ...props.sx
        }}
      />
    </A>
  </Link>
)

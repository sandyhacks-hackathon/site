import { Box, Flex, Text, Link as A } from "rebass";
import { useColorMode } from "theme-ui";
import Link from "next/link";
import Icon from "./icon";
import Avatar from "./avatar";

const ColorButton = ({ mode, sx, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "inherit",
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ":hover, :focus": {
        color: "primary",
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
      ...sx,
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
    </svg>
  </Box>
);

export default (props) => {
  const [mode, setMode] = useColorMode();

  return (
    <>
      <Flex
        as="header"
        variant="container"
        sx={{
          color: "primary",
          alignItems: "center",
          px: 1,
          py: 3,
        }}
      >
        <Avatar light size={40} sx={{ mr: 1 }} />
        <Link href="/">
          <A
            variant="styles.navitem"
            sx={{ display: ["none", "block"], fontWeight: "mediumbold" }}
          >
            Sandy Hacks
          </A>
        </Link>
        <Box sx={{ mx: "auto" }} />
        <A
          href="https://airtable.com/shrya40Trxq3m2A8J"
          variant="styles.navitem"
        >
          Register
        </A>
      </Flex>
      <Box
        as="main"
        sx={{
          width: "100%",
          mx: "auto",
          flex: "1 1 auto",
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: "100%",
          maxWidth: "wide",
          mx: "auto",
        }}
      >
        <Box
          variant="container"
          sx={{
            fontSize: 0,
            py: 3,
          }}
        >
          <Flex sx={{ justifyContent: "center" }}>
            <A
              href="https://instagram.com/sandyhacks.sd"
              title="Instagram"
              sx={{ mx: 2 }}
            >
              <Icon glyph="instagram" size={36} />
            </A>
            <A
              href="https://github.com/sandyhacks-hackathon/site"
              title="GitHub"
              sx={{ mx: 2 }}
            >
              <Icon glyph="github" size={36} />
            </A>
            <A href="mailto:team@sandyhacks.org" title="Email" sx={{ mx: 2 }}>
              <Icon glyph="email" size={36} />
            </A>
          </Flex>
          <Box
            sx={{
              mt: [3, 4],
              textAlign: "center",
              a: { fontSize: 1 },
            }}
          >
            <Text sx={{ fontFamily: "heading", fontSize: 0, color: "inherit" }}>
              Sandy Hacks
            </Text>
            <Text
              sx={{
                color: "muted",
                fontSize: 0,
                mt: 1,
                mb: 0,
              }}
            >
              Fiscally sponsored by The Hack Foundation.
              <br />
              Nonprofit EIN: 81-2908499.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

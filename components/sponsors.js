import React from "react";
import styled from "@emotion/styled";
import { Box } from "rebass";
import { Container } from "./blocks";
import { useColorMode } from "theme-ui";
import theme from "./theme";

const data = {
  sponsors: [
    {
      name: "SoftStack Factory",
      link: "https://softstackfactory.com/",
      image: "../static/soft_stack_factory.png",
    },
    {
      name: "Hack Club Bank",
      link: "https://hackclub.com/bank",
      image:
        "https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206",
    },
    {
      name: "Digital Ocean",
      link: "https://digitalocean.com",
      image: "../static/DO_Logo_horizontal_blue.svg",
    },
    {
      name: "Taskade",
      link: "https://taskade.com",
      image: "../static/logo_taskade_white.png",
    },
  ],
};

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => (props.section === "sponsors" ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${(props) => (props.section === "sponsors" ? 6 : 4)}rem;
  }
`;

const Sponsors = ({ section = "sponsors", ...props }) => {
  const [colorMode] = useColorMode();
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map((sponsor) => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  );
};

export default Sponsors;

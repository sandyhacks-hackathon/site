import { Box, Text, Image } from "rebass";
import { useColorMode } from "theme-ui";
import theme from "./theme";

const RegistrationForm = () => {
  return (
    <div style={{ height: "80vh" }}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrya40Trxq3m2A8J?backgroundColor=yellow"
        frameBorder="0"
        onMouseWheel=""
        width="100%"
        height="100%"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
};

export default RegistrationForm;

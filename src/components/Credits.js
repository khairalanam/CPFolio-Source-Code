import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Credits = () => {
  return (
    <Box className="credits-section">
      <h3>Credits by Team SAKA</h3>
      <Stack pl={"2em"}>
        <Text>
          <b>S</b>eersha Samikshya
        </Text>
        <Text>
          <b>A</b>rabinda Malik
        </Text>
        <Text>
          <b>K</b>hair Alanam
        </Text>
        <Text>
          <b>A</b>nushrey Jain
        </Text>
      </Stack>
    </Box>
  );
};

export default Credits;

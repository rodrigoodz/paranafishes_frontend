import React, { useState } from "react";
import { ChakraProvider, Box, Grid, Icon, Tooltip } from "@chakra-ui/react";
import FishList from "./components/FishList";
import AddFish from "./components/AddFish";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <ChakraProvider>
      <Grid
        bg="#34495e"
        templateColumns={
          open
            ? ["100%", "100%", "100%", "25% 75%"]
            : ["100%", "100%", "100%", "100%"]
        }
        width="full"
      >
        <Tooltip
          label="Añadir una nueva especie"
          fontSize="md"
          isDisabled={open}
        >
          <Icon
            as={open ? ArrowLeftIcon : ArrowRightIcon}
            position="absolute"
            fontSize="2xl"
            color={open ? "black" : "white"}
            m="2"
            borderRadius="xs"
            onClick={() => setOpen(!open)}
          />
        </Tooltip>
        <Box height="100vh" bg="#f5f6fa" display={open ? "block" : "none"}>
          <AddFish />
        </Box>

        <Box height="100vh" bg="#34495e" overflowY="scroll" ml="6">
          <FishList />
        </Box>
      </Grid>
    </ChakraProvider>
  );
};

export default App;

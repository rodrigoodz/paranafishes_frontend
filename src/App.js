import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import FishList from "./components/FishList";
import AddFish from "./components/AddFish";

const App = () => {
  return (
    <ChakraProvider>
      <Box
        bg="#34495e"
        height="100vh"
        display="flex"
        width="100wh"
        overflow="hidden"
      >
        <AddFish />
        <FishList />
      </Box>
    </ChakraProvider>
  );
};

export default App;

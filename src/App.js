import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import FishList from "./components/FishList";
import AddFish from "./components/AddFish";

const App = () => {
  return (
    <ChakraProvider>
      <Flex
        bg="#34495e"
        min-height="100vh"
        display="flex"
        width="100wh"
        direction={["column", "column", "column", "row"]}
      >
        <AddFish />
        <FishList />
      </Flex>
    </ChakraProvider>
  );
};

export default App;

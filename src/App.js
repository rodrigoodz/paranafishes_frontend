import React from "react";
import { ChakraProvider, Box, Grid } from "@chakra-ui/react";
import FishList from "./components/FishList";
import AddFish from "./components/AddFish";

const App = () => {
  return (
    <ChakraProvider>
      <Grid bg="#34495e" templateColumns={["100%", "100%", "100%", "30% 70%"]}>
        <Box min-height="100vh" bg="#f5f6fa">
          <AddFish />
        </Box>
        <Box height="100vh" bg="#34495e">
          <FishList />
        </Box>
      </Grid>
    </ChakraProvider>
  );
};

export default App;

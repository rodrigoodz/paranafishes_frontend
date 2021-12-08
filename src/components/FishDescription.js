import { Image } from "@chakra-ui/image";
import { Text, Box, Center, Stack } from "@chakra-ui/layout";
import React from "react";

const FishDescription = ({ fishData }) => {
  // const [loading, setLoading] = useState(true);

  // const handleLoad = () => {
  //   setLoading(false);
  // };

  return (
    <Box
      display="flex"
      bg="#2c3e50"
      p="4"
      borderRadius="2xl"
      my="4"
      textColor="white"
    >
      <Center>
        {fishData.imageName && (
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/paranafishes.appspot.com/o/${fishData.imageName}.png?alt=media`}
            alt="Dan Abramov"
          />
        )}
      </Center>
      <Box px="4" py="2">
        {fishData.scientificName && (
          <Stack direction="row">
            <Text fontWeight="bold" fontSize={["xs", "sm", "md", "xl"]}>
              Nombre Cientifico:
            </Text>
            <Text fontSize={["xs", "sm", "md", "xl"]}>
              {fishData.scientificName}
            </Text>
          </Stack>
        )}
        {fishData.order && (
          <Stack direction="row">
            <Text fontWeight="bold" fontSize={["xs", "sm", "md", "lg"]}>
              Orden:
            </Text>
            <Text fontSize={["xs", "sm", "md", "lg"]}>{fishData.order}</Text>
          </Stack>
        )}
        <Stack direction="row">
          <Text fontWeight="bold" fontSize={["xs", "sm", "md", "2md"]}>
            Nombres comunes:
          </Text>

          {fishData.commonName && (
            <Box
              bg="blue.700"
              width="max-content"
              borderRadius="lg"
              px="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={["xs", "sm", "md", "2md"]}>
                {fishData.commonName.join(",")}
              </Text>
            </Box>
          )}
        </Stack>

        {fishData.family && (
          <Stack direction="row">
            <Text fontWeight="bold" fontSize={["xs", "sm", "md", "2md"]}>
              Familia:
            </Text>
            <Text fontSize={["xs", "sm", "md", "2md"]}>{fishData.family}</Text>
          </Stack>
        )}
        {fishData.description && (
          <Stack direction="row">
            <Text fontWeight="bold" fontSize={["xs", "sm", "md", "2md"]}>
              Descripción:
            </Text>
            <Text fontStyle="italic" fontSize={["xs", "sm", "md", "2md"]}>
              {fishData.description}
            </Text>
          </Stack>
        )}
        {fishData.distinctiveChar && (
          <Stack direction="row">
            <Text fontWeight="bold" fontSize={["xs", "sm", "md", "2md"]}>
              Caracteristica distintiva:
            </Text>
            <Text fontStyle="italic" fontSize={["xs", "sm", "md", "2md"]}>
              {fishData.distinctiveChar}
            </Text>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default FishDescription;

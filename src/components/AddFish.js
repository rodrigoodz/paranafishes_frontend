import React, { useState } from "react";
import {
  Box,
  Text,
  Select,
  Divider,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";
import FishInput from "./FishInput";
import swal from "sweetalert";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const AddFish = () => {
  const [fishData, setFishData] = useState({
    family: "",
    imageName: "",
    scientificName: "",
    commonName: ["", "", ""],
    description: "",
    distinctiveChar: "",
  });

  const handleScientificNameInput = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, scientificName: value });
  };

  const handleCommonNameInput = (e) => {
    // tomo el numbero del name
    const number = Number(e.target.name.substring(10, 12));
    // actualizo estado modificando commonName (uso map para modificar donde
    // index coinicide y el resto lo dejo como estaba)
    setFishData({
      ...fishData,
      commonName: fishData.commonName.map((d, index) => {
        if (index === number) {
          return e.target.value;
        } else {
          return d;
        }
      }),
    });
  };

  const handleSelect = (e) => {
    setFishData({ ...fishData, family: e.target.value });
  };

  const handleImageName = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, imageName: value });
  };

  const handleDescription = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, description: value });
  };

  const handleDistinctiveCharacteristic = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, distinctiveChar: value });
  };

  const handleClick = async () => {
    const { scientificName, family, description } = fishData;
    if (
      scientificName.length === 0 ||
      family.length === 0 ||
      description.length === 0
    ) {
      swal({
        title: "Error!",
        text: `Completá todos los datos necesarios 
        (nombre cientifico, familia y descripcion)`,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    } else {
      await setDoc(doc(db, "fishes", fishData.scientificName), fishData);

      // swal({
      //   title: "Confirmado!",
      //   text: `Datos añadidos con exito`,
      //   icon: "success",
      //   buttons: false,
      //   timer: 2000,
      // });
      setFishData({
        family: "",
        imageName: "",
        scientificName: "",
        commonName: ["", "", ""],
        description: "",
        distinctiveChar: "",
      });
    }
  };

  console.log(fishData);

  return (
    <Box bg="#f5f6fa" width="30%" px="3" pt="5" textAlign="center">
      <Text pb="2" fontSize="xl">
        Ingresar datos
      </Text>
      <FishInput
        ph="Nombre cientifico"
        value={fishData.scientificName}
        name="scientificName"
        onChange={handleScientificNameInput}
      />
      <Stack direction="row">
        <FishInput
          ph="Nombre vulgar 1"
          value={fishData.commonName[0]}
          name="commonName0"
          onChange={handleCommonNameInput}
        />
        <FishInput
          ph="Nombre vulgar 2"
          value={fishData.commonName[1]}
          name="commonName1"
          onChange={handleCommonNameInput}
        />
        <FishInput
          ph="Nombre vulgar 3"
          value={fishData.commonName[3]}
          name="commonName2"
          onChange={handleCommonNameInput}
        />
      </Stack>
      <Select
        placeholder="Familia"
        onChange={handleSelect}
        variant="outline"
        mb="2"
        value={fishData.family}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Textarea
        placeholder="Ingresar descripcion del pez"
        max-height="60px"
        onChange={handleDescription}
        value={fishData.description}
        minHeight="200px"
        maxHeight="250px"
      />
      <Divider orientation="horizontal" my="2" color="red" />
      <Text pb="2" fontSize="md" textColor="gray.600">
        Opcional
      </Text>
      <FishInput
        ph="Nombre de la imagen"
        value={fishData.imageName}
        name="imageName"
        onChange={handleImageName}
      />
      <Textarea
        placeholder="Caracteristica distintiva"
        onChange={handleDistinctiveCharacteristic}
        value={fishData.distinctiveChar}
        minHeight="100px"
        maxHeight="150px"
      />
      <Button colorScheme="blue" mt="5" onClick={handleClick}>
        Cargar
      </Button>
    </Box>
  );
};

export default AddFish;

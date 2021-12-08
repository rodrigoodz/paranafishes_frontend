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
        → nombre cientifico
        → familia
        → descripcion`,
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
    <Box bg="#f5f6fa" px="3" pt="5">
      <Box textAlign="center">
        <Text pb="2" fontSize={("xs", "xs", "xs", "xl")}>
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
          placeholder="Seleccionar Familia"
          onChange={handleSelect}
          variant="outline"
          mb="2"
          value={fishData.family}
          color="gray.500"
        >
          <option value="Potamotrygonidae">
            MYLIOBATIFORMES: Potamotrygonidae
          </option>
          <option value="Clupeidae">CLUPEIFORMES: Clupeidae</option>
          <option value="Engraulidae">CLUPEIFORMES: Engraulidae</option>
          <option value="Pristigasteridae">
            CLUPEIFORMES: Pristigasteridae
          </option>
          <option value="Parodontidae">CHARACIFORMES: Parodontidae</option>
          <option value="Curimatidae">CHARACIFORMES: Curimatidae</option>
          <option value="Prochilodontidae">
            CHARACIFORMES: Prochilodontidae
          </option>
          <option value="Anostomidae">CHARACIFORMES: Anostomidae</option>
          <option value="Crenuchidae">CHARACIFORMES: Crenuchidae</option>
          <option value="Hemiodontidae">CHARACIFORMES: Hemiodontidae</option>
          <option value="Serrasalmidae">CHARACIFORMES: Serrasalmidae</option>
          <option value="Gasteropelecidae">
            CHARACIFORMES: Gasteropelecidae
          </option>
          <option value="Characidae">CHARACIFORMES: Characidae</option>
          <option value="Acestrorhynchidae">
            CHARACIFORMES: Acestrorhynchidae
          </option>
          <option value="Cynodontidae">CHARACIFORMES: Cynodontidae</option>
          <option value="Erythrinidae">CHARACIFORMES: Erythrinidae</option>
          <option value="Lebiasinidae">CHARACIFORMES: Lebiasinidae</option>
          <option value="Aspredinidae">SILURIFORMES: Aspredinidae</option>
          <option value="Trichomycteridae">
            SILURIFORMES: Trichomycteridae
          </option>
          <option value="Callichthyidae">SILURIFORMES: Callichthyidae</option>
          <option value="Loricariidae">SILURIFORMES: Loricariidae</option>
          <option value="Pseudopimelodidae">
            SILURIFORMES: Pseudopimelodidae
          </option>
          <option value="Heptapteridae">SILURIFORMES: Heptapteridae</option>
          <option value="Pimelodidae">SILURIFORMES: Pimelodidae</option>
          <option value="Doradidae">SILURIFORMES: Doradidae</option>
          <option value="Auchenipteridae">SILURIFORMES: Auchenipteridae</option>
          <option value="Gymnotidae">GYMNOTIFORMES: Gymnotidae</option>
          <option value="Sternopygidae">GYMNOTIFORMES: Sternopygidae</option>
          <option value="Rhamphichthyidae">
            GYMNOTIFORMES: Rhamphichthyidae
          </option>
          <option value="Hypopomidae">GYMNOTIFORMES: Hypopomidae</option>
          <option value="Apteronotidae">GYMNOTIFORMES: Apteronotidae</option>
          <option value="Atherinopsidae">ATHERINIFORMES: Atherinopsidae</option>
          <option value="Rivulidae">CYPRINODONTIFORMES: Rivulidae</option>
          <option value="Poecilidae">CYPRINODONTIFORMES: Poecilidae</option>
          <option value="Belonidae">BELONIFORMES: Belonidae</option>
          <option value="Synbranchidae">SYNBRANCHIFORMES: Synbranchidae</option>
          <option value="Sciaenidae">PERCIFORMES: Sciaenidae</option>
          <option value="Cichlidae">PERCIFORMES: Cichlidae</option>
          <option value="Achiridae">PLEURONECTIFORMES: Achiridae</option>
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
        <Text pb="2" fontSize={("xs", "xs", "xs", "md")} textColor="gray.500">
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
        <Button colorScheme="blue" my="5" onClick={handleClick}>
          Cargar
        </Button>
      </Box>
    </Box>
  );
};

export default AddFish;

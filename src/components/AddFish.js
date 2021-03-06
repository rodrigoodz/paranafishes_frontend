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
    scientificName: "",
    commonName: ["", "", ""],
    description: "",
    biology: "",
    order: "",
    distribution: "",
    observations: "",
  });

  const handleScientificNameInput = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, scientificName: value, imageName: value });
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
    // extraigo texto de la <option> y de ahi guardo tambien el fishData.order
    const optionText = e.target.options[e.target.selectedIndex].text;

    const order = optionText.substring(0, optionText.indexOf(":"));

    setFishData({ ...fishData, family: e.target.value, order: order });
  };

  const handleDescription = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, description: value });
  };

  const handleBiology = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, biology: value });
  };

  const handleDistribution = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, distribution: value });
  };

  const handleObservations = (e) => {
    const value = e.target.value;
    setFishData({ ...fishData, observations: value });
  };

  const handleClick = async () => {
    const {
      scientificName,
      family,
      description,
      biology,
      order,
      distribution,
      observations,
    } = fishData;
    if (
      scientificName.length === 0 ||
      family.length === 0 ||
      description.length === 0 ||
      observations.length === 0 ||
      biology.length === 0 ||
      order.length === 0 ||
      distribution.length === 0
    ) {
      swal({
        title: "Error!",
        text: `Complet?? todos los datos necesarios 
        ??? nombre cientifico
        ??? familia
        ??? descripcion`,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    } else {
      await setDoc(doc(db, "fishes", fishData.scientificName), fishData);

      swal({
        title: "Confirmado!",
        text: `Datos a??adidos con exito`,
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      setFishData({
        family: "",
        scientificName: "",
        commonName: ["", "", ""],
        description: "",
        biology: "",
        order: "",
        distribution: "",
        observations: "",
      });
    }
  };

  return (
    <Box px="3" pt="5" textAlign="center">
      <Text pb="2" fontSize={("xs", "xs", "xs", "xl")}>
        Ingresar datos
      </Text>
      <FishInput
        ph="Nombre cientifico"
        value={fishData.scientificName}
        name="scientificName"
        onChange={handleScientificNameInput}
      />

      <Select
        placeholder="Seleccionar Familia"
        onChange={handleSelect}
        variant="outline"
        mb="2"
        value={fishData.family}
        color="gray.500"
      >
        <option value="Potamotrygonidae">
          Myliobatiformes: Potamotrygonidae
        </option>
        <option value="Clupeidae">Clupeiformes: Clupeidae</option>
        <option value="Engraulidae">Clupeiformes: Engraulidae</option>
        <option value="Pristigasteridae">Clupeiformes: Pristigasteridae</option>
        <option value="Parodontidae">Characiformes: Parodontidae</option>
        <option value="Curimatidae">Characiformes: Curimatidae</option>
        <option value="Bryconidae">Characiformes: Bryconidae</option>
        <option value="Prochilodontidae">
          Characiformes: Prochilodontidae
        </option>
        <option value="Anostomidae">Characiformes: Anostomidae</option>
        <option value="Crenuchidae">Characiformes: Crenuchidae</option>
        <option value="Hemiodontidae">Characiformes: Hemiodontidae</option>
        <option value="Serrasalmidae">Characiformes: Serrasalmidae</option>
        <option value="Gasteropelecidae">
          Characiformes: Gasteropelecidae
        </option>
        <option value="Characidae">Characiformes: Characidae</option>
        <option value="Acestrorhynchidae">
          Characiformes: Acestrorhynchidae
        </option>
        <option value="Cynodontidae">Characiformes: Cynodontidae</option>
        <option value="Erythrinidae">Characiformes: Erythrinidae</option>
        <option value="Lebiasinidae">Characiformes: Lebiasinidae</option>
        <option value="Aspredinidae">Siluriformes: Aspredinidae</option>
        <option value="Trichomycteridae">Siluriformes: Trichomycteridae</option>
        <option value="Callichthyidae">Siluriformes: Callichthyidae</option>
        <option value="Loricariidae">Siluriformes: Loricariidae</option>
        <option value="Pseudopimelodidae">
          Siluriformes: Pseudopimelodidae
        </option>
        <option value="Heptapteridae">Siluriformes: Heptapteridae</option>
        <option value="Pimelodidae">Siluriformes: Pimelodidae</option>
        <option value="Doradidae">Siluriformes: Doradidae</option>
        <option value="Auchenipteridae">Siluriformes: Auchenipteridae</option>
        <option value="Gymnotidae">Gymnotiformes: Gymnotidae</option>
        <option value="Sternopygidae">Gymnotiformes: Sternopygidae</option>
        <option value="Rhamphichthyidae">
          Gymnotiformes: Rhamphichthyidae
        </option>
        <option value="Hypopomidae">Gymnotiformes: Hypopomidae</option>
        <option value="Apteronotidae">Gymnotiformes: Apteronotidae</option>
        <option value="Atherinopsidae">Atheriniformes: Atherinopsidae</option>
        <option value="Rivulidae">Cyprinodontiformes: Rivulidae</option>
        <option value="Poecilidae">Cyprinodontiformes: Poecilidae</option>
        <option value="Cyprinidae">Cypriniformes: Cyprinidae</option>
        <option value="Belonidae">Beloniformes: Belonidae</option>
        <option value="Synbranchidae">Synbranchiformes: Synbranchidae</option>
        <option value="Sciaenidae">Perciformes: Sciaenidae</option>
        <option value="Cichlidae">Cichliformes: Cichlidae</option>
        <option value="Achiridae">Pleuronectiformes: Achiridae</option>
      </Select>
      <Textarea
        placeholder="Descripcion (caracter??sticas generales)"
        max-height="60px"
        onChange={handleDescription}
        value={fishData.description}
        minHeight="100px"
        maxHeight="150px"
        mb="2"
      />
      <Textarea
        placeholder="Distribucion"
        onChange={handleDistribution}
        value={fishData.distribution}
        minHeight="100px"
        maxHeight="150px"
        mb="2"
      />
      <Textarea
        placeholder="Biologia"
        onChange={handleBiology}
        value={fishData.biology}
        minHeight="100px"
        maxHeight="150px"
        mb="2"
      />
      <Textarea
        placeholder="Observaciones"
        onChange={handleObservations}
        value={fishData.observations}
        minHeight="100px"
        maxHeight="150px"
        mb="2"
      />
      <Divider orientation="horizontal" my="2" color="red" />
      <Text pb="2" fontSize={("xs", "xs", "xs", "md")} textColor="gray.500">
        Opcional
      </Text>

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
          value={fishData.commonName[2]}
          name="commonName2"
          onChange={handleCommonNameInput}
        />
      </Stack>
      <Button colorScheme="blue" my="5" onClick={handleClick}>
        Cargar
      </Button>
    </Box>
  );
};

export default AddFish;

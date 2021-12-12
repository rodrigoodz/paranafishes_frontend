import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { db } from "../firebase-config";
import { onSnapshot, collection, query } from "firebase/firestore";
import FishDescription from "./FishDescription";

const FishList = () => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    //  sin actualizacion automatica
    // const getFishes = async () => {
    //   const data = await getDocs(collection(db, "fishes"));

    //   setFishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    // getFishes()

    // con actualizacion automatica
    const q = query(collection(db, "fishes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fishes = [];
      querySnapshot.forEach((doc) => {
        fishes.push(doc.data());
      });
      setFishes(fishes);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box px="5" width="full">
      {Boolean(fishes) &&
        fishes.map((fish) => (
          <FishDescription fishData={fish} key={fish.scientificName} />
        ))}
    </Box>
  );
};

export default FishList;

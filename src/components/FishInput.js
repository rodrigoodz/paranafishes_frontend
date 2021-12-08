import React from "react";
import { Input } from "@chakra-ui/react";

const FishInput = ({ ph, value, name, onChange }) => {
  return (
    <Input
      placeholder={ph}
      _focus={{
        borderColor: "white",
        boxShadow: "outline",
      }}
      mb="2"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default FishInput;

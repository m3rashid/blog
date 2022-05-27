import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface IProps {}

const categoryList = [
  "Linux",
  "Motivation",
  "Git and Github",
  "Off Topic",
  "Computer Science",
  "Nodejs",
  "Javascript",
  "APIs",
];

const Categories: React.FC<IProps> = () => {
  return (
    <Box
      w={"full"}
      maxHeight="min-content"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
    >
      <div>
        <Box fontSize={20} fontWeight="bold" mb={4}>
          Categories
        </Box>
        {categoryList.map((cat, i) => {
          return <Box key={cat + i}>{cat}</Box>;
        })}
      </div>
    </Box>
  );
};

export default Categories;

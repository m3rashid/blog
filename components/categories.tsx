import React from "react";
import NextLink from "next/link";
import { Box, Link, useColorModeValue } from "@chakra-ui/react";

import { getCategories } from "../services";
import { ICategory } from "../services/types";

interface IProps {}

const Categories: React.FC<IProps> = () => {
  const [categories, setCategories] = React.useState<ICategory[]>([]);

  React.useEffect(() => {
    getCategories()
      .then((cat) => {
        console.log(cat);
        setCategories(cat);
      })
      .catch(console.log);
  }, []);

  return (
    <Box
      w="full"
      maxHeight="min-content"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="lg"
      p={6}
    >
      <div>
        <Box fontSize={20} fontWeight="bold" mb={4}>
          Categories
        </Box>
        {categories.map((c) => {
          return (
            <Link as={NextLink} key={c.slug} href={`/category/${c.slug}`}>
              {c.name}
            </Link>
          );
        })}
      </div>
    </Box>
  );
};

export default Categories;

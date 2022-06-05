import React from "react";
import NextLink from "next/link";
import { Box, Link, useColorModeValue } from "@chakra-ui/react";

import { ICategory } from "../services/types";
import { getCategories } from "../services";

interface IProps {}

const Categories: React.FC<IProps> = () => {
  const [categories, setCategories] = React.useState<ICategory[]>([]);

  React.useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <Box
      w="full"
      maxHeight="min-content"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="lg"
      p={4}
    >
      <div>
        <Box fontSize={20} fontWeight="bold" mb={4}>
          Categories
        </Box>
        {categories.map((c: any) => {
          return (
            <NextLink key={c.slug} href={`/category/${c.slug}`}>
              <Link as={Box}>{c.name}</Link>
            </NextLink>
          );
        })}
      </div>
    </Box>
  );
};

export default Categories;

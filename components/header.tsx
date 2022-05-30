import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
  Container,
  Link,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import NextLink from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} width="full" px={4}>
      <Container maxWidth={"6xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link as={NextLink} href="/">
            <Flex
              alignItems={"center"}
              cursor="pointer"
              justifyContent={"center"}
              gap={5}
            >
              <Image
                src="/fav.blue.png"
                height={50}
                width={50}
                alt="Cubicle logo"
              />
              <Heading
                order={2}
                fontSize="3xl"
                fontFamily="Quicksand, sans-serif"
              >
                Cubicle
              </Heading>
            </Flex>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

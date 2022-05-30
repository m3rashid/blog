import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Image from "next/image";
import SocialButton from "./atoms/footerSocialButton";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns="1fr 1fr"
          justifyContent="space-between"
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Flex gap={2} alignItems={"center"}>
                <Image
                  src="/fav.blue.png"
                  height={50}
                  width={50}
                  alt="Cubicle logo"
                />
                <Heading
                  order={5}
                  fontSize="2xl"
                  fontFamily="Quicksand, sans-serif"
                >
                  Cubicle
                </Heading>
              </Flex>
            </Box>
            <Text fontSize={"sm"}>
              &copy; {new Date().getFullYear()} Cubicle. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-end"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("blue.400", "blue.500")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "blue.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;

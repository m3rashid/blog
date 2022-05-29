import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container
      as={Stack}
      direction={{ base: "column", md: "row" }}
      py={{ md: 20 }}
      px={0}
      maxW={"6xl"}
      align="center"
    >
      <Flex
        flex={1}
        alignItems="center"
        justifyContent={"space-between"}
        gap={4}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontFamily="Quicksand, sans-serif"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            <Text as={"span"} position={"relative"}>
              Cubicle
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              Welcomes you
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Cubicle is an online portal for techies which mainly focuses on the
            life of programmers in general. It also features coding tips, tricks
            and motivation
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Go to Categories
            </Button>
            <Button rounded={"full"}>Start writing here</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src="/hero.svg" />
      </Flex>
    </Container>
  );
};

export default Hero;

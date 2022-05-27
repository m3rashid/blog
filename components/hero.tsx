import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }} my={{ md: 20 }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
    </Stack>
  );
};

export default Hero;

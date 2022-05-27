import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex
      textAlign="center"
      py={10}
      px={6}
      minH={"80vh"}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"}>You found a secret page</Text>
      <Text color={"gray.500"} mb={6}>
        But fortunately, we don&apos;t hide secrets from our users
      </Text>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Flex>
  );
};

export default NotFound;

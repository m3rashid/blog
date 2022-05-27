import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Author from "../../components/author";
import Categories from "../../components/categories";
import RelatedPosts from "../../components/related";

interface IProps {}

const Post: React.FC<IProps> = () => {
  return (
    <Container as={Stack} px={0} maxW={"6xl"} mb={6}>
      <Head>
        <title>Post | Cubicle</title>
      </Head>
      <SimpleGrid
        templateColumns={{ sm: "1fr", md: "2fr 1fr" }}
        spacing={8}
        maxW={"6xl"}
        py={6}
      >
        <SimpleGrid w={"full"} spacing={6}>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
          >
            Post
          </Box>
        </SimpleGrid>
        <Stack w={"full"} spacing={6}>
          <Author />
          <Categories />
          <RelatedPosts />
        </Stack>
      </SimpleGrid>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <SimpleGrid templateColumns={{ sm: "1fr", md: "9fr 5fr" }} spacing={8}>
          <Box w={"full"} p={6}>
            Previous COmments
          </Box>
          <Box w={"full"} p={6}>
            Create Comment
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Post;

import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Categories from "../../components/categories";
import PostCard from "../../components/postcard";
import RelatedPosts from "../../components/related";

interface IProps {}

const Category: React.FC<IProps> = () => {
  return (
    <>
      <Head>
        <title>Home | Cubicle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr" }}
          spacing={8}
          maxW={"6xl"}
          my={10}
        >
          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            spacing={6}
          >
            {/* <PostCard />
            <PostCard />
            <PostCard />
            <PostCard /> */}
          </SimpleGrid>
          <Stack w={"full"} spacing={6}>
            <Categories />
            {/* <RelatedPosts /> */}
          </Stack>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Category;

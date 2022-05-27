import Head from "next/head";
import type { NextPage } from "next";
import { Flex, SimpleGrid } from "@chakra-ui/react";

import Hero from "../components/hero";
import PostCard from "../components/postcard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Cubicle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Flex justifyContent="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr" }}
          spacing={8}
          maxW={"6xl"}
          py={10}
        >
          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            spacing={6}
          >
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </SimpleGrid>
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default Home;

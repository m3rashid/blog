import Head from "next/head";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";

import Hero from "../components/hero";
import PostCard from "../components/postcard";
import Categories from "../components/categories";
import RelatedPosts from "../components/related";
import { getPosts } from "../services";
import { SinglePost } from "../services/types";

const Home: React.FC<any> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home | Cubicle</title>
        <meta
          name="description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta
          name="keywords"
          content="cubicle, programming, coding, life, web development, coder, programmer, new skills, latest, technology, computer, science, nerdy, nerd"
        />

        <meta name="og:title" content="Home | Cubicle" />
        <meta name="og:url" content="https://cubicle.vercel.app/" />
        <meta
          name="og:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />

        <meta name="twitter:title" content="Home | Cubicle" />
        <meta
          name="twitter:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />

        <link rel="apple-touch-icon" href="/fav.blue.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/fav.blue.png" type="image/x-icon" />
        <meta name="image" content="https://cubicle.vercel.app/fav.blue.png" />
        <meta
          name="og:image"
          content="https://cubicle.vercel.app/fav.blue.png"
        />
        <meta
          name="twitter:image"
          content="https://cubicle.vercel.app/fav.blue.png"
        />
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
            {posts.map((post: SinglePost, index: number) => (
              <PostCard key={index} post={post.node} />
            ))}
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

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
}

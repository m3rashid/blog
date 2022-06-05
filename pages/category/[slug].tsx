import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
const Categories = dynamic(() => import("../../components/categories"), {
  ssr: false,
});
import PostCard from "../../components/postcard";
import { getCategories, getCategoryPost } from "../../services";
import { SinglePost } from "../../services/types";

interface IProps {
  posts: any;
}

const Category: React.FC<IProps> = ({ posts }) => {
  const router = useRouter();
  const bgC = useColorModeValue("white", "gray.900");

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <>
      <Head>
        <title>Cubicle</title>
        <meta
          name="description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="og:title" content={"Cubicle"} />
        <meta
          name="og:url"
          content={"https://cubicle.vercel.app/category/" + router.query.slug}
        />
        <meta
          name="og:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="twitter:title" content={"Cubicle"} />
        <meta
          name="twitter:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="image" content="https://cubicle.vercel.app/fav.png" />
        <meta name="og:image" content="https://cubicle.vercel.app/fav.png" />
        <meta
          name="twitter:image"
          content="https://cubicle.vercel.app/fav.png"
        />
      </Head>
      <Flex justifyContent="center" padding="10px">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr" }}
          spacing={8}
          maxW={"6xl"}
          py={10}
        >
          {posts.length > 0 ? (
            <SimpleGrid
              templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
              spacing={6}
            >
              {posts.map((post: SinglePost, index: number) => (
                <PostCard key={index} post={post.node} />
              ))}
            </SimpleGrid>
          ) : (
            <Box
              bg={bgC}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              fontSize={"2xl"}
              fontWeight={"semibold"}
            >
              No posts found
            </Box>
          )}
          <Stack w={"full"} spacing={6}>
            <Categories />
          </Stack>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Category;

interface ParamProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: ParamProps) {
  const posts = await getCategoryPost(params.slug);
  const category = posts.length > 0 ? posts[0].node.categories[0].name : "";
  return {
    props: {
      posts,
      category,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

import {
  Box,
  Container,
  SimpleGrid,
  Spinner,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Author from "../../components/author";
import Categories from "../../components/categories";
import Comments from "../../components/comments";
import PostDetail from "../../components/postDetail";
import RelatedPosts from "../../components/related";
import { getPostDetails, getPosts } from "../../services";
import { IPost } from "../../services/types";

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = ({ post }) => {
  const router = useRouter();
  const bgC = useColorModeValue("white", "gray.900");
  const keywords = post.title.split(" ");
  const result = keywords.filter((word: string) => word.length > 4);
  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <Container as={Stack} px={0} maxW={"6xl"} mb={6}>
      <Head>
        <title>{post.title} | Cubicle</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={result.join(", ")} />
        <meta name="og:title" content={post.title + " | Cubicle"} />
        <meta name="og:description" content={post.excerpt} />
        <meta
          name="og:url"
          content={"https://cubicle.vercel.app/post/" + post.slug}
        />
        <meta name="twitter:title" content={post.title + " | Cubicle"} />
        <meta name="twitter:description" content={post.excerpt} />

        <meta name="image" content={post.featuredImage.url} />
        <meta name="og:image" content={post.featuredImage.url} />
        <meta name="twitter:image" content={post.featuredImage.url} />
      </Head>
      <SimpleGrid
        templateColumns={{ sm: "1fr", md: "2fr 1fr" }}
        spacing={8}
        py={6}
      >
        <PostDetail post={post} />
        <Stack width={"full"} spacing={6}>
          <Author author={post.author} />
          {/* <Categories /> */}
          <RelatedPosts slug={post.slug} createdAt={post.createdAt} />
        </Stack>
      </SimpleGrid>

      <Box w={"full"} bg={bgC} boxShadow={"2xl"} rounded={"lg"}>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "9fr 5fr" }} spacing={8}>
          {/* <Comments slug={post.slug} /> */}
          <Box w={"full"} p={6}>
            Create Comment
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Post;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}

import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Spinner,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Author from "../../components/author";
import Categories from "../../components/categories";
import Comments from "../../components/comments";

const CreateComment = dynamic(() => import("../../components/createComment"), {
  ssr: false,
});
import PostDetail from "../../components/postDetail";
import RelatedPosts from "../../components/related";
import { getPostDetails, getPosts } from "../../services";
import { IPost } from "../../services/types";

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  if (!post) {
    router.push("/");
  }

  const postTitle = post.title || "Post";
  const keywords = postTitle.split(" ");
  const result = keywords.filter((word: string) => word.length > 4);

  return (
    <Container as={Stack} padding="10px" maxW={"6xl"} mb={6}>
      <Head>
        <title>{postTitle} | Cubicle</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={result.join(", ")} />
        <meta name="og:title" content={postTitle + " | Cubicle"} />
        <meta name="og:description" content={post.excerpt} />
        <meta
          name="og:url"
          content={"https://cubicle.vercel.app/post/" + post.slug}
        />
        <meta name="twitter:title" content={postTitle + " | Cubicle"} />
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
        <Flex direction="column" gap={6}>
          <PostDetail post={post} />
          <Comments slug={post.slug} />
        </Flex>
        <Stack width={"full"} spacing={6}>
          <Author author={post.author} />
          <RelatedPosts slug={post.slug} createdAt={post.createdAt} />
          <Categories />
          <CreateComment slug={post.slug} />
        </Stack>
      </SimpleGrid>
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
    revalidate: 100,
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

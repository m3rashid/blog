import { Flex, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Categories from "../../components/categories";
import PostCard from "../../components/postcard";
import RelatedPosts from "../../components/related";
import { getCategories, getCategoryPost } from "../../services";
import { SinglePost } from "../../services/types";

interface IProps {
  posts: any;
  category: string;
}

const Category: React.FC<IProps> = ({ posts, category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Spinner />;
  }

  const keywords: string[] | undefined = category.split(" ");
  keywords.push(router.query.slug as string);
  const result = keywords.filter((word) => word.length > 3);

  return (
    <>
      <Head>
        <title>{category} | Cubicle</title>
        <meta
          name="description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="keywords" content={result.join(", ")} />
        <meta name="og:title" content={category + " | Cubicle"} />
        <meta
          name="og:url"
          content={"https://cubicle.vercel.app/category/" + router.query.slug}
        />
        <meta
          name="og:description"
          content="Cubicle is a blog website which mainly focuses on the life of programmers in general. Also, includes programming tips, tricks and tutorials"
        />
        <meta name="twitter:title" content={category + " | Cubicle"} />
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

export default Category;

interface ParamProps {
  params: { slug: string };
}

export async function getStaticProps({ params }: ParamProps) {
  const posts = await getCategoryPost(params.slug);
  const category = posts[0].node.categories[0].name;
  return {
    props: { posts, category },
    revalidate: 20,
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

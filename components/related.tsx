import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { getAdjacentPosts } from "../services";
import AdjacentPostCard from "./adjacentPostcard";

interface IProps {
  createdAt: Date | string;
  slug: string;
}

const RelatedPosts: React.FC<IProps> = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = React.useState<any>(null);
  const [dataLoaded, setDataLoaded] = React.useState(false);

  React.useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug, createdAt]);

  return (
    <Box
      w={"full"}
      maxHeight="min-content"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={4}
    >
      <Heading order={3} fontSize="xl" fontFamily="Quicksand" mb={4}>
        Also Checkout
      </Heading>
      <Flex direction="column" gap={4} fontSize={20} fontWeight="bold">
        {dataLoaded && (
          <>
            {adjacentPost.previous && (
              <AdjacentPostCard post={adjacentPost.previous} />
            )}
            {adjacentPost.next && <AdjacentPostCard post={adjacentPost.next} />}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default RelatedPosts;

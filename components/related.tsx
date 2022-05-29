import { Box, useColorModeValue } from "@chakra-ui/react";
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
      p={6}
    >
      <div>
        <Box fontSize={20} fontWeight="bold" mb={4}>
          {dataLoaded && (
            <>
              {adjacentPost.previous && (
                <div
                  className={`${
                    adjacentPost.next
                      ? "col-span-1 lg:col-span-4"
                      : "col-span-1 lg:col-span-8"
                  } adjacent-post rounded-md lg:rounded-lg relative h-72`}
                >
                  <AdjacentPostCard
                    post={adjacentPost.previous}
                    position="LEFT"
                  />
                </div>
              )}
              {adjacentPost.next && (
                <div
                  className={`${
                    adjacentPost.previous
                      ? "col-span-1 lg:col-span-4"
                      : "col-span-1 lg:col-span-8"
                  } adjacent-post rounded-md lg:rounded-lg relative h-72`}
                >
                  <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
                </div>
              )}
            </>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default RelatedPosts;

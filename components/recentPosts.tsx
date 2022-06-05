import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import { IPost } from "../services/types";

interface IProps {
  categories?: string[];
  slug?: string;
}

const RecentPosts: React.FC<IProps> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = React.useState<IPost[]>([]);
  React.useEffect(() => {
    if (slug && categories) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug, categories]);

  return (
    <Box
      w="full"
      maxHeight="min-content"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="lg"
      p={4}
    >
      <div>
        <Box fontSize={20} fontWeight="bold" mb={4}>
          Other Recent Posts
        </Box>
        {relatedPosts.map((post) => {
          return (
            <Box key={post.slug}>
              <Box as="a" href={`/post/${post.slug}`}>
                <Stack
                  mt={6}
                  direction={"row"}
                  align={"center"}
                  spacing={4}
                  fontSize={"sm"}
                >
                  <Avatar src={post.featuredImage.url} />
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>{post.title}</Text>
                    <Text>{moment(post.createdAt).format("MMM DD, YYYY")}</Text>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          );
        })}
      </div>
    </Box>
  );
};

export default RecentPosts;

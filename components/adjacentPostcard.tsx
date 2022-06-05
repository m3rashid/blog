import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { IPost } from "../services/types";

interface IProps {
  post: IPost;
}

const AdjacentPostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Box as="a" href={`/post/${post.slug}`}>
      <Stack direction={"row"} align={"center"} spacing={4} fontSize={"sm"}>
        <Avatar src={post.featuredImage.url} />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{post.title}</Text>
          <Text>{moment(post.createdAt).format("MMM DD, YYYY")}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AdjacentPostCard;

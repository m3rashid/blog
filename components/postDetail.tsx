import React from "react";
import { Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { IPost } from "../services/types";
import getContentFragment from "./postData";

interface IProps {
  post: IPost;
}

const PostDetail: React.FC<IProps> = ({ post }) => {
  const bgC = useColorModeValue("white", "gray.900");

  return (
    <Box w={"full"} bg={bgC} boxShadow={"2xl"} rounded={"lg"}>
      <Image src={post.featuredImage.url} alt={post.title} roundedTop="md" />
      <Box p={6}>
        <Box>
          <Heading as="h1" mb={8} size="2xl">
            {post.title}
          </Heading>
          <Box>
            {post.content.raw.children.map((typeObj: any, index: number) => {
              const children = typeObj.children.map(
                (item: any, itemindex: number) =>
                  getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostDetail;

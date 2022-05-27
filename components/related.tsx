import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface IProps {}

const RelatedPosts: React.FC<IProps> = () => {
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
          Related Posts
        </Box>
      </div>
    </Box>
  );
};

export default RelatedPosts;

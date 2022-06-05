import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { getComments } from "../services";

interface IProps {
  slug: string;
}

const Comments: React.FC<IProps> = ({ slug }) => {
  const [comments, setComments] = React.useState<any[]>([]);
  const bgC = useColorModeValue("white", "gray.900");

  React.useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  if (comments.length === 0) {
    return (
      <Box
        w={"full"}
        height="min-content"
        bg={bgC}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={4}
      >
        <Text fontSize={"xl"} fontWeight="bold">
          No comments
        </Text>
      </Box>
    );
  }

  return (
    <Box
      w={"full"}
      height="min-content"
      bg={bgC}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={4}
    >
      <Text fontSize={"xl"} fontWeight="bold">
        Comments
      </Text>
      {comments.map((comment, index) => {
        return (
          <Stack key={index} mt={4} direction={"row"} spacing={4}>
            <Avatar />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{comment.name}</Text>
              <Text fontSize="md">{comment.comment}</Text>
              <Text color={"gray.500"}>
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </Text>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Comments;

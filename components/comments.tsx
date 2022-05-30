import { Box, Text, useColorModeValue } from "@chakra-ui/react";
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
  }, []);

  if (comments.length === 0) {
    return (
      <Box w={"full"} bg={bgC} boxShadow={"2xl"} rounded={"lg"} p={6}>
        <Text>NO comments</Text>
      </Box>
    );
  }

  return <Box w={"full"} bg={bgC} boxShadow={"2xl"} rounded={"lg"} p={6}></Box>;
};

export default Comments;

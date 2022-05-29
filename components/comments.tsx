import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { getComments } from "../services";

interface IProps {
  slug: string;
}

const Comments: React.FC<IProps> = ({ slug }) => {
  const [comments, setComments] = React.useState<any[]>([]);

  React.useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  if (comments.length === 0) {
    return (
      <Box w={"full"} p={6}>
        <Text>NO comments</Text>
      </Box>
    );
  }

  return <Box w={"full"} p={6}></Box>;
};

export default Comments;

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { submitComment } from "../services";

interface IProps {
  slug: string;
}

const CreateComment: React.FC<IProps> = ({ slug }) => {
  const bgC = useColorModeValue("white", "gray.900");
  const toast = useToast();
  const id = "single-toast";

  const commentEl = React.useRef<HTMLTextAreaElement | any>(null);
  const nameEl = React.useRef<HTMLInputElement | any>(null);
  const storeDataEl = React.useRef<HTMLInputElement | any>(null);

  React.useEffect(() => {
    if (!nameEl.current) return;
    nameEl.current.value = window.localStorage.getItem("name");
  }, []);

  const handleCommentSubmission = () => {
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!name || !comment) {
      toast({
        id,
        title: "Error",
        description: "All fields are required",
        status: "error",
        variant: "left-accent",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const commentObj = { name, comment, slug };
    if (storeData) {
      window.localStorage.setItem("name", name);
    } else {
      window.localStorage.removeItem("name");
    }
    submitComment(commentObj)
      .then((res) => {
        console.log(res);
        toast({
          id,
          title: "Success",
          description: "Your comment has been submitted",
          status: "success",
          variant: "left-accent",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(console.log);
  };

  return (
    <Box
      w={"full"}
      height="min-content"
      bg={bgC}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={4}
    >
      <Text fontSize={"xl"} fontWeight="bold" mb={4}>
        Leave a comment
      </Text>
      <Flex direction="column" gap={2}>
        <Textarea
          ref={commentEl}
          px={4}
          py={2}
          outline="none"
          w={"full"}
          h={40}
          rounded="md"
          placeholder="Leave a comment"
          name="comment"
        />
        <Input
          ref={nameEl}
          type="text"
          py={2}
          px={4}
          outline="none"
          w={"full"}
          rounded="md"
        />
        <Checkbox ref={storeDataEl} colorScheme={"green"} defaultChecked>
          Save name for next time
        </Checkbox>
        <Button onClick={handleCommentSubmission}>Post Comment</Button>
      </Flex>
    </Box>
  );
};

export default CreateComment;

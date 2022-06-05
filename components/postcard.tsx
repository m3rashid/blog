import moment from "moment";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IPost } from "../services/types";

interface IProps {
  post: IPost;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Center>
      <Box
        w={"full"}
        h={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={{ base: 4, md: 6 }}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={post.featuredImage.url}
            layout={"fill"}
            alt={post.excerpt}
          />
        </Box>
        {post.categories.map((cat: any) => {
          return (
            <Text
              display={"inline-block"}
              mr={3}
              color={"blue.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
              key={cat.slug}
            >
              {cat.name}
            </Text>
          );
        })}
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily="Quicksand, sans-serif"
          >
            <Link as={NextLink} href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </Heading>
          <Text color={"gray.500"}>{post.excerpt.substring(0, 75)} . .</Text>
        </Stack>
        <Stack
          mt={{ base: 4, md: 6 }}
          direction={"row"}
          spacing={4}
          align={"center"}
        >
          <Avatar src={post.author.photo?.url} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{post.author.name}</Text>
            <Text color={"gray.500"}>
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default PostCard;

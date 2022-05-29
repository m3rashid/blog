import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IAuthor } from "../services/types";

const FlexLine = ({
  Icon,
  label,
  color = "gray.500",
}: {
  Icon: IconType;
  label: string;
  color?: string;
}) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      gap={2}
      fontWeight={600}
      color={color}
      my={2}
    >
      <Icon />
      {label}
    </Flex>
  );
};

interface IProps {
  author: IAuthor;
}

const Author: React.FC<IProps> = ({ author }) => {
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar size={"xl"} src={author.photo.url} mb={4} />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {author.name}
      </Heading>
      <FlexLine Icon={FaTwitter} label={author.twitterUsername} />
      <FlexLine Icon={FaInstagram} label={author.instagramUsername} />

      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {author.bio}
      </Text>

      <Stack mt={8} direction={"row"} spacing={4} align="center">
        <Button
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          <FlexLine Icon={FaGithub} label={author.githubUsername} />
        </Button>
        <Button
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          <FlexLine
            Icon={FaLinkedin}
            label={author.linkedinUsername}
            color="white"
          />
        </Button>
      </Stack>
    </Box>
  );
};

export default Author;

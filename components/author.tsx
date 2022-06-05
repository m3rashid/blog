import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe2 } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { IAuthor } from "../services/types";

interface IFlexLine {
  Icon: IconType;
  label: string;
  color?: string;
  link: string;
}

const FlexLine: React.FC<IFlexLine> = ({
  Icon,
  label,
  color = "gray.500",
  link,
}) => {
  return (
    <Link isExternal href={link}>
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
    </Link>
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
      p={4}
      textAlign={"center"}
    >
      <Avatar size={"xl"} src={author.photo.url} mb={4} />
      <Heading fontSize={"2xl"} fontFamily="Quicksand, sans-serif">
        {author.name}
      </Heading>
      <FlexLine
        Icon={FaTwitter}
        label={author.twitterUsername}
        link={`https://twitter.com/${author.twitterUsername}`}
      />
      <FlexLine
        Icon={FaInstagram}
        label={author.instagramUsername}
        link={`https://www.instagram.com/${author.instagramUsername}`}
      />
      {author.portfolioUrl && (
        <FlexLine
          Icon={BsGlobe2}
          label="Portfolio"
          link={author.portfolioUrl}
        />
      )}

      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {author.bio}
      </Text>

      <Stack mt={8} direction={"row"} justifyContent="center" spacing={4}>
        <Button fontSize={"sm"} rounded={"full"} _focus={{ bg: "gray.200" }}>
          <FlexLine
            Icon={FaGithub}
            label={author.githubUsername}
            link={`https://github.com/${author.githubUsername}`}
          />
        </Button>
        <Button
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
        >
          <FlexLine
            Icon={FaLinkedin}
            label={author.linkedinUsername}
            color="white"
            link={`https://www.linkedin.com/in/${author.linkedinUsername}`}
          />
        </Button>
      </Stack>
    </Box>
  );
};

export default Author;

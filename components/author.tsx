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

const Author = () => {
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={
          "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        }
        mb={4}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        Lindsey James
      </Heading>
      <FlexLine Icon={FaTwitter} label="@lindsey_jam3s" />
      <FlexLine Icon={FaInstagram} label="@lindsey_jam3s" />

      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        Actress, musician, songwriter and artist. PM for work inquires
      </Text>

      <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          <FlexLine Icon={FaGithub} label="@lindsey_jam3s" />
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
          <FlexLine Icon={FaLinkedin} label="@lindsey_jam3s" color="white" />
        </Button>
      </Stack>
    </Box>
  );
};

export default Author;

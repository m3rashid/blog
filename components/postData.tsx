import React from "react";
import Image from "next/image";
import {
  Box,
  Code,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";
import { RiDoubleQuotesL } from "react-icons/ri";

const getContentFragment = (index?: any, text?: any, obj?: any, type?: any) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }

    if (obj.code) {
      modifiedText = (
        <Code
          as="kbd"
          px={1}
          mx={1}
          fontWeight={600}
          fontFamily="monospace"
          key={index}
        >
          {text}
        </Code>
      );
    }

    if (obj.type === "link") {
      modifiedText = (
        <Link
          style={{ display: "inline-block" }}
          isExternal
          mr={2}
          color="blue.300"
          href={obj.href}
          key={index}
        >
          <Flex gap={1} alignItems="center">
            {obj.children[0].text}
            <HiExternalLink />
          </Flex>
        </Link>
      );
    }
  }

  switch (type) {
    case "heading-one":
      return (
        <Heading
          as="h1"
          fontFamily="Quicksand, sans-serif"
          size="3xl"
          mb={2}
          key={index}
        >
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-two":
      return (
        <Heading
          as="h2"
          fontFamily="Quicksand, sans-serif"
          size="2xl"
          mb={2}
          key={index}
        >
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-three":
      return (
        <Heading
          as="h3"
          fontFamily="Quicksand, sans-serif"
          size="xl"
          mb={2}
          key={index}
        >
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-four":
      return (
        <Heading
          as="h4"
          fontFamily="Quicksand, sans-serif"
          size="lg"
          mb={2}
          key={index}
        >
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-five":
      return (
        <Heading
          as="h5"
          fontFamily="Quicksand, sans-serif"
          size="md"
          mb={2}
          key={index}
        >
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-six":
      return (
        <Heading
          as="h5"
          fontFamily="Quicksand, sans-serif"
          size="sm"
          mb={2}
          key={index}
        >
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "paragraph":
      return (
        <Text fontFamily="Quicksand, sans-serif" key={index} mb={6}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Text>
      );

    case "block-quote":
      return (
        <Box
          key={`quote-${index}`}
          mb={6}
          p={3}
          border="1px solid"
          borderColor="blue.300"
          textAlign="justify"
          rounded="md"
          fontWeight={500}
        >
          <RiDoubleQuotesL
            style={{ display: "inline-block", marginRight: "10px" }}
            size="1.5em"
          />
          {modifiedText.map((item: any, i: number) => (
            <Text as="cite" key={i}>
              {item}
            </Text>
          ))}
        </Box>
      );

    case "image":
      return (
        <Image
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );

    case "code-block":
      let a = modifiedText[0].replace(/ /g, "&nbsp;");
      modifiedText = a.replace(/\n/g, "<br />");
      return (
        <Code
          className="scrollbar-style"
          key={index}
          overflowX="auto"
          py={3}
          px={2}
          mb={6}
          rounded="md"
          width="100%"
          fontFamily="monospace"
          wordBreak="break-all"
          dangerouslySetInnerHTML={{ __html: modifiedText }}
        />
      );

    case "bulleted-list":
      let data1 = obj.children.map((child1: any, i: number) => {
        return child1.children.map((child2: any, j: number) => {
          return (
            <ListItem key={`${i}-${j}`}>
              <Box>
                {child2.children.map((child3: any, k: number) => {
                  return getContentFragment(k, child3.text, child3);
                })}
              </Box>
            </ListItem>
          );
        });
      });
      return <UnorderedList key={index}>{data1}</UnorderedList>;

    case "numbered-list":
      let data2 = obj.children.map((child1: any, i: number) => {
        return child1.children.map((child2: any, j: number) => {
          return (
            <ListItem mb={2} key={`${i}-${j}`}>
              <Box>
                {child2.children.map((child3: any, k: number) => {
                  return getContentFragment(k, child3.text, child3);
                })}
              </Box>
            </ListItem>
          );
        });
      });
      return <OrderedList key={index}>{data2}</OrderedList>;

    default:
      return modifiedText;
  }
};

export default getContentFragment;

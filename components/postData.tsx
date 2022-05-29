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
          // className="bg-gray-900 px-3 py-0.5 rounded-md lg:rounded-lg"
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
        <Heading as="h1" size="3xl" key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-two":
      return (
        <Heading as="h2" size="2xl" key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-three":
      return (
        <Heading as="h3" size="xl" key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-four":
      return (
        <Heading as="h4" size="lg" key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-five":
      return (
        <Heading as="h5" size="md" key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "heading-six":
      return (
        <Heading as="h5" size="sm" key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Heading>
      );

    case "paragraph":
      return (
        <Text key={index} mb={6}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Text>
      );

    case "block-quote":
      const leftQuote = (
        <Box as="span" mr={2}>
          <Image
            src="/left-quote.png"
            height="30px"
            width="30px"
            alt="left-quote"
          />
        </Box>
      );
      return (
        <Box
          key={`quote-${index}`}
          mb={6}
          p={3}
          border="1px solid"
          borderColor="blue.300"
          textAlign="justify"
          rounded="md"
        >
          {leftQuote}
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </Box>
      );

    case "image":
      return (
        <img
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
          width="full"
          key={index}
          py={3}
          px={2}
          mb={6}
          rounded="md"
          overflowX="auto"
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

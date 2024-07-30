import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      textColor="black"
      rounded="xl"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} roundedTop="xl" />
      <VStack spacing={4} p={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack justifyContent="flex-end" spacing={2}>
          <Text fontWeight="bold">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;

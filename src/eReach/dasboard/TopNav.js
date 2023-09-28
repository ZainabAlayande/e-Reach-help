import React from "react";
import {
  ChakraBaseProvider,
  Box,
  Flex,
  Input,
  Icon,
  Badge,
  Avatar,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiSearch, FiBell, FiMail } from "react-icons/fi";
import { red } from "@mui/material/colors";
// import {ReactComponent as Logo} from "../../eReach/assets/svg/svg/logoBlack.svg";



const TopNav = () => {
  return (
    <ChakraBaseProvider>
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Box
          fontSize="3xl"
          fontWeight="extrabold"
          marginTop="2%"
          marginLeft="12%"
          color="#32C5FF"
        >
         Logo 
        </Box>

        <Flex alignItems="center" justifyContent="space-evenly">
          <Box display="flex" alignItems="center" justifyContent="space-evenly" mr={260}>
            <Input
            placeholder="Search..."
            size="sm"
            variant="outline"
            borderRadius="full"
            px={4}
            py={2}
            width="300px"
            height="30px"
            _placeholder={{ color: "gray.400" }}
            _focus={{ borderColor: "teal.400" }}
          />
            <Icon
              as={FiSearch}
              color="#FFFFFF"
              backgroundColor="#32C5FF"
              position="absolute"
              height="20px"
              width="20px"
              marginLeft="19%"
              borderRadius="full"
            />
          </Box>

          <Box mr={4} border="2px solid black" 
            borderRadius="full" width="300px" height="30px" justifyContent="center" 
            alignItems="center" alignContent="center">
            <Box fontSize="sm" fontWeight="bold">
              {new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </Box>
          </Box>

          <Box mr={4}>
            <Badge colorScheme="red">3</Badge>
            <Icon as={FiBell} ml={2} boxSize={6} />
          </Box>
          <Box mr={4}>
            <Badge colorScheme="red">5</Badge>
            <Icon as={FiMail} ml={2} boxSize={6} />
          </Box>
          <Avatar name="User" size="sm" />
        </Flex>
      </Flex>
    </ChakraBaseProvider>
  );
};

export default TopNav;




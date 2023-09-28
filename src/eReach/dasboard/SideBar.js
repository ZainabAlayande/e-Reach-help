import React from "react";
import { Box, VStack, Text, Icon, Flex } from "@chakra-ui/react";
import { FiHome, FiUser, FiUserCheck, FiCalendar } from "react-icons/fi";
import { LocalHospital } from "@mui/icons-material";
import Settings from "../../eReach/assets/svg/svg/setting-line-svgrepo-com.svg"
import {ReactComponent as Record} from "../../eReach/assets/svg/svg/record-svgrepo-com.svg"
import {ReactComponent as Logout} from "../../eReach/assets/svg/svg/logout-2-svgrepo-com.svg"


const SideBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      marginTop="-43%"
      marginLeft="2%"
      width="250px"
      justifyContent="space-between"
    >
      <Box bg="gray.200" width="200px" height="80vh" p={4}>
        <VStack align="left" spacing={4}>
          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                cursor: "pointer",
                _hover: "teal.50"
              }}
              _hover={{
                backgroundColor: "teal.50", 
                color: "black",
              }}
            >
              <Icon as={FiHome} boxSize={25} />
              <Text fontSize="4xl" fontWeight="bold" marginLeft="5%">
                Dashboard
              </Text>
            </Flex>
          </Box>


          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                marginRight: "23%",
                cursor: "pointer",
              }}
              
            >
              <Icon as={FiUser} boxSize={25} />
              <Text fontSize="3xl" fontWeight="bold" marginLeft="5%">
                User
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                marginRight: "15%",
                cursor: "pointer",
              }}
            >
              <Icon as={FiUserCheck} boxSize={25} />
              <Text fontSize="3xl" fontWeight="bold" marginLeft="5%">
                Profile
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                marginLeft: "9%",
                cursor: "pointer",
              }}
            >
              <Icon
                as={FiCalendar}
                boxSize={25}
                marginLeft="-5px"
                
              />
              <Text
                fontSize="3xl"
                fontWeight="bold"
                marginLeft="12%"
              >
                Appointment
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                cursor: "pointer",
                marginLeft:"-5px"
              }}
            >
              <Icon
                as={LocalHospital}
                boxSize={25}
                style={{ marginLeft: "-3%" }}
              />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{ marginRight: "5%" }}
              >
                Hospital
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                cursor: "pointer",
              }}
            >
              <Icon as={Record} boxSize={25} style={{ marginLeft: "-7%", color: "#32C5FF" }}/>
              <Text fontSize="lg" fontWeight="bold" style={{ marginRight: "7%" }}>
                Record
              </Text>
            </Flex>
          </Box>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                cursor: "pointer",
              }}
            >
              <Icon as={Settings} boxSize={25} style={{ marginLeft: "-7%" }} />
              <Text fontSize="lg" fontWeight="bold" style={{ marginRight: "7%" }}>
                Settings
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex
              style={{
                justifyContent: "space-evenly",
                color: "#32C5FF",
                cursor: "pointer",
              }}
            >
              <Icon as={Logout} boxSize={25} style={{ marginLeft: "-12%", color: "#32C5FF", }}/>
              <Text fontSize="lg" fontWeight="bold" style={{ marginRight: "7%" }}>
                Logout
              </Text>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default SideBar;

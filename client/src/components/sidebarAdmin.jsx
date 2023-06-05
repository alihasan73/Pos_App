import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo PIZZA PIZZAZZ.png";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineFastfood, MdOutlineInventory2 } from "react-icons/md";
import {
  AiOutlineFolderOpen,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
export default function SidebarAdmin() {
  return (
    <>
      <Flex
        flexDir={"column"}
        width={"200px"}
        h={"100vh"}
        position={"fixed"}
        zIndex={3}
        bg={"white"}
        // alignItems={"center"}
        border={"solid"}
        borderColor={"#CDD5DF"}
      >
        <Center>
          <Image src={logo} w={"100px"} mt={6} mb={5} />
        </Center>

        <Flex flexDir={"column"} gap={5} p={3}>
          <Box fontWeight={"bold"}>manage</Box>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <RxDashboard />
            Dashboard
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <MdOutlineFastfood />
            Product
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <AiOutlineFolderOpen />
            Categories
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <MdOutlineInventory2 />
            Inventory
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <HiOutlineDocumentReport />
            Report
          </Flex>
        </Flex>

        <Flex flexDir={"column"} gap={5} p={3}>
          <Box fontWeight={"bold"}>Preference</Box>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <RiUserSettingsLine />
            Admin Settings
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            bg={"#E3E8EF"}
          >
            <AiOutlineSetting />
            General
          </Flex>
          <Flex
            alignItems={"center"}
            gap={2}
            p={2}
            borderRadius={5}
            _hover={{ bg: "#B42318", color: "white" }}
            cursor={"pointer"}
            mt={"50px"}
            bg={"#E3E8EF"}
          >
            <AiOutlineLogout />
            Logout
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

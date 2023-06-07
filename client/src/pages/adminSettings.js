import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  TabIndicator,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import NavbarAdmin from "../components/navbarAdmin";
import SidebarAdmin from "../components/sidebarAdmin";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { SearchBarProduct } from "../components/SearchBarProduct";
import { CreateUser } from "../components/createUser";
import UserList from "../components/userList";
export default function AdminSettings() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [users, setUsers] = useState([]);
  const [all, setAll] = useState(0);
  const [admin, setAdmin] = useState([]);
  const [cashier, setCashier] = useState([]);

  const [totalPages, seTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState(undefined);

  const itemsPerPage = 5;

  useEffect(() => {
    fetchUser(currentPage);
  }, []);

  //fetch user
  const fetchUser = async (page, role, search = "") => {
    setCurrentPage(page);
    setRole(role);
    const response = await api.get("/users", {
      params: {
        page,
        limit: parseInt(itemsPerPage),
        role: role,
        search,
      },
    });
    console.log(response.data);
    const { users, totalPages, all, admin, cashier } = response.data;
    setUsers(users);
    seTotalPages(totalPages);
    setAll(all);
    setAdmin(admin);
    setCashier(cashier);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => fetchUser(i)}
          bg={i == currentPage ? "#B42318" : "white"}
          color={i == currentPage ? "white" : "black"}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <>
      <NavbarAdmin />
      <SidebarAdmin />
      <Box
        id="/products"
        w={"100vw"}
        bg={"#EEF2F6"}
        h={"100%"}
        pt={"88px"}
        pl={"200px"}
      >
        <Box w={"100%"} p={5}>
          <Box mb={5} fontWeight={"bold"}>
            ADMIN
          </Box>
          <Flex justifyContent={"space-between"} mb={5}>
            <Box id="input">
              <SearchBarProduct
              // category={category}
              // fetchProduct={fetchProduct}
              />
            </Box>

            <ButtonGroup isAttached variant="outline" onClick={onOpen}>
              <IconButton
                icon={<AiOutlinePlus />}
                bg={"#B42318"}
                color={"white"}
              ></IconButton>
              <Button bg={"white"}>User</Button>
              <CreateUser isOpen={isOpen} onClose={onClose} />
            </ButtonGroup>
          </Flex>

          <Box bg={"white"} w={"100%"} borderRadius={5} p={3} minH={"500px"}>
            <Tabs
              position="relative"
              variant="unstyled"
              maxW={"100%"}
              minH={"430px"}
            >
              <TabList>
                <Tab onClick={() => fetchUser(1)}>All ({all}) </Tab>
                <Tab onClick={() => fetchUser(1, "ADMIN")}>Admin({admin})</Tab>
                <Tab onClick={() => fetchUser(1, "CASHIER")}>
                  Cashier({cashier})
                </Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel id="all">
                  <UserList users={users} />
                </TabPanel>
                <TabPanel id="admin"></TabPanel>
                <TabPanel id="cashier"></TabPanel>
              </TabPanels>
            </Tabs>
            <Center gap={3} p={2}>
              {renderPagination()}
            </Center>
          </Box>
        </Box>
      </Box>
    </>
  );
}

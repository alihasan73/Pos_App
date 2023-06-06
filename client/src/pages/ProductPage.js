import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	TabIndicator,
	calc,
	useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import NavbarAdmin from "../components/navbarAdmin";
import SidebarAdmin from "../components/sidebarAdmin";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import ProductList from "../components/productList";
// import PizzaList from "../components/pizzaList";
import { CreateProduct } from "../components/createProduct";

export default function ProductPage() {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [query, setQuery] = useState("");
	const [totalPorduct, setTotalProduct] = useState([]);

	// useEffect(() => {
	// 	fetch();
	// }, []);

	// async function fetch() {
	// 	const response = await api.get("/products/v1");
	// 	const { count: dataCount } = response.data;
	// 	console.log(response.data);
	// 	setTotalProduct(dataCount);
	// }

	return (
		<>
			<NavbarAdmin />
			<SidebarAdmin />
			<Box w={"100vw"} bg={"#EEF2F6"} h={"100vh"} pt={"88px"} pl={"200px"}>
				<Box w={"100%"} p={5}>
					<Box mb={5} fontWeight={"bold"}>
						PRODUCT
					</Box>
					<Flex justifyContent={"space-between"} mb={5}>
						<InputGroup>
							<InputLeftElement>
								<FiSearch />
							</InputLeftElement>
							<Input
								w={"30%"}
								bg={"white"}
								placeholder="Search Product"
								type="text"
							/>
						</InputGroup>

						<ButtonGroup isAttached variant="outline" onClick={onOpen}>
							<IconButton
								icon={<AiOutlinePlus />}
								bg={"#B42318"}
								color={"white"}
							></IconButton>
							<Button bg={"white"}>Product</Button>
							<CreateProduct isOpen={isOpen} onClose={onClose} />
						</ButtonGroup>
					</Flex>

					<Box bg={"white"} w={"100%"} borderRadius={5} p={3}>
						<Tabs position="relative" variant="unstyled" maxW={"100%"}>
							<TabList>
								<Tab>All ({totalPorduct})</Tab>
								<Tab>Pizza</Tab>
								<Tab>Pasta</Tab>
								<Tab>Drinks</Tab>
							</TabList>
							<TabIndicator
								mt="-1.5px"
								height="2px"
								bg="blue.500"
								borderRadius="1px"
							/>
							<TabPanels>
								<TabPanel>
									<ProductList />
								</TabPanel>
								<TabPanel>{/* <PizzaList /> */}</TabPanel>
								<TabPanel>
									<p>three!</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Box>
				</Box>
			</Box>
		</>
	);
}

import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	IconButton,
	Image,
	Icon,
} from "@chakra-ui/react";
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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function SidebarCasher() {
	const dispatch = useDispatch();
	return (
		<>
			<Flex
				flexDir={"column"}
				width={"8%"}
				h={"100vh"}
				bg={"white"}
				border={"solid"}
				borderColor={"#CDD5DF"}
				align={"center"}
				justify={"space-between"}
			>
				<Flex flexDirection={"column"} align={"center"}>
					<Center>
						<Image src={logo} w={"100px"} mt={6} mb={5} />
					</Center>

					<Flex flexDir={"column"} gap={5} p={3} my={10}>
						<Link to="#">
							<ButtonGroup isAttached variant="outline" w={"100%"} mb={10}>
								<Icon as={RxDashboard} boxSize={10} />
							</ButtonGroup>
						</Link>
						<Link to="#">
							<ButtonGroup isAttached variant="outline" w={"100%"}>
								<Icon as={HiOutlineDocumentReport} boxSize={10} />
							</ButtonGroup>
						</Link>
					</Flex>
				</Flex>

				<Flex flexDir={"column"}>
					<Link to="">
						<ButtonGroup isAttached variant="outline" w={"100%"} mb={"100px"}>
							<Icon as={AiOutlineLogout} boxSize={10} />
						</ButtonGroup>
					</Link>
				</Flex>
			</Flex>
		</>
	);
}

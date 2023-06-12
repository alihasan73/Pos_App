import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
export default function Formtransaction() {
	return (
		<>
			<Box height={"100vh"} bg={"green.200"} w={"15%"} py={"20px"}>
				<Flex justify={"space-between"} px={"20px"}>
					<Text fontSize={"4xl"}>Order Detail</Text>
					<Box>
						<BsThreeDotsVertical size={"40px"} height={"40px"} width={"40px"} />
					</Box>
				</Flex>
				<Box px={"20px"}>
					<Flex justify={"center"} align={"left"} direction={"column"}>
						<Text fontSize={"2xl"} color={"grey"}>
							Monday, 21 october 2022
						</Text>
						<Text fontSize={"2xl"} color={"grey"}>
							#001
						</Text>
					</Flex>
				</Box>
				<Box mb={"20px"}>
					<Flex direction={"column"} justify={"center"} align={"center"}>
						<Button colorScheme="teal" variant="outline" w={"80"} mb={"10px"}>
							<AiOutlinePlus justify={"center"} align={"center"} />
							Add Customer Name
						</Button>
						<Button colorScheme="teal" variant="outline" w={"80"}>
							Dine in
						</Button>
					</Flex>
				</Box>
				<Box mb={"20px"}>
					<Flex justify={"space-around"}>
						<Text fontSize={"xl"} color={"grey"}>
							Super Supreme x2
						</Text>
						<Text fontSize={"xl"} color={"grey"}>
							Rp. 179.998
						</Text>
					</Flex>
				</Box>
				<Box mb={"20px"}>
					<Flex justify={"space-evenly"}>
						<Badge
							bg={"red.100"}
							color={"red.400"}
							fontSize={"md"}
							px={"10px"}
							py={"5px"}
						>
							Beef
						</Badge>
						<Badge
							bg={"red.100"}
							color={"red.400"}
							fontSize={"md"}
							px={"10px"}
							py={"5px"}
							display={"flex"}
						>
							<AiOutlinePlus justify={"center"} align={"center"} />
							<Text ml={"3"}>Beef</Text>
						</Badge>
						<Badge
							bg={"red.100"}
							color={"red.400"}
							fontSize={"md"}
							px={"10px"}
							py={"5px"}
							display={"flex"}
						>
							<AiOutlineMinus justify={"center"} align={"center"} />
							<Text ml={"3"}>Chicker</Text>
						</Badge>
					</Flex>
				</Box>
				<Box mb={"20px"}>
					<Flex justify={"space-around"}>
						<Text fontSize={"xl"} color={"grey"}>
							Super Supreme x2
						</Text>
						<Text fontSize={"xl"} color={"grey"}>
							Rp. 179.998
						</Text>
					</Flex>
				</Box>
				<Box>
					<Flex justify={"space-around"}>
						<Badge
							bg={"red.100"}
							color={"red.400"}
							fontSize={"md"}
							px={"10px"}
							py={"5px"}
						>
							Beef
						</Badge>
						<Badge
							bg={"red.100"}
							color={"red.400"}
							fontSize={"md"}
							px={"10px"}
							py={"5px"}
							display={"flex"}
						>
							<AiOutlinePlus justify={"center"} align={"center"} />
							<Text ml={"3"}>Beef</Text>
						</Badge>
						<Badge
							bg={"red.100"}
							color={"red.400"}
							fontSize={"md"}
							px={"10px"}
							py={"5px"}
							display={"flex"}
						>
							<AiOutlineMinus justify={"center"} align={"center"} />
							<Text ml={"3"}>Chicken</Text>
						</Badge>
					</Flex>
				</Box>
				<Box mt={"60"} mb={"40"}>
					<Flex justify={"center"} align={"center"}>
						<Button colorScheme="teal" variant="outline" w={"80"}>
							Clear Transaction
						</Button>
					</Flex>
				</Box>
				<Box mb={"10px"}>
					<Flex justify={"space-between"} px={"8"}>
						<Text fontSize={"xl"} color={"grey"}>
							Super Supreme x2
						</Text>
						<Text fontSize={"xl"} color={"grey"}>
							Rp. 179.998
						</Text>
					</Flex>
				</Box>
				<Box mb={"10px"}>
					<Flex justify={"space-between"} px={"8"}>
						<Text fontSize={"xl"} color={"grey"}>
							Tax 10%
						</Text>
						<Text fontSize={"xl"} color={"grey"}>
							Rp. 179.998
						</Text>
					</Flex>
				</Box>
				<Divider />
				<Box mt={"20px"}>
					<Flex justify={"space-between"} px={"8"}>
						<Button colorScheme="teal" variant="outline" w={"40"} mr={"5"}>
							Save Bill
						</Button>
						<Button colorScheme="teal" variant="outline" w={"40"}>
							Print Bill
						</Button>
					</Flex>
				</Box>
				<Box mt={"20px"}>
					<Flex justify={"center"} align={"center"}>
						<Button colorScheme="red" variant="outline" w={"300px"}>
							Charge
						</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
}

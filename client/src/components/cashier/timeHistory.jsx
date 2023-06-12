import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function TimeHistory() {
	const [data, setData] = useState([]);
	const [order, setOrder] = useState();
	const dispatch = useDispatch();
	const now = moment();

	const history = useSelector((state) => state.history);
	console.log(history);
	async function fetch() {
		const result = await api.get("/casher/histori");
		console.log(result.data);
		setData(result.data);
		if (result.data.length > 0) {
			const orderId = result.data[0].id;
			setOrder(orderId);
			dispatch({
				type: "history",
				payload: { id: orderId },
			});
		}
	}

	useEffect(() => {
		fetch();
	}, []);

	// localStorage.setItem("order", JSON.stringify(history.id));
	function handleClick(id) {
		// localStorage.setItem("order", JSON.stringify(id));
		console.log(id);
		dispatch({
			type: "history",
			payload: { id: id },
		});
	}
	function calculateTimeDifference(createdAt) {
		const now = moment().utc().local();
		const diff = moment.duration(now.diff(createdAt));
		const minutesDiff = diff.asHours();
		return minutesDiff;
	}

	return (
		<>
			<Box w={"20%"} h={"100vh"} overflowY="auto" ml={"112px"} mt={"75px"}>
				<Flex flexDirection={"column"}>
					{data.map((val) => (
						<Box key={val.id} onClick={() => handleClick(val.id)}>
							<Flex
								direction="column"
								justifyContent="flex-end"
								gap={2}
								py={6}
								borderBottom="1px solid #CDD5DF"
								borderRight="1px solid #CDD5DF"
							>
								<Text fontSize="2xl" marginLeft="auto" mr={5} color="#364152">
									{/* (`{const cal = val.createdAt;}`) */}
									{/* {calculateTimeDifference(val.createdAt)} */}
									{moment(val.createdAt).format("l")}
									{/* {moment.duration(now.diff(val.createdAt)).asMinutes()} */}
								</Text>
								<Text fontSize="2xl" marginLeft="auto" mr={5} color="#16B364">
									complete
								</Text>
							</Flex>
						</Box>
					))}
					{/* <Box>
						<Flex
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box> */}
					{/* <Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box>
					<Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box>
					<Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box>
					<Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box>
					<Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box>
					<Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box>
					<Box>
						<Flex
							// bg={"#CDD5DF"}
							direction={"column"}
							justifyContent="flex-end"
							gap={2}
							py={6}
							borderBottom="1px solid #CDD5DF"
							borderRight="1px solid #CDD5DF"
						>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#364152"}>
								5 min ago
							</Text>
							<Text fontSize={"2xl"} marginLeft="auto" mr={5} color={"#16B364"}>
								Completed
							</Text>
						</Flex>
					</Box> */}
				</Flex>
			</Box>
		</>
	);
}

import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Flex, Badge } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { api } from "../../api/api";
import { useSelector } from "react-redux";
import moment from "moment";
export function OrderDetailHistori() {
	const history = useSelector((state) => state.history);
	const [data, setData] = useState([]);

	async function fetch() {
		if (history.id) {
			const result = await api.get(`/casher/histori/detail?id=${history.id}`);
			console.log(result.data);
			setData(result.data);
		}
	}

	useEffect(() => {
		fetch();
	}, [history]);
	console.log(data);
	return (
		<>
			<Flex flexDirection={"column"} w={"72%"} p={"10"} mt={"75px"}>
				<Box mb={"20px"}>
					{data != null ? (
						<>
							{data?.map((val) => (
								<>
									<Text fontSize={"5xl"}>Order Detail</Text>
									<Divider bg="#ECE5C7" h={1} />
									<Flex
										justify={"space-between"}
										p={5}
										borderBottom="2px solid #CDD5DF"
									>
										<Text fontSize={"xl"}>Order from</Text>
										<Text fontSize={"xl"} color={"#606C5D"}>
											Mrs. Tyaa
										</Text>
									</Flex>
									<Flex
										justify={"space-between"}
										p={5}
										borderBottom="2px solid #CDD5DF"
									>
										<Text fontSize={"xl"}>Order ID</Text>
										<Text fontSize={"xl"} color={"#606C5D"}>
											{val.no_transaksi}
										</Text>
									</Flex>
									<Flex
										justify={"space-between"}
										p={5}
										borderBottom="2px solid #CDD5DF"
									>
										<Text fontSize={"xl"}>Time Order</Text>
										<Text fontSize={"xl"} color={"#606C5D"}>
											{moment(val.createdAt).format("l")}
										</Text>
									</Flex>
									<Flex
										justify={"space-between"}
										p={5}
										borderBottom="2px solid #CDD5DF"
									>
										<Text fontSize={"xl"}>Payment Method</Text>
										<Text fontSize={"xl"} color={"#606C5D"}>
											Cash
										</Text>
									</Flex>
								</>
							))}
						</>
					) : (
						<>
							<Text fontSize={"5xl"}>Tidak Ada Order Detail</Text>
						</>
					)}
				</Box>
				<Box>
					{data != null ? (
						<>
							{data?.map((val) => (
								<>
									<Text fontSize={"3xl"}>Items</Text>
									{val.TransactionDetails?.map((val) => (
										<>
											<Flex
												justify={"space-between"}
												p={5}
												borderBottom="2px solid #CDD5DF"
											>
												<Text fontSize={"xl"}>{val.Product.name}</Text>
												<Text fontSize={"xl"} color={"#606C5D"}>
													Rp {val.Product.price}
												</Text>
											</Flex>
										</>
									))}
									<Flex
										justify={"space-between"}
										p={5}
										borderBottom="2px solid #CDD5DF"
									>
										<Text fontSize={"2xl"} fontWeight={"bold"}>
											Total transaksi
										</Text>
										<Text
											fontSize={"2xl"}
											color={"#606C5D"}
											fontWeight={"bold"}
										>
											{val.total_price}
										</Text>
									</Flex>
								</>
							))}
						</>
					) : (
						<>
							<Text fontSize={"3xl"}>Tidak ada Items</Text>
						</>
					)}
				</Box>
			</Flex>
		</>
	);
}

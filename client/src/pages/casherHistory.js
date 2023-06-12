import SidebarCasher from "../components/sidebarCasher";
import { Flex, Spacer } from "@chakra-ui/react";
import TimeHistory from "../components/timeHistory";
import { OrderDetailHistori } from "../components/orderDetailHistori";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useSelector } from "react-redux";

export default function CasherHistory() {
	// const [data, setData] = useState([]);

	return (
		<>
			<Flex>
				<SidebarCasher />
				<TimeHistory />
				<OrderDetailHistori />
			</Flex>
		</>
	);
}

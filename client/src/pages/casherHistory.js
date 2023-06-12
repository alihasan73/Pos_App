import { Flex, Spacer } from "@chakra-ui/react";
import TimeHistory from "../components/cashier/timeHistory";
import { OrderDetailHistori } from "../components/cashier/orderDetailHistori";
import NavbarCashier from "../components/cashier/navbarCashier";
import SidebarCashier from "../components/cashier/sidebarCashier";
// import { useEffect, useState } from "react";
// import { api } from "../api/api";
// import { useSelector } from "react-redux";
// import sidebarCashier from "../components/cashier/sidebarCashier";

export default function CasherHistory() {
	return (
		<>
			<SidebarCashier />
			<NavbarCashier />
			<Flex>
				<TimeHistory />
				<OrderDetailHistori />
			</Flex>
		</>
	);
}

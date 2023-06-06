import { Route } from "react-router-dom";
import ProtectedPage from "./protectedPage";
import LoginPage from "../pages/cashierLoginPage";
import ProductPage from "../pages/ProductPage";

const routes = [
	<Route
		path="/login"
		key={"loginPage"}
		element={
			<ProtectedPage>
				<LoginPage />
			</ProtectedPage>
		}
	/>,
	<Route path="/admin" />,
	<Route path="/product" element={<ProductPage />} />,
	<Route path="cashier" />,
];

export default routes;

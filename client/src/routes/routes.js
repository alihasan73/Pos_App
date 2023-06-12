import { Route } from "react-router-dom";
import ProtectedPage from "./protectedPage";
import LoginPage from "../pages/loginPage";
import TestPage from "../pages/testPage";
import ProductPage from "../pages/ProductPage";
import DashboardAdminPage from "../pages/dashboardAdminPage";
import CategoryPage from "../pages/categoryPage";
<<<<<<< HEAD
import DashbordCasher from "../pages/dashboardCasherPage";
import AdminSettings from "../pages/adminSettings";
import CasherHistory from "../pages/casherHistory";

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

	<Route path="cashier" />,
	<Route
		path="/dashboardAdmin"
		element={
			<ProtectedPage adminOnly={true}>
				<DashboardAdminPage />
			</ProtectedPage>
		}
	/>,
	<Route
		path="/products"
		element={
			<ProtectedPage adminOnly={true}>
				<ProductPage />
			</ProtectedPage>
		}
	/>,
	<Route
		path="/categories"
		element={
			<ProtectedPage adminOnly={true}>
				<CategoryPage />
			</ProtectedPage>
		}
	/>,

	<Route
		path="/adminSettings"
		element={
			<ProtectedPage adminOnly={true}>
				<AdminSettings />
			</ProtectedPage>
		}
	/>,

	<Route path="/test" element={<TestPage />} />,
	<Route path="/casher" element={<DashbordCasher />} />,
	<Route path="/casherHistory" element={<CasherHistory />} />,
=======
import AdminSettings from "../pages/adminSettings";

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

  <Route path="cashier" />,
  <Route
    path="/dashboardAdmin"
    element={
      <ProtectedPage adminOnly={true}>
        <DashboardAdminPage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/products"
    element={
      <ProtectedPage adminOnly={true}>
        <ProductPage />
      </ProtectedPage>
    }
  />,
  <Route
    path="/categories"
    element={
      <ProtectedPage adminOnly={true}>
        <CategoryPage />
      </ProtectedPage>
    }
  />,

  <Route
    path="/adminSettings"
    element={
      <ProtectedPage adminOnly={true}>
        <AdminSettings />
      </ProtectedPage>
    }
  />,

  <Route path="/test" element={<TestPage />} />,
>>>>>>> 8fee927a57769c9f970eaa0101a26b59553efce2
];

export default routes;

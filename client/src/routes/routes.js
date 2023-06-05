import { Route } from "react-router-dom";
import ProtectedPage from "./protectedPage";
import LoginPage from "../pages/cashierLoginPage";
import Category from "../components/category";

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
  <Route path="cashier" />,
  <Route path="/category" key={"category"} element={<Category />} />,
];

export default routes;

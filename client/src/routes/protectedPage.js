import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({
  children,
  adminOnly = false,
  cashierOnly = false,
}) {
  const userSelector = useSelector((state) => state.auth);
  const nav = useNavigate();

  useEffect(() => {
    if (adminOnly && userSelector.email && userSelector.role == "admin") {
      //jika bukan admin dan login maka ke dashboard cashier
      return nav("/admin");
    } else if (cashierOnly && userSelector.email) {
      //jika bukan cashier dan login maka ke dashboard admin
      return nav("");
    } else if (!adminOnly && !cashierOnly && !userSelector.email) {
      return nav("/login");
    }
  }, [userSelector, adminOnly, cashierOnly]);

  return <>{children}</>;
}

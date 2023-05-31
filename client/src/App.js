import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import routes from "./routes/routes";
import { Box } from "@chakra-ui/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Box>asasf</Box>
      ) : (
        <Routes>{routes.map((val) => val)}</Routes>
      )}
    </>
  );
}

export default App;

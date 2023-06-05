import {
  Box,
  Center,
  Flex,
  Input,
  Text,
  Button,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  async function fetchCategories() {
    const response = await axios.get("http://localhost:2000/categories");
    const categories = response.data;
    setCategory(categories);
    setTotal(categories.length);
    setTotalPages(Math.ceil(categories.length / 5));
  }

  async function deleteCategory(id) {
    await axios.delete(`http://localhost:2000/categories/${id}`);
    fetchCategories();
  }

  useEffect(() => {
    fetchCategories();
    const interval = setInterval(fetchCategories, 5000);

    // Bersihin interval tiap loop
    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedCategories = category.slice(startIndex, endIndex);

  return (
    <Box m="88px 0px 0 248px" pl={"24px"} pr={"24px"} w={"1152px"} h={"630px"}>
      <Text fontSize={"24px"} w={"120px"} pt={"24px"}>
        Categories
      </Text>
      <Flex
        flexDir={"row"}
        justify={"space-between"}
        alignItems={"center"}
        w={"1100px"}
        pt={"24px"}
      >
        <Input
          h={"40px"}
          w={"564px"}
          placeholder="Search Categories"
          borderRadius={5}
        ></Input>

        <Button borderRadius={"8px"} bg={"#B42318"} w={"119px"} h={"36px"}>
          <Text color={"white"}>+ Category</Text>
        </Button>
      </Flex>
      <Box pt={"24px"} w={"1100px"} h={"400px"}>
        <Flex w={"100%"} flexDir={"row"}>
          <Center w={"49px"} h={"36px"} bgColor={"#FEE4E2"}>
            No
          </Center>
          <Center w={"399px"} h={"px36"} bgColor={"#FECDCA"}>
            Category Name
          </Center>
          <Center w={"278px"} h={"36px"} bgColor={"#FEE4E2"}>
            Total Product
          </Center>
          <Center w={"261px"} h={"36px"} bgColor={"#FEE4E2"}>
            Status
          </Center>
          <Center w={"125px"} h={"36px"} bgColor={"#FEE4E2"}>
            {" "}
          </Center>
        </Flex>
        {paginatedCategories.map((val, idx) => (
          <Card
            key={val.id}
            {...val}
            delete={() => deleteCategory(val.id)}
            number={startIndex + idx + 1}
          />
        ))}
      </Box>
      <Flex w={"1100px"}>
        <Text>{total} Records found</Text>
      </Flex>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}

function Card(props) {
  console.log(props);
  return (
    <Flex w={"100%"} flexDir={"row"}>
      <Center w={"49px"} h={"62px"}>
        {props.number}
      </Center>
      <Flex w={"399px"} h={"62px"}>
        <Center w={"70px"} h={"100%"}>
          img
        </Center>
        <Flex w={"100%"} h={"100%"} align={"center"}>
          {props.NamaCategori}
        </Flex>
      </Flex>
      <Center w={"278px"} h={"62px"}>
        {props.TotalProduct} pcs
      </Center>
      <Center w={"261px"} h={"62px"}>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent={"center"}
        >
          <Switch
            defaultChecked={props.Status === "AVAILABLE" ? true : false}
            colorScheme={"green"}
          />
        </FormControl>
      </Center>
      <Center w={"125px"} h={"62px"}>
        <Flex gap={"29px"}>
          <BiEdit />
          <BsTrash onClick={props.delete} />
        </Flex>
      </Center>
    </Flex>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxDisplayPages = 5;
  let startPage = Math.max(currentPage - Math.floor(maxDisplayPages / 2), 1);
  const endPage = Math.min(startPage + maxDisplayPages - 1, totalPages);

  if (totalPages - endPage < Math.floor(maxDisplayPages / 2)) {
    startPage = Math.max(
      startPage - (Math.floor(maxDisplayPages / 2) - (totalPages - endPage)),
      1
    );
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <Flex justifyContent="center" my={4}>
      {pages.map((page) => (
        <Button
          w={"23PX"}
          h={"24px"}
          key={page}
          mx={1}
          variant={currentPage === page ? "solid" : "outline"}
          colorScheme={"red"}
          onClick={() => onPageChange(page)}
          border={"transparent"}
        >
          {page}
        </Button>
      ))}
    </Flex>
  );
}

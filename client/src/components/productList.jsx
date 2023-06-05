import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// import ProductCard from "./productCard";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { EditProduct } from "./editProduct";
import { DeleteProduct } from "./deleteProduct";

export default function ProductList() {
  const [editProductId, setEditProductId] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const modalEdit = useDisclosure();
  const modalDelete = useDisclosure();

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  console.log(products);
  console.log(totalPages);

  useEffect(() => {
    fetchProduct(currentPage);
  }, [currentPage]);

  //fetchProducts
  async function fetchProduct(page) {
    // try {
    const response = await api.get("/products", {
      params: {
        page,
        limit: parseInt(itemsPerPage),
      },
    });
    console.log(response.data);
    const { products: dataProducts, totalPages: dataTotalPages } =
      response.data;
    setProducts(dataProducts);
    setTotalPages(dataTotalPages);
    // } catch (err) {
    // console.log(err.message);
    // }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          _focus={{ bg: "#B42318", color: "white" }}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th w={"5%"}>No</Th>
            <Th w={"10%"}>Image</Th>
            <Th w={"30%"}>Name</Th>
            <Th w={"20%"}>Category</Th>
            <Th w={"15%"}>Price</Th>
            <Th w={"10%"}> edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((val) => (
            <Tr key={val.id}>
              <Td>{val.id}</Td>
              <Td>
                <Image src={val.product_url} w={"100px"} h={"70px"} />
              </Td>
              <Td>{val.name}</Td>
              <Td>{val.Category.name}</Td>
              <Td>{val.price}</Td>
              <Td>
                <Flex justifyContent={"space-between"}>
                  <Button
                    aria-label="edit"
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setEditProductId(val.id);
                      modalEdit.onOpen();
                    }}
                  >
                    {<EditIcon />}
                    <EditProduct
                      id={editProductId}
                      isOpen={modalEdit.isOpen}
                      onClose={modalEdit.onClose}
                    />
                  </Button>
                  <Button
                    onClick={() => {
                      setDeleteProductId(val.id);
                      modalDelete.onOpen();
                    }}
                    aria-label="Delete"
                    size="sm"
                    variant="ghost"
                  >
                    {<DeleteIcon />}
                    <DeleteProduct
                      id={deleteProductId}
                      isOpen={modalDelete.isOpen}
                      onClose={modalDelete.onClose}
                    />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Center gap={3} p={2}>
        {renderPagination()}
      </Center>
    </>
  );
}

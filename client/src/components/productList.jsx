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
import { CreateProduct } from "./createProduct";

export default function ProductList() {
	const [editProductId, setEditProductId] = useState(null);
	const [deleteProductId, setDeleteProductId] = useState(null);
	const [products, setProducts] = useState([]);
	const modalEdit = useDisclosure();
	const modalDelete = useDisclosure();

	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	async function fetchProduct() {
		try {
			const response = await api.get("/product/");
			setProducts(response.data);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchProduct();
	}, []);

	const handleDataChange = () => {
		fetchProduct();
	};
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
						<Th w={"20%"}>Image</Th>
						<Th w={"20%"}>Name</Th>
						<Th w={"20%"}>Description</Th>
						<Th w={"15%"}>Price</Th>
						<Th w={"10%"}>Aksi</Th>
					</Tr>
				</Thead>
				<Tbody>
					{products?.map((val, idx) => (
						<Tr key={val.id}>
							<Td>{idx + 1}</Td>
							<Td>
								<Image src={val.product_url} w={"100px"} h={"70px"} />
							</Td>
							<Td>{val.name}</Td>
							<Td>{val.description}</Td>
							<Td>{rupiah(val.price)}</Td>
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
											handleChange={handleDataChange}
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
											handleChange={handleDataChange}
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

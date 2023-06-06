import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Center,
	Box,
	Flex,
} from "@chakra-ui/react";
import { api } from "../api/api";
import { useEffect, useState } from "react";

export function DeleteProduct(props) {
	const [product, setProduct] = useState({});

	async function fetchData() {
		const result = await api.get(`/product/detail?product_id=${props.id}`);
		console.log(result);
		setProduct(result.data);
	}
	// console.log(product);

	useEffect(() => {
		fetchData();
	}, [props.isOpen]);
	const deleteProduct = async () => {
		await api.delete("/product/" + props.id);
		alert("deleted");
		props.onClose();
		props.handleChange();
	};

	return (
		<>
			<Modal onClose={props.onClose} size={"xs"} isOpen={props.isOpen}>
				<ModalOverlay />
				<ModalContent mt={"300px"}>
					<ModalHeader>Konfirmasi Hapus Data </ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Apakah anda yakin akan menghapus data {product.name}?
					</ModalBody>
					<ModalFooter gap={5}>
						<Button onClick={props.onClose}>Cancel</Button>
						<Button onClick={deleteProduct}>Delete</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

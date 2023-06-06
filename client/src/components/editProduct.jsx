import {
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Box,
	Image,
	Input,
	Select,
} from "@chakra-ui/react";
// import iconphoto from "../assets/icon.png";
import { useEffect, useRef, useState } from "react";
import { api } from "../api/api";

export function EditProduct(props) {
	const [category, setCategory] = useState([]);
	const [SelectedFile, setSelectedFile] = useState(null);
	const inputFileRef = useRef(null);
	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: "",
		category_id: "",
	});
	const [image, setImage] = useState(iconphoto);

	async function fetchData() {
		const result = await api.get(`/product/detail?product_id=${props.id}`);
		console.log(result);
		setProduct(result.data);
	}
	console.log(product);

	useEffect(() => {
		fetchData();
	}, [props.isOpen]);
	const inputHandler = (e) => {
		const { id, value } = e.target;
		const tempProduct = { ...product };
		tempProduct[id] = value;
		console.log(tempProduct);
		setProduct(tempProduct);
	};
	const editProduct = async () => {
		if (
			!(product.name && product.description && product.price && SelectedFile)
		) {
			alert("isi semua");
		} else {
			const formData = new FormData();
			formData.append("product", SelectedFile);
			formData.append("name", product.name);
			formData.append("description", product.description);
			formData.append("price", product.price);

			console.log(formData);
			const res = await api.patch(`/product/${props.id}`, formData);

			alert("berhasil mengubah produk");
			props.handleChange();
			props.onClose();
		}
	};

	// const handleFile = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	console.log(event.target.files[0]);
	// };

	const handleFile = (event) => {
		setSelectedFile(event.target.files[0]);
		console.log(event.target.files[0]);
		setImage(URL.createObjectURL(event.target.files[0]));
	};

	return (
		<>
			<Modal
				isOpen={props.isOpen}
				onClose={() => {
					setImage(iconphoto);
					props.onClose();
				}}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex justifyContent={"space-between"} alignItems={"center"}>
							<Input
								accept="image/png, image/jpeg"
								onChange={handleFile}
								ref={inputFileRef}
								type="file"
								display="none"
								// id="product_url"
							/>
							<Image
								src={image}
								w={"100px"}
								h={"100px"}
								onClick={() => {
									inputFileRef.current.click();
								}}
							/>
							<Flex flexDir={"column"} w={"70%"}>
								Product Name
								<Input id="name" onChange={inputHandler} />
								Price
								<Input id="price" onChange={inputHandler} />
							</Flex>
						</Flex>
						<Box>
							Description
							<Input id="description" onChange={inputHandler} />
						</Box>
						<Box pt={5}>
							<Select
								placeholder="Pilih category.."
								id="category_id"
								onChange={inputHandler}
							>
								{category?.map((val) => (
									<option key={val.id} value={val.id}>
										{val.name}
									</option>
								))}
							</Select>
						</Box>
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" onClick={editProduct}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

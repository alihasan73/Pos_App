import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { DeleteUser } from "../components/deleteUser";
import { EditUser } from "../components/editUser";
export default function UserList({ users }) {
  const [editUserId, setEditUserId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const modalEdit = useDisclosure();
  const modalDelete = useDisclosure();

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th w={"5%"}>No</Th>
            <Th w={"10%"}>Image</Th>
            <Th w={"30%"}>Name</Th>
            <Th w={"20%"}>role</Th>
            <Th w={"15%"}>email</Th>
            <Th w={"10%"}> phone</Th>
            <Th>edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((val) => (
            <Tr key={val.id}>
              <Td>{val.id}</Td>
              <Td>
                <Avatar src={val.avatar_url} size={"lg"} />
              </Td>
              <Td>{val.name}</Td>
              <Td>{val.role}</Td>
              <Td>{val.email}</Td>
              <Td>{val.phone}</Td>
              <Td>
                <Flex justifyContent={"space-between"}>
                  <Button
                    aria-label="edit"
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      //   setEditProductId(val.id);
                      //   setName(val.name);
                      //   setPrice(val.price);
                      //   setDescription(val.description);
                      //   setCategory_id(val.category_id);
                      //   setProduct_url(val.product_url);
                      modalEdit.onOpen();
                    }}
                  >
                    {<EditIcon />}
                    <EditUser
                    //   id={editProductId}
                    //   isOpen={modalEdit.isOpen}
                    //   onClose={modalEdit.onClose}
                    //   name={name}
                    //   price={price}
                    //   description={description}
                    //   category_id={category_id}
                    //   product_url={product_url}
                    />
                  </Button>
                  <Button
                    onClick={() => {
                      setDeleteUserId(val.id);

                      modalDelete.onOpen();
                    }}
                    aria-label="Delete"
                    size="sm"
                    variant="ghost"
                  >
                    {<DeleteIcon />}
                    <DeleteUser
                      //   id={deleteProductId}
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
    </>
  );
}

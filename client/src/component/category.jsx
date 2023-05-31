import { Box, Center, Flex, Input, Text, Button } from "@chakra-ui/react";

export default function Category() {
  return (
    // <Box width={1440} height={1024}>
    <Box m="88px 0px 0 248px" pl={24} pr={24} w={1192} h={936}>
      <Text fontSize={24} w={120}>
        Categories
      </Text>
      <Flex
        flexDir={"row"}
        justify={"space-between"}
        alignItems={"center"}
        w={1100}
      >
        <Input
          h={40}
          w={564}
          placeholder="Search Cathegories"
          borderRadius={5}
        ></Input>

        <Button borderRadius={8} bg={"#B42318"} w={119} h={36}>
          <Text color={"white"}>+ Category</Text>
        </Button>
      </Flex>
      <Box pt={24} w={1100}>
        <Flex w={"100%"} flexDir={"row"}>
          <Center w={49} h={36} bgColor={"#FEE4E2"}>
            No
          </Center>
          <Center w={399} h={36} bgColor={"#FECDCA"}>
            Category Name
          </Center>
          <Center w={278} h={36} bgColor={"#FEE4E2"}>
            Total Product
          </Center>
          <Center w={261} h={36} bgColor={"#FEE4E2"}>
            Status
          </Center>
          <Center w={125} h={36} bgColor={"#FEE4E2"}>
            {" "}
          </Center>
        </Flex>
      </Box>
    </Box>
    // </Box>
  );
}

// function Card() {

// }

import { Avatar, Box, Center, Flex, Input } from "@chakra-ui/react";

export default function NavbarAdmin() {
  return (
    <>
      <Center position={"fixed"} zIndex={2}>
        <Box
          pl={"200px"}
          w={"100vw"}
          // maxW={"1119px"}
          h={"88px"}
          border={"solid"}
          borderColor={"#CDD5DF"}
          bg={"white"}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            m={"17px 15px"}
            // bg={"white"}
          >
            <Box w={"385px"}>
              <Input
                variant={"filled"}
                placeholder="Search document or Product"
                w={"80%"}
              />
            </Box>
            <Flex gap={3} alignItems={"center"}>
              <Box flexDir={"column"} fontSize={"sm"}>
                <Box>fahmi nurkamil</Box>
                <Box float={"right"} color={"gray"}>
                  admin
                </Box>
              </Box>
              <Box>
                <Avatar w={"40px"} h={"40px"} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
}

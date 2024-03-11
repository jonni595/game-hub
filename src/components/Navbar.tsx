import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize={{ base: "40px", md: "60px" }} />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;

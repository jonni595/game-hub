import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack
      justifyContent="space-between"
      padding={{ base: "5px", md: "10px" }}
    >
      <Image src={logo} alt="logo" boxSize={{ base: "40px", md: "60px" }} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

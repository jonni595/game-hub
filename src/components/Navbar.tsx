import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar: React.FC<Props> = ({ onSearch }) => {
  return (
    <HStack padding={{ base: "5px", md: "10px" }}>
      <Image src={logo} alt="logo" boxSize={{ base: "40px", md: "60px" }} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

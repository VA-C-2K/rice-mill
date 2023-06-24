import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GlobalState } from "../context/global-state-context";

const SearchField = ({ searchBy }) => {
    const { searchTerm,setSearchTerm } = GlobalState();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon  color="#609966" />
      </InputLeftElement>
      <Input
        placeholder={`Search ${searchBy}`}
        value={searchTerm}
        onChange={handleInputChange}
        borderRadius="md"
        variant="outline"
        focusBorderColor="#609966"
        _placeholder={{ opacity: 0.5, color: "#40513B" }}
        color="#609966"
        fontWeight={500}
        border="1px"
        bg="white"
        width="100%"
      />
    </InputGroup>
  );
};

export default SearchField;

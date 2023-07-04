import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GlobalState } from "../context/global-state-context";
import CustomButton from "./CustomButton";
import { useCallback } from "react";

const SearchField = ({ searchBy, loading }) => {
  const { searchTerm, setSearchTerm } = GlobalState();

  const handleInputChanges = useCallback(
    (event) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm]
  );

  return (
    <InputGroup>
      <Input
        placeholder={`Search ${searchBy}`}
        value={searchTerm}
        borderRadius="md"
        variant="outline"
        onChange={handleInputChanges}
        focusBorderColor="#609966"
        _placeholder={{ opacity: 0.5, color: "#40513B" }}
        color="#609966"
        fontWeight={500}
        border="1px"
        bg="white"
        width="100%"
      />
      <InputRightElement>
        <CustomButton isLoading={loading} bg="transparent" color="#609966" _hover={{ bg: "#4a875d", color: "#EDF1D6" }}>
          <SearchIcon />
        </CustomButton>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchField;

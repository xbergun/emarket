import React, { useState } from 'react';
import { Input, Icon, Stack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

function ProductFilter({ onFilterChange }) {
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = () => {
    onFilterChange(searchText);
  };

  const handleInputChange = (text) => {
    setSearchText(text);
    onFilterChange(text);
  };

  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{ base: '90%', md: '25%' }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={10}
            ml="2"
            color="#2A59FE4D"
          />
        }
        placeholder="Search for products"
        placeholderTextColor={'#2A59FE4D'}
        size={10}
        value={searchText}
        onChangeText={handleInputChange}
        onSubmitEditing={handleFilterChange}
      />
    </Stack>
  );
}

export default ProductFilter;
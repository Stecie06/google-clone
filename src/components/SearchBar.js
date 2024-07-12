import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
//   margin-top: 20vh;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 18px;
  border-radius: 24px;
  border: 1px solid #dfe1e5;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 18px;
  border-radius: 24px;
  border: none;
  background-color: #4285f4;
  color: white;
  cursor: pointer;
`;

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.example.com/search?q=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <SearchBarWrapper>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Google"
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;

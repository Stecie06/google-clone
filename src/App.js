import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  text-align: center;
  background-color: #202124;
  color: #fff;
  height: 100vh;
`;

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <AppWrapper>
      <h1 className='title'>Google Clone</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </AppWrapper>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Result = styled.div`
  width: 60%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchResults = ({ results }) => {
  return (
    <ResultsWrapper>
      {results.map((result, index) => (
        <Result key={index}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
          <a href={result.link}>Read more</a>
        </Result>
      ))}
    </ResultsWrapper>
  );
};

export default SearchResults;

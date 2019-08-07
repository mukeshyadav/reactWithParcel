import React from "react";
import styled from "styled-components";

const StyledSearch = styled.input.attrs({
  type: "search",
  maxLength: 5
})`
  -webkit-appearance: none;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  height: 23px;
  width: 200px;
  font-size: 12px;
  float: left;
  padding: 10px;
  outline: none;
`;

export default function SearchBar({ placeholder, onSearchById }) {
  return (
    <StyledSearch
      placeholder={placeholder}
      onKeyUp={e => onSearchById(e.target.value)}
    />
  );
}

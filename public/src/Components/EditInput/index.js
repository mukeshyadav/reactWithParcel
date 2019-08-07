import React from "react";
import styled from "styled-components";
const StyledEditableInput = styled.div.attrs({
  contentEditable: true,
  suppressContentEditableWarning: true
})`
  display: inline-block
  outline: none
  padding: 5px 15px 5px 5px
  width: 300px
  :focus {
    background-color: #fefebe;
  }
`;

export default function EditInput({ value, onChangeInputText, id }) {
  return (
    <React.Fragment>
      <StyledEditableInput
        dangerouslySetInnerHTML={{ __html: value }}
        onBlur={e => onChangeInputText(id, e.target.innerHTML)}
      />
    </React.Fragment>
  );
}

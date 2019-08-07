import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledIconSea, StyledIconAir } from "../Styles/GlobalStyles";
import IconEdit from "../../resources/images/ico-edit.svg";
import EditInput from "../EditInput/";

const StyledTable = styled.table`
    width: 100%
    border: 1px solid #F1F3F3
    border-collapse: collapse
    font-size: 14px
    td {
        border-top: 1px solid #F1F3F3
    }
    th, td {
        padding: 10px
    }
    th {
        background-color: #F1F3F3
        padding: 15px 10px
        text-align: left
        text-transform: uppercase
    }
    tbody tr:hover > td {
        background-color: #f7f7f7
        &.show-ico-edit{
          &:after{
            visibility: visible
          }
          
        }
    }
    .show-ico-edit {
      position: relative;
      &:after{
        content: "";
        display: inline-block;
        background: transparent url(${IconEdit}) 100% 0 no-repeat
        background-size: 15px
        height: 15px;
        width: 15px;
        cursor: pointer
        position: absolute;
        right: 15px;
        top: 18px;
        visibility: hidden;
      }
    }
`;

const StyledLink = styled(Link)`
  color: #0397d9;
  text-decoration: none;
  &:hover {
    color: #2e6da4;
  }
`;

const StyledInputEdit = styled.input`
  font-size: 14px;
  background: transparent
  border: none;
`;

const StyledNoRecords = styled.p`
  color: #ff0000;
`;

export default function List({ lists, onChangeInputText }) {
  const isRecord = lists.length ? true : false;
  return (
    <React.Fragment>
      {isRecord ? (
        <StyledTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mode</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {lists.map(list => {
              const { id, name, mode, origin, destination, status } = list;
              return (
                <tr key={id}>
                  <td>
                    <StyledLink to={`/details/${id}`}>{id}</StyledLink>
                  </td>
                  <td>
                    {mode === "sea" ? <StyledIconSea /> : <StyledIconAir />}
                  </td>
                  <td className="show-ico-edit">
                    <EditInput
                      value={name}
                      onChangeInputText={onChangeInputText}
                      id={id}
                    />
                  </td>
                  <td>{origin}</td>
                  <td>{destination}</td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      ) : (
        <StyledNoRecords>
          No Records Found, change search criteriea.
        </StyledNoRecords>
      )}
    </React.Fragment>
  );
}

import React from 'react'
import styled from 'styled-components'
import { StyledIconSea, StyledIconAir } from '../Styles/GlobalStyles'

export const ShipmentTitle = styled.h3`
    font-size: 18px
    font-weight: normal
    margin: 15px 0
`

export const ListInline = styled.ul`
    align-items: center
    display: flex
    font-size: 14px
    font-weight: normal
    justify-content: flex-start
    margin: 10px 0
    > li {
        border-left: 1px solid #ccc
        display: inline-block
        padding: 0 10px
        &:first-child {
            border-left: 0
            padding-left: 0
        }
    }
`

export const ListNewLine = styled.ol`
    font-size: 14px
    font-weight: normal
    list-style-position: inside
    margin: 0
    padding: 0
    > li {
       padding: 5px 0; 
    }
`

export const ShipmentSubTitle = styled.h3`
    font-size: 16px
    font-weight: bold
    margin: 15px 0
`

const getOrderList = (arrList) => {
  return arrList.map((list, index) => {
    const { type = null, description = null } = list
    return (<li key={`type${index}`}>
              {type}
              {type && description ? ' | ' : ''}
              {description}
            </li>)
  })
}

export default function ListDetails (props) {
  const { id, name, cargo, mode, type, destination, origin, services, total, status, userId } = props.details

  return (
    <React.Fragment>
      <ShipmentTitle>
        {name}
      </ShipmentTitle>
      <ListInline>
        <li>
          <strong>ID</strong>:
          {id}
        </li>
        <li>
          <strong>User ID</strong>:
          {userId}
        </li>
        <li>
          <strong>Status</strong>:
          {status}
        </li>
        <li>
          {mode === 'sea' ? <StyledIconSea /> : <StyledIconAir />}
        </li>
      </ListInline>
      <ListInline>
        <li>
          <strong>Origin</strong>:
          {origin}
        </li>
        <li>
          <strong>Destination</strong>:
          {destination}
        </li>
      </ListInline>
      <ShipmentSubTitle>
        Cargo:
      </ShipmentSubTitle>
      <ListNewLine>
        {getOrderList(cargo)}
      </ListNewLine>
      <ShipmentSubTitle>
        Services:
      </ShipmentSubTitle>
      <ListNewLine>
        {getOrderList(services)}
      </ListNewLine>
    </React.Fragment>)
}

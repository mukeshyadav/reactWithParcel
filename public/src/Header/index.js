import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Wrapper } from '../Components/Styles/GlobalStyles.js'

const Logo = styled.h1`
  font-size: 24px
  height: 25px
  width: 183px
`

const StyledHeader = styled.header`
  border-bottom: 1px solid #f2f2f2
`

export default function Header () {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo>
          ShipmentHubPortal
        </Logo>
      </Wrapper>
    </StyledHeader>
  )
}

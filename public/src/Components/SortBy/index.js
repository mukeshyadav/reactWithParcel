import React from 'react'
import styled from 'styled-components'

const StyledSortBy = styled.div`
    display: flex
    align-items: center
    font-size: 12px
    margin-left: 15px
    > label {
        margin: 0 5px
    }
`

const optionsList = options => {
  return options.map(option => <option value={option} key={option}>
                                 {option}
                               </option>)
}

export default function SortyBy ({options, onChangeSort }) {
  return (
    <StyledSortBy>
      <label>
        Sort By:
      </label>
      <select onChange={e => onChangeSort(e)}>
        <option value=''>
          Select an Option
        </option>
        {optionsList(options)}
      </select>
    </StyledSortBy>
  )
}

import React from 'react'
import styled from 'styled-components'
import AppShipmentContext from '../../store'

export const ListInline = styled.ul`
    align-items: center
    display: flex
    font-size: 14px
    font-weight: normal
    justify-content: flex-end
    margin: 20px 0
    > li {
        cursor: pointer
        display: inline-block
        padding: 10px
        &:first-child {
            border-left: 0
        }
        &:hover {
          background-color: #ccc
        }
        &.active{
          cursor: default
          background-color: #aaa
          color: #fff
        }
    }
`

const preparePaginationList = (objPagination, event) => {
  const { pageSize, totalRecords, pageIndex } = objPagination

  const totalPages = Math.ceil(totalRecords / pageSize)
  return new Array(totalPages).fill(0).map((list, index) => <li onClick={e => event(index + 1)} key={`list${index}`} className={pageIndex === index + 1 ? 'active' : ''}>
                                                              {index + 1}
                                                            </li>)
}

export default function Pagination () {
  return (
    <AppShipmentContext.Consumer>
      {ctx => <ListInline>
                {preparePaginationList(ctx.pagination, ctx.onPaginationChange)}
              </ListInline>}
    </AppShipmentContext.Consumer>
  )
}

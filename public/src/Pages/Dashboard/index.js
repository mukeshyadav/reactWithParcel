import React, { Component } from 'react'

import { Wrapper, PageTitle, FlexInline } from '../../Components/Styles/GlobalStyles.js'

import ResultList from '../../Components/List'
import Pagination from '../../Components/Pagination'
import SearchBar from '../../Components/Search'
import SortBy from '../../Components/SortBy'
import AppShipmentContext from '../../store'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper>
        <AppShipmentContext.Consumer>
          {ctx => ctx.isLoader ? (
             'Loading...'
             ) : (
             <React.Fragment>
               <PageTitle>
                 Shipments
               </PageTitle>
               <FlexInline>
                 <SearchBar placeholder='Search by ID' onSearchById={ctx.onSearchById} />
                 <SortBy options={ctx.options} onChangeSort={ctx.onChangeSort} />
               </FlexInline>
               <ResultList lists={ctx.shipmentList} onChangeInputText={ctx.onChangeInputText} />
               {ctx.pagination.isPagination ? <Pagination /> : null}
             </React.Fragment>
             )}
        </AppShipmentContext.Consumer>
      </Wrapper>
    )
  }
}

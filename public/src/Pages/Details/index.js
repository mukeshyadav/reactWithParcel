import React, { Component } from 'react'
import { Wrapper, PageTitle } from '../../Components/Styles/GlobalStyles.js'

import ResultListDetails from '../../Components/ListDetails'
import AppShipmentContext from '../../store'

export default class Details extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const shipmentId = this.props.match.params.id
    return (
      <Wrapper>
        <PageTitle>
          Shipments Details
        </PageTitle>
        <AppShipmentContext.Consumer>
          {ctx => ctx.isLoader ? 'Loading...' : <ResultListDetails details={ctx.getShipmentsDetails(shipmentId)[0]} />}
        </AppShipmentContext.Consumer>
      </Wrapper>

    )
  }
}

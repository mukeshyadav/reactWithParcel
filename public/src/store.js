import React, { Component } from "react";
import { getShipments, updateShipment } from "./Service/service.js";
import { debug } from "util";

const AppShipmentContext = React.createContext();

export class AppShipmentProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipments: [],
      shipmentList: [],
      isLoader: true,
      pagination: {
        isPagination: false,
        pageIndex: 1,
        pageSize: 20,
        totalRecords: 0
      },
      options: ["id", "mode", "name", "origin", "destination", "status"]
    };
  }

  getAllShipments = data => {
    getShipments(data).then(resData => {
      const pagination = { ...this.state.pagination };
      const isPagination = resData.length > pagination.pageSize ? true : false;
      pagination["isPagination"] = isPagination;
      pagination["totalRecords"] = resData.length;
      this.setState({
        ...this.state,
        shipments: resData,
        shipmentList: [...resData].slice(0, pagination["pageSize"]),
        isLoader: false,
        pagination: pagination
      });
    });
  };

  getShipmentsDetails = shipmentId => {
    const shipments = [...this.state.shipments];
    return shipments.filter(shipment => shipment.id === shipmentId);
  };

  onPaginationChange = pageIndex => {
    const pagination = { ...this.state.pagination };
    const totalShipments = [...this.state.shipments];
    const startingIndex =
      pageIndex === 1 ? 0 : pagination["pageSize"] * (pageIndex - 1);
    pagination["pageIndex"] = pageIndex;

    const shipments = totalShipments.slice(
      startingIndex,
      pagination["pageSize"] * pageIndex
    );

    this.setState({
      ...this.state,
      shipmentList: shipments,
      pagination: pagination
    });
  };

  onChangeInputText = (id, value) => {
    const getShipmentInfo = { ...this.getShipmentsDetails(id)[0] };
    updateShipment({ ...getShipmentInfo, name: value }).then(res => {
      this.getAllShipments();
    });
  };

  onSearchById = id => {
    const shipments = [...this.state.shipments];
    const pagination = { ...this.state.pagination };
    const getShipments = shipments.filter(shipment =>
      shipment.id.toLowerCase().includes(id.toLowerCase())
    );
    const isPagination =
      getShipments.length > pagination.pageSize ? true : false;
    pagination["isPagination"] = isPagination;
    pagination["totalRecords"] = getShipments.length;

    this.setState({
      ...this.state,
      shipmentList: getShipments.slice(0, pagination["pageSize"]),
      pagination: pagination
    });
  };

  onChangeSort = e => {
    const sortKey = e.target.value;
    if (sortKey.length) {
      const shipments = [...this.state.shipments];

      const sortedShipments = shipments.sort((val1, val2) => {
        return val1[sortKey] > val2[sortKey] ? 1 : -1;
      });
      this.setState({ ...this.state, shipmentList: sortedShipments });
    }
  };

  componentDidMount = () => {
    this.getAllShipments();
  };

  render() {
    return (
      <AppShipmentContext.Provider
        value={{
          ...this.state,
          getAllShipments: this.getAllShipments,
          getShipmentsDetails: this.getShipmentsDetails,
          onPaginationChange: this.onPaginationChange,
          onChangeInputText: this.onChangeInputText,
          onSearchById: this.onSearchById,
          onChangeSort: this.onChangeSort
        }}
      >
        {this.props.children}
      </AppShipmentContext.Provider>
    );
  }
}

export default AppShipmentContext;

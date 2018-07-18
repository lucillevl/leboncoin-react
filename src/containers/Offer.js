import React from "react";
import axios from "axios";
class Offer extends React.Component {
  state = {
    _id: "",
    title: "",
    description: "",
    price: "",
    creator: {
      account: {
        username: "",
        phone: ""
      },
      _id: ""
    },
    created: ""
  };

  render() {
    return <h2>offer id: {this.props.match.params.id}</h2>;
  }

  componentDidMount() {
    axios
      .get(
        "https://leboncoin-api.herokuapp.com/api/offer/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState(response.data);
        console.log(this.state);
      });
  }
}

export default Offer;

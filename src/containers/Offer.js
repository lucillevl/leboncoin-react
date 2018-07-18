import React from "react";
import axios from "axios";
import DetailAnnonce from "../components/DetailAnnonce";
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
    return (
      <DetailAnnonce
        title={this.state.title}
        description={this.state.description}
        price={this.state.price}
        username={this.state.creator.account.username}
        phone={this.state.creator.account.phone}
      />
    );
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

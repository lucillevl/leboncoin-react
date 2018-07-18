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

  showNum = event => {
    event.target.style.display = "none";
    document.getElementById("num").innerHTML = this.state.creator.account.phone;
  };
  render() {
    return (
      <div className="flex flex-s-c">
        <div className="offer-details">
          <div className="card">
            <div className="picture-details-annonce" />
            <div className="pad-10">
              <h1>{this.state.title}</h1>

              <p className="price-annonce">{this.state.price} €</p>
            </div>
          </div>
          <p className="bold">Description</p>
          <p>{this.state.description}</p>
        </div>
        <div className="card detail-author pad-10 flex flex-col flex-c-c">
          <div className="flex flex-c-c marg-bot-30">
            <div className="profil-picture" />
            <p className="bold">{this.state.creator.account.username}</p>
          </div>
          <button className="button-number" onClick={this.showNum}>
            Voir le numéro
          </button>
          <div id="num" />
        </div>
      </div>
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

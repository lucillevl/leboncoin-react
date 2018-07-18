import React from "react";
import axios from "axios";
import ListeAnnonce from "../components/ListeAnnonce";
class Home extends React.Component {
  state = {
    annonces: []
  };

  render() {
    if (this.state.annonces.length === 0) {
      return <p>Loading..</p>;
    } else {
      let annonce = [];
      for (let i = 0; i < this.state.annonces.length; i++) {
        annonce.push(
          <ListeAnnonce
            key={this.state.annonces[i]._id}
            id={this.state.annonces[i]._id}
            title={this.state.annonces[i].title}
            price={this.state.annonces[i].price}
          />
        );
      }
      return (
        <React.Fragment>
          <div className="liste-annonces">{annonce}</div>
        </React.Fragment>
      );
    }
  }

  componentDidMount() {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        console.log(response.data);
        this.setState({
          annonces: response.data
        });
      });
  }
}

export default Home;

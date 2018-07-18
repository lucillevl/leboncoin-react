import React from "react";
import axios from "axios";
class Publish extends React.Component {
  state = {
    title: "",
    description: "",
    price: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const token = this.props.user.token;
    console.log(token);
    console.log(this.state);

    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        { ...this.state },
        {
          headers: { Authorization: "Bearer " + token }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("error");
      });

    event.preventDefault();
  };

  render() {
    if (!this.props.user.token) {
      this.props.history.push("/log_in");
    }
    return (
      <React.Fragment>
        <div className="publish-body container">
          <h1>Votre annonce</h1>
          <form className="form form-publish" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Titre de l'annonce</label>
            <input
              id="title"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Texte de l'annonce</label>
            <textarea
              id="description"
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <label htmlFor="price">Prix</label>
            <input
              id="price"
              name="price"
              type="text"
              value={this.state.price}
              onChange={this.handleChange}
            />

            <input type="submit" value="Valider" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Publish;

import React from "react";
import axios from "axios";

class LogIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    console.log("valide");
    event.preventDefault();
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        ...this.state
      })
      .then(response => {
        console.log(response.data);
        if (response.data && response.data.token) {
          this.props.setUser({
            token: response.data.token,
            username: response.data.account.username,
            _id: response.data._id
          });

          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="center">Connexion</h1>
        <hr />
        <form onSubmit={this.handleSubmit} className="form form-login">
          <label htmlFor="email">Adresse email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Valider" />
        </form>
      </React.Fragment>
    );
  }
}

export default LogIn;

import React from "react";
import axios from "axios";
import FontAwesome from "react-fontawesome";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    username: ""
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
      .then(response => {
        // console.log(response.data);
        // {
        //   account: { username: "Farid" },
        //   token: "Ii0HYfXTN7L2SMoL",
        //   _id: "5b4ceb668c2a9a001440b2fb"
        // };

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
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2>Pourquoi créer un compte ?</h2>
        </div>
        <div>
          <h2>Créez un compte</h2>
          <hr />
          <form onSubmit={this.onSubmit} className="form form-signup">
            <label htmlFor="username">Pseudo</label>
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Adresse Email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Mot de passe</label>
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <input type="submit" value="Créer mon Compte Personnel" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

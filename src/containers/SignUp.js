import React from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye, faBell } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faClock, faBell);

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

          <div className="flex">
            <FontAwesomeIcon icon="clock" />
            <div className="why">
              <p className="bold">Gagner du temps</p>
              <p>
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon="bell" />
            <div className="why">
              <p className="bold">Soyez les premiers informés</p>
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce
                qui vous intéresse.
              </p>{" "}
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon="eye" />
            <div className="why">
              <p className="bold">Visibilité</p>
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus).
              </p>{" "}
            </div>
          </div>
        </div>
        <div>
          <h2 className="center">Créez un compte</h2>
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

import React from "react";
class DetailAnnonce extends React.Component {
  showNum = event => {
    event.target.style.display = "none";
    document.getElementById("num").innerHTML = this.props.phone;
  };
  render() {
    return (
      <div className="flex flex-s-c">
        <div className="offer-details">
          <div className="card">
            <div className="picture-details-annonce" />
            <div className="pad-10">
              <h1>{this.props.title}</h1>

              <p className="price-annonce">{this.props.price} €</p>
            </div>
          </div>
          <p className="bold">Description</p>
          <p>{this.props.description}</p>
        </div>
        <div className="card detail-author pad-10 flex flex-col flex-c-c">
          <div className="flex flex-c-c marg-bot-30">
            <div className="profil-picture" />
            <p className="bold">{this.props.username}</p>
          </div>
          <button className="button-number" onClick={this.showNum}>
            Voir le numéro
          </button>
          <div id="num" />
        </div>
      </div>
    );
  }
}
export default DetailAnnonce;

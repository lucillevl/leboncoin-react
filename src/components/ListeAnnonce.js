import React from "react";
import { Link } from "react-router-dom";

class ListeAnnonce extends React.Component {
  render() {
    return (
      <div key={this.props.id} className="annonce">
        <div className="picture" />
        <div className="text-annonce">
          <Link to={"/offer/" + this.props.id} className="title-annonce">
            {this.props.title}
          </Link>
          <p className="price-annonce">{this.props.price} €</p>
        </div>
      </div>
    );
  }
}
export default ListeAnnonce;

import React, { Component } from "react";
import { cardsArray } from "./CardInfo";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

var cardDetails;
class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.card.id,
    };
    this.DeleteCard = this.DeleteCard.bind(this);
    this.ShowModal = this.ShowModal.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  DeleteCard() {
    this.setState({
      id: this.props.card.id,
    });
    console.log(this.state.id);
    let newCards = cardsArray.filter((card) => card.id !== this.state.id);
    localStorage.setItem("persons", JSON.stringify(newCards));
    window.location.reload();
  }
  ShowModal() {
    this.setState({
      id: this.props.card.id,
    });
    let Mymodal = document.querySelectorAll(".modal");
    Mymodal.forEach((e) => {
      if (e.id === `modal${this.state.id}`) {
        e.style.display = "block";
      }
    });
  }
  CancelDelete() {
    let Mymodal = document.querySelectorAll(".modal");
    Mymodal.forEach((e) => {
      e.style.display = "none";
    });
  }
  showDetails() {
    cardDetails = {
      id: this.props.card.id,
      img: this.props.card.img,
      name: this.props.card.name,
      job: this.props.card.job,
      email: this.props.card.email,
      phone: this.props.card.phone,
    };

    console.log(cardDetails);
  }

  render() {
    return (
      <div
        className="card  col-lg-3 col-md-4 col-sm-6 col-12"
        id={`${this.props.card.id}`}
      >
        <img
          src={this.props.card.img}
          className="card-img-top"
          alt="https://.photos/150"
        />

        <button onClick={this.ShowModal} className="delBtn">
          <DeleteIcon />
        </button>
        <div className="modal" id={`modal${this.props.card.id}`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Item</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.CancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                <p>{`Do you want to delete ${this.state.id}?`} </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={this.CancelDelete}
                >
                  Close
                </button>
                <button
                  onClick={this.DeleteCard}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{this.props.card.name}</h5>
          <p className="card-text">{this.props.card.job}</p>
          <p className="card-text">{this.props.card.phone}</p>
          <p className="card-text">{this.props.card.email}</p>
        </div>
        <Link
          to="/details"
          id={this.props.card.id}
          className="details"
          onClick={this.showDetails}
        >
          <InfoIcon fontSize="large" />
        </Link>
      </div>
    );
  }
}
export { cardDetails };
export default Card;

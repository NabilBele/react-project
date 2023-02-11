import React, { Component } from "react";
import { cardDetails } from "./Card";
import "./styles/Details.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      Biography: "",
    };
    this.EditText = this.EditText.bind(this);
  }
  EditText(e) {
    this.setState({
      Biography: e.target.value,
    });
  }
  render() {
    return (
      <div className="mainDiv" id={cardDetails.id}>
        <div className="proFile">
          <img
            src={cardDetails.img}
            alt="Error"
            className="imgDiv border border-5"
          />

          <p className="Pname">{cardDetails.name}</p>
        </div>
        <p className="Pjob">{cardDetails.job}</p>
        <textarea
          className="txtarea"
          value={this.state.Biography}
          onChange={this.EditText}
          placeholder="Insert more informations"
        >
          more Information0
        </textarea>
        <div className="contacts">
          <div className="contacts1">
            <PhoneIcon />
            <p>{cardDetails.phone}</p>
          </div>
          <div className="contacts1">
            <EmailIcon />
            <p>{cardDetails.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDetails;

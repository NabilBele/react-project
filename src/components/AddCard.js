import React, { Component } from "react";

import { cardsArray } from "./CardInfo";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      img: File,
      name: "",
      phone: "",
      email: "",
      job: "",
      way: "/Add",
    };
    this.NewID = this.NewID.bind(this);
    this.NewImg = this.NewImg.bind(this);
    this.NewName = this.NewName.bind(this);
    this.NewEmail = this.NewEmail.bind(this);
    this.NewJob = this.NewJob.bind(this);
    this.Newphone = this.Newphone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  NewID(evant) {
    this.setState({
      id: evant.target.value,
    });
  }
  NewImg(evant) {
    var reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        this.setState({
          img: reader.result,
        });
      },
      false
    );

    if (evant.target.files[0]) {
      reader.readAsDataURL(evant.target.files[0]);
    }
  }
  NewName(evant) {
    this.setState({
      name: evant.target.value,
    });
  }
  NewEmail(evant) {
    this.setState({
      email: evant.target.value,
    });
  }
  Newphone(evant) {
    this.setState({
      phone: evant.target.value,
    });
  }
  NewJob(evant) {
    this.setState({
      job: evant.target.value,
    });
  }

  handleSubmit(event) {
    let NewObj = {
      id: this.state.id,
      img: this.state.img,
      name: this.state.name,
      job: this.state.job,
      email: this.state.email,
      phone: this.state.phone,
    };

    cardsArray.push(NewObj);
    localStorage.setItem("persons", JSON.stringify(cardsArray));
    console.log(cardsArray);
    window.location.href = "/";
  }

  render() {
    console.log(this.state.img);
    return (
      <div className="container add-container">
        <h2>Add a person</h2>

        <div className="input-group mb-3">
          <span className="input-group-text">Id</span>
          <input
            type="text"
            className="form-control"
            placeholder="Id"
            value={this.state.id}
            onChange={this.NewID}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Image</span>
          <input
            type="file"
            accept="image/jpeg, image/png image/jpg "
            className="form-control"
            placeholder="Image"
            onChange={this.NewImg}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Name</span>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={this.state.name}
            onChange={this.NewName}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Job</span>
          <input
            type="text"
            className="form-control"
            placeholder="Job"
            value={this.state.job}
            onChange={this.NewJob}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">phone</span>
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.Newphone}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Email</span>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={this.NewEmail}
          />
        </div>

        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Add
        </button>
      </div>
    );
  }
}

export default AddCard;
/*
 */

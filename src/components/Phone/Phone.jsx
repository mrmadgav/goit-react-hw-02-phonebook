import React, { Component } from "react";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import { connect } from "react-redux";
import { onSubmit, onMount } from "../../redux/actions";

class Phone extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  componentDidMount() {
    const findcontacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(findcontacts);
    if (parsedContacts !== null) {
      this.props.onMount(parsedContacts);
    }
  }

  componentDidUpdate(prevState) {
    if (this.props.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.contacts.some((i) => i.name === this.state.name)) {
      this.props.onSubmit({ name: this.state.name, number: this.state.number });
    } else {
      alert(`${this.state.name} уже есть в списке`);
    }
  };

  render() {
    return (
      <div>
        <h1>Phone Book</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handleChangeName={this.handleChangeName}
          handleChangeNumber={this.handleChangeNumber}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.items.name,
    number: state.items.number,
    contacts: state.items,
  };
};

export default connect(mapStateToProps, { onSubmit, onMount })(Phone);

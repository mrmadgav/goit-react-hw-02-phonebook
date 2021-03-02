import React, { Component } from "react";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import { connect } from "react-redux";
import { addContact, getContact } from "../../redux/actions";
import { allContacts, contactName, contactNumber } from "../../redux/selectors";

class Phone extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getContact();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.contacts.some((i) => i.name === this.state.name)) {
      this.props.addContact({
        name: this.state.name,
        number: this.state.number,
      });
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
          handleChange={this.handleChange}
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
    name: contactName(state),
    number: contactNumber(state),
    contacts: allContacts(state),
  };
};

export default connect(mapStateToProps, { addContact, getContact })(Phone);

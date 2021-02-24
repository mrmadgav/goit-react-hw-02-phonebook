import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { filter, filterContacts } = this.props;
    return (
      <label>
        Find Contacts by name
        <input
          type="text"
          placeholder="найти контакт"
          value={filter}
          onChange={filterContacts}
        />
      </label>
    );
  }
}

export default Filter;

import React from 'react';

import axios from 'axios';

export default class CustomerList extends React.Component {
  state = {
    customers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/rest/customers/all`)
      .then(res => {
        const customers = res.data;
        console.log("#####DATA: ", customers)
        this.setState({ customers });
      })
  }

  render() {
    return (
      <ul>
          <p>hello from api</p>
        { this.state.customers.map(customer => <li key={customer.id}>{customer.name}</li>)}
      </ul>
    )
  }
}
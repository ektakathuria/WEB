import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export default class CustomerList extends Component {
    state = {
        "customers" :[{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green ",
            "gender": "female",
            "address": "Blore"
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing",
            "gender": "male",
            "address": "West Street"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani",
            "gender": "male",
            "address": "Kattegat"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller",
            "gender": "female",
            "address": "some address"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller",
            "gender": "male",
            "address": "some address "
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay",
            "gender": "female",
            "address": "some address"
        }
    ]
    };

    constructor(props) {
        super(props);
        this.state.complete = this.state.customers;
    }

    render() {
        return (
            <div>
                <Filter filterEvent={this.filterCustomers.bind(this)} />
                {
                    this.state.customers.map(c => <CustomerRow 
                        delEvent={(id) => this.deleteCustomer(id)} 
                        key={c.id} customer={c} />)
                }
            </div>
        )
    }
    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // Asynchronusly
        this.setState({
            customers: custs
        });
    }

    filterCustomers(txt) {
        let custs = this.state.complete.filter(c => c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0);
        this.setState({
            customers: custs
        });
    }
}

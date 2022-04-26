import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
export default class FetchUsers extends React.Component {

    state = {
        loading: true,
        persons: [],
    }

    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await axios.get(url);
        const persons = response.data;
        this.setState({ persons: persons });
    }

    render() {
        const contents = this.state.persons.map((person, index) => {
            return <tr key={index}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>
                    {person.address.street} &nbsp;
                    {person.address.suite} &nbsp;
                    {person.address.city} &nbsp;
                    {person.address.zipcode} &nbsp;
                </td>
                <td>{person.company.name}</td>
            </tr>
        })
        return (
            <div>
                <h1>Fetch Users</h1>
                {
                    this.state.persons.length === 0 ?
                        <div>loading...</div> :
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Company Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contents}
                                </tbody>
                            </Table>
                        </div>
                }
            </div>
        )
    }
}
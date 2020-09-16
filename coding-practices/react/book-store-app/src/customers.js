import React from 'react';

// const customers = ['Anil', 'Binil', 'Dinil', 'Vinil', 'Binu', 'Tinu', 'Vinu'];
const customers = [
    {name: "Anil", address: "Bangalore", phone: 7899179779},
    {name: "Binil", address: "Mumbai", phone: 7899179779},
    {name: "Dinil", address: "Pune", phone: 7899179779},
    {name: "Binu", address: "Kochi", phone: 7899179779},
    {name: "Manu", address: "Delhi", phone: 7899179779}
];

function showCustomers() {
    return (
        <div class="container">
            <div id="customers">
                <h2>Customer Details</h2>
                <table cellpadding="10" border="1">
                    <tr>
                        <th>SL No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                    {
                        customers.map((customer, index) =>  <tr>
                                                                <td>{index+1}</td>
                                                                <td>{customer.name}</td>
                                                                <td>{customer.address}</td>
                                                                <td>{customer.phone}</td>
                                                            </tr>)
                    }
                </table>
            </div>
        </div>
    );
}

export default showCustomers;

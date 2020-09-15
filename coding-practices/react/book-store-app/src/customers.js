import React from 'react';

const customers = ['Anil', 'Binil', 'Dinil', 'Vinil'];

function showCustomers() {
    return (
        <div id="customers">
            <h2>Customer Details</h2>
            <table cellpadding="10" border="1">
                <tr>
                    <th>SL No</th>
                    <th>Name</th>
                </tr>
                {
                    customers.map((customer, index) =>  <tr>
                                                            <td>{index+1}</td>
                                                            <td>{customer}</td>
                                                        </tr>)
                }
            </table>
        </div>
    );
}

export default showCustomers;

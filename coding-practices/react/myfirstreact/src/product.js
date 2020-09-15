import React from 'react';

const productList = [
    {name: "apple", price: 200, qty: 5},
    {name: "orange", price: 300, qty: 7},
    {name: "banana", price: 100, qty: 4},
    {name: "cherry", price: 400, qty: 10},
    {name: "mango", price: 500, qty: 2}
]

export default function myProduct() {
    return <div className="container">
                <h2>From product component</h2>
                <p>Product component works</p>
                <h3>Total products : {productList.length}</h3>
                <h4>Products Details</h4>
                <table cellPadding="10" border="1">
                    <tr>
                        <th>SL No</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Qty</th>
                    </tr>
                    {
                        productList.map((item, index) => {
                            return  <tr>
                                        <td>{Number(index)+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                    </tr>
                        })
                    }
                </table>
           </div>
}

// export default myProduct;
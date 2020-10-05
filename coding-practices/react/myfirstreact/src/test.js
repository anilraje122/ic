import React from 'react';

const books = ['book1', 'book2', 'book3', 'book4'];

const test = () => {
    return  <div className="container">
                <h2>From test (hello) component</h2>
                <p>test component works</p>
                <h3>Total books : {books.length}</h3>
                <h4>Book Details </h4>
                <table cellPadding="10" border="1">
                    <tbody>
                    <tr>
                        <th>SL No</th>
                        <th>Book Name</th>
                    </tr>
                    {
                        books.map((book, index)=>{
                            return  <tr key={index}>
                                        <td>{Number(index)+1}</td>
                                        <td>{book}</td>
                                    </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
}

export default test
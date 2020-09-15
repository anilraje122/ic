import React from 'react';

const books = [
    {bookName: "book1", author: "author 1", type: "type 1", price: 300},
    {bookName: "book2", author: "author 2", type: "type 2", price: 200},
    {bookName: "book3", author: "author 3", type: "type 3", price: 400},
    {bookName: "book4", author: "author 4", type: "type 4", price: 100},
    {bookName: "book5", author: "author 5", type: "type 5", price: 600}
];

const showBooks = () => {
    return (
        <div id="books">
            <h2>Book Details</h2>
            <table cellpadding="20" border="1">
                <tr>
                    <th>SL No</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Book Type</th>
                    <th>Price</th>
                </tr>
                {
                    books.map( (book, index) => <tr>
                                                    <td>{index+1}</td>
                                                    <td>{book.bookName}</td>
                                                    <td>{book.author}</td>
                                                    <td>{book.type}</td>
                                                    <td>{book.price}</td>
                                                </tr>)
                }
            </table>
        </div>
    );
}

export default showBooks;
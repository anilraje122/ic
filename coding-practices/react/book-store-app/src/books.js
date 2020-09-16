import React from 'react';

const books = [
    {bookName: "book 1", author: "author 1", type: "type 1", price: 300},
    {bookName: "book 2", author: "author 2", type: "type 2", price: 200},
    {bookName: "book 3", author: "author 3", type: "type 3", price: 400},
    {bookName: "book 4", author: "author 4", type: "type 4", price: 100},
    {bookName: "book 5", author: "author 5", type: "type 5", price: 600}
];

const showBooks = () => {
    return (
        <div class="container">
            <div id="books">
                <h2>Books available on E-books</h2>
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
        </div>
    );
}

export default showBooks;
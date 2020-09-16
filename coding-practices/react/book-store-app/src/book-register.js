import React from 'react';

const bookRegister = [
    {customerName: "Anil", email: "anilraje122@gmail.com", phone: 7899179779, bookBorrowed: "book 2"},
    {customerName: "Binil", email: "binil@gmail.com", phone: 7899179779, bookBorrowed: "book 3"},
    {customerName: "Dinil", email: "dinil@gmail.com", phone: 7899179779, bookBorrowed: "book 1"},
    {customerName: "Vinil", email: "vinil@gmail.com", phone: 7899179779, bookBorrowed: "book 4"}
];

const showBookRegister = () => {
    return (
        <div class="container">
            <div id="book-register">
                <h2>Book Register</h2>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Book Borrowed</th>
                    </tr>
                    {
                        bookRegister.map( (book) => <tr>
                                                        <td>{book.customerName}</td>
                                                        <td>{book.email}</td>
                                                        <td>{book.phone}</td>
                                                        <td>{book.bookBorrowed}</td>
                                                    </tr>)
                    }
                </table>
            </div>
        </div>
    );
}

export default showBookRegister;
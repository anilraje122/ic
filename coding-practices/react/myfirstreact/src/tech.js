import React, {Component} from 'react';

class TechList extends Component {
    // books = [];
    constructor() {
        super();
        this.books = [
                    {name: "javascript", price: 1200, edition: "first"},
                    {name: "python", price: 200, edition: "second"},
                    {name: "php", price: 1300, edition: "first"},
                    {name: "dotnet", price: 500, edition: "third"},
                    {name: "java", price: 900, edition: "fourth"}
                ];
    }
    render() {
        return (
            <div className="container">
                <h2>Book Details</h2>
                <table border="1" cellpadding="10"> 
                    <thead>
                        <tr>
                        <td colspan="4">Total Books :   {this.books.length} </td>
                        </tr>
                    </thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Edition</th>
                    </tr>
                    {
                        this.books.map((book, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                    <td>{book.edition}</td>
                                </tr>
                            )        
                        })
                    }
                </table>
            </div>
        )
    }
}

export default TechList;

import React,  {Component} from 'react';

class Books extends Component {
    constructor() {
        super();
        this.state = {
            books: [
                {name: "book 1", author: "author 1", type: "type 1", price: 300},
                {name: "book 2", author: "author 2", type: "type 2", price: 200},
                {name: "book 3", author: "author 3", type: "type 3", price: 400},
                {name: "book 4", author: "author 4", type: "type 4", price: 100},
                {name: "book 5", author: "author 5", type: "type 5", price: 600}
            ],
            // new book details
            newName: '', 
            newAuthor: '', 
            newType: '', 
            newPrice: 0,
            // status
            message: ''
        }
    }

    // updating state variables as per onchange event from inputs
    passName = (obj) => {
        this.setState({
            newName: obj.target.value
        });
    }

    passAuthor = (obj) => {
        this.setState({
            newAuthor: obj.target.value
        });
    }

    passType = (obj) => {
        this.setState({
            newType: obj.target.value
        });
    }

    passPrice = (obj) => {
        this.setState({
            newPrice: obj.target.value
        });
    }

    // saving values to existing state object
    save = (obj) => {
        // creating a temp object to store new books details
        this.newBook = {
            name: this.state.newName,
            author: this.state.newAuthor,
            type: this.state.newType,
            price: this.state.newPrice
        }
        // adding new details to book object
        this.setState({
            books: this.state.books.concat(this.newBook),
            newName: '',
            newAuthor: '',
            newType: '',
            newPrice: '',
            message: `Book ${this.newBook.name} is added to stock!` // displaying status message
        });
        setTimeout(()=>{
            this.setState({
                message: ''
            })
        }, 5000);
    }

    render() {
        return (
            <div class="container">
                <div id="form-wrapper" class="updateBooks">
                    <form onSubmit="">
                        <h2>Add/Remove Books</h2>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" onChange={this.passName} value={this.state.newName} ></input>
                        </div>
                        <div class="form-group">
                            <label for="author">Author</label>
                            <input type="text" id="author" onChange={this.passAuthor} value={this.state.newAuthor} ></input>
                        </div>
                        <div class="form-group">
                            <label for="type">Type</label>
                            <input type="text" id="type" onChange={this.passType} value={this.state.newType} ></input>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" id="price" onChange={this.passPrice} value={this.state.newPrice} ></input>
                        </div>
                        <div class="form-group">
                            <button type="submit" id="submit" onClick={this.save}>Add Book</button>
                        </div>
                    </form>
                </div>
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
                        {/* Dynamically generating HTML table as per the object */}
                        {
                            this.state.books.map((item, index) => <tr>
                                                            <td>{index+1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.author}</td>
                                                            <td>{item.type}</td>
                                                            <td>{item.price}</td>
                                                        </tr>)
                        }
                    </table>
                </div>
            

                <p id="bookAddStatus">{this.state.message}</p>
            </div>
        );
    }
}

export default Books;
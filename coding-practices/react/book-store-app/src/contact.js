import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div class="container">
                <div id="form-wrapper" class="contact">
                    <form>
                        <h2>Contact Us</h2>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name"></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email"></input>
                        </div>
                        <div class="form-group">
                            <label for="mobile">Mobile</label>
                            <input type="number" id="mobile" placeholder="Enter your mobile number"></input>
                        </div>
                        <div class="form-group">
                            <label for="msg">Message</label>
                            <textarea id="msg" placeholder="Enter your message"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" id="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
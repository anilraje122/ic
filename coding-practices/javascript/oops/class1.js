class User {

    constructor() {
        this.name = "Anil";
        this.city = "Bangalore";
        this.mobile = "7899179779";
    }

    hello = () => {
        console.log("Hi from hello class");
    }

    userInfo = () => {
        console.log("Name is "+this.name);
        console.log("City is "+this.city);
        console.log("Mobile is "+this.mobile);
    }
}

const obj = new User(); // object creation of class User

obj.hello();
console.log("----------");
obj.userInfo();


/*****

class           : it is a collection of member functions and member variables
constructor     : it is a predefined function in OOPs. It is used to initialize the member variables.
                  it automatically invokes when an object is created
member variable : all the variables defined inside the constructor using "this" operator
                  a member variable can be called anywhere inside the class using "this" operator
member function : all user defined functions inside a class are called member functions
this            : it is an object of the current class but can be accessible only inside the class
new             : it is used to allocate memory for the new object of a class

******/

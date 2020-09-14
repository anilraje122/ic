class User {
    name:string;
    mobile:number;

    constructor() {
        this.name = "Anil";
        this.mobile = 7899179779;
    }

    getInfo = () => {
        console.log("Name : "+ this.name);
        console.log("Mobile : "+ this.mobile);
    }
}

var obj = new User();

obj.getInfo();
class Customer {
    name:string;
    mobile:number;
    edu:boolean;
    gender:string;
    constructor() {
        this.name = "Anil";
        this.mobile = 7899179779;
        this.edu = false;
        this.gender = "Male";
    }

}

class Address extends Customer {
    city:string;
    pincode:number;
    address:string;
    constructor() {
        super();
        this.city = "Bangalore";
        this.pincode = 560068;
        this.address = "Bommanahalli";
    }

    customerDetails = () => {
        var data = "<h2>User Info</h2>";
        data += `<p> Name : ${this.name} </p>`;
        data += `<p> Mobile : ${this.mobile} </p>`;
        data += `<p> Gender : ${this.gender} </p>`;
        if(this.edu) {
            data += `<p> Educated : Yes </p>`;
        } else {
            data += `<p> Educated : No </p>`;
        }
        data += `<p> City : ${this.city} </p>`;
        data += `<p> Pincode : ${this.pincode} </p>`;
        data += `<p> Address : ${this.address} </p>`;
        document.getElementById("userInfo").innerHTML = data;
        // console.log(data);
    }
}

const cus1 = new Address();
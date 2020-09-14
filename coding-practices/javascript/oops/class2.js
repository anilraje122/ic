class User2 {
    constructor() {
        this.fullname = "";
        this.mobile = "";
        this.city = "";
        this.pincode = "";
    }

    updateInfo = (name, mobile, city, pin) => {
        this.fullname = name;
        this.mobile = mobile;
        this.city = city;
        this.pincode = pin;
    }

    showInfo = () => {
        console.log("\n---- About User ----");
        console.log("\nName : "+ this.fullname);
        console.log("Mobile No : "+ this.mobile);
        console.log("City : "+ this.city);
        console.log("PIN Code : "+ this.pincode);
    }
}

const obj = new User2();

obj.updateInfo("Anil", "7899179779", "Bangalore", "560068");

obj.showInfo();
class User3 {

    static name = "Anil";
    static mobile = 7899179779;

    static info = () => {
        console.log("\nName : "+ this.name);
        console.log("mobile : "+ this.mobile);
    }
}

User3.info(); // No need to create object for "static" classes!
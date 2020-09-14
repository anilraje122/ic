class User4 {
    constructor(name) {
        this.fullname = name;
    }

    aboutUser = () => {
        console.log("\nName : "+ this.fullname);
    }
}

const obj = new User4("Anil");

obj.aboutUser();
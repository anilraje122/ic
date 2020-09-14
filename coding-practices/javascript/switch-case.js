console.log("\n-- Switch Case --")

var url = "service";

switch(url) {
    case "home":
        console.log("\nLoading home page..");
        break;
    case "login":
        console.log("\nLoading login page..");
        break;
    case "signup":
        console.log("\nLoading signup page..");
        break;
    default:
    console.log("\nLoading home page by default..");
    break
}
var User = /** @class */ (function () {
    function User() {
        var _this = this;
        this.getInfo = function () {
            console.log("Name : " + _this.name);
            console.log("Mobile : " + _this.mobile);
        };
        this.name = "Anil";
        this.mobile = 7899179779;
    }
    return User;
}());
var obj = new User();
obj.getInfo();

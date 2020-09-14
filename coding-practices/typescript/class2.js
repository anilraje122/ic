var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer() {
        this.name = "Anil";
        this.mobile = 7899179779;
        this.edu = false;
        this.gender = "Male";
    }
    return Customer;
}());
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        var _this = _super.call(this) || this;
        _this.customerDetails = function () {
            var data = "<h2>User Info</h2>";
            data += "<p> Name : " + _this.name + " </p>";
            data += "<p> Mobile : " + _this.mobile + " </p>";
            data += "<p> Gender : " + _this.gender + " </p>";
            if (_this.edu) {
                data += "<p> Educated : Yes </p>";
            }
            else {
                data += "<p> Educated : No </p>";
            }
            data += "<p> City : " + _this.city + " </p>";
            data += "<p> Pincode : " + _this.pincode + " </p>";
            data += "<p> Address : " + _this.address + " </p>";
            document.getElementById("userInfo").innerHTML = data;
            // console.log(data);
        };
        _this.city = "Bangalore";
        _this.pincode = 560068;
        _this.address = "Bommanahalli";
        return _this;
    }
    return Address;
}(Customer));
var cus1 = new Address();

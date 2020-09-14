class Product {
    constructor() {
        this.pname = "Apple";
        this.price = 200;
        this.qty = 5;
    }

    productInfo = () => {
        let data = "<h3>Product Details</h3>";
        data = data + "<p> Name : "+ this.pname +"</p>";
        data = data + "<p> Price : "+ this.price +"</p>";
        data = data + "<p> Quantity : "+ this.qty +"</p>";
        return data;
    }
}

class Invoice extends Product {
    constructor() {
        super();
        this.invoiceNo = "1111";
    }

    getInvoice = () => {
        let data = "<p><strong>Invoice No : "+ this.invoiceNo +"</strong></p>";
        data = data + this.productInfo();
        document.getElementById("itemList").innerHTML = data;
    }

    update = () => {
        this.pname = document.getElementById("pname").value;
        this.price = document.getElementById("pprice").value;
        this.qty = document.getElementById("pname").value;
        
        // update the product details with new data
        this.getInvoice(); 

        // clear textbox values after data retrieval
        document.getElementById("pname").value = "";
        document.getElementById("pprice").value = "";
        document.getElementById("pqty").value = "";
    }
}

const obj = new Invoice();
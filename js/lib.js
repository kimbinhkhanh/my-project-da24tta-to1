const productDatabase = [
    { id: 1,  name: "accvip10",        price: 12000000,  img: "../assets/images/acc1.jpg", },
    { id: 2,  name: "accvip10",        price: 8500000,  img: "../assets/images/acc2.jpg", },
    { id: 3,  name: "accvip10",        price: 7500000,  img: "../assets/images/acc3.jpg", },
/*  { id: 4,  name: "accvip10",        price: 850000000,  img: "../assets/image/vf7.jpg", },
    { id: 5,  name: "accvip10",        price: 1090000000, img: "../assets/image/vf8.jpg", },
    { id: 6,  name: "accvip10",        price: 1490000000, img: "../assets/image/vf9.jpg", },
*/
];

function addProduct(imgSrc, name, price, productId) {
    // Tạo khung chứa cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // Khung 1 – Hình ảnh
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%";

    myDiv1.appendChild(productImg);

    // Khung 2 – Thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name");
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = price.toLocaleString("vi-VN");

    const productBtn = document.createElement("a");
    productBtn.setAttribute("class", "btn-detail");
    productBtn.setAttribute("href", "../html/detail.html?id=" + productId);
    productBtn.innerText = "Xem chi tiết";

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productBtn);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function addProduct_v2(products) {
    products.forEach(function(product) {
        addProduct(product.img, product.name, product.price, product.id);
    });
}
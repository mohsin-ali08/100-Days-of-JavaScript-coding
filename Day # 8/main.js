let products = {
    data: [
        {
            productName: "watch show your time",
            category: "Topwear",
            price: "30",
            // image: "image/citizen.jpg",

        },
        {
            productName: " time",
            category: "Topwear",
            price: "70",
            image: "citizen.jpg",
            // image:"image/citizen.jpg"

        },
        {
            productName: " your time",
            category: "sells ",
            price: "50",
            // image: "image/citizen.jpg",
        },
        {
            productName: "watch show your time",
            category: " brand",
            price: "20",
            // image: "image/citizen.jpg",

        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", "i.category");


    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");


    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container \
    let container = document.createElement("div");
    container.classList.add("container")
    //  Products name :
    let name = document.createElement("h5");
    name.classList.add("container");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);


    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);





    document.getElementById("products").appendChild(card);
};
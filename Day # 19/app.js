let showUserData = document.getElementById("showUserData");
let btn = document.getElementById("button");
btn.addEventListener("click", function (ev) {
  ev.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const userData = {
    email: email,
    password: password,
  };
  console.log(userData);

  showUserData.innerHTML = `
   <p>${userData.email}</p>
    <p>${userData.password}</p>`;

    email.value= '';
    password.value = '';
});

// product cards practice
let productList = document.getElementById("productList");

function addProduct() {
  let productTitle = document.getElementById("productTitle").value;
  let productPrice = document.getElementById("productPrice").value;
  let productDescription = document.getElementById("productDescription").value;

  if (!productTitle || !productPrice || !productDescription) {
    alert("All fields are required!");
    return;
  }

  let productData = {
    productTitle: productTitle,
    productPrice: productPrice,
    productDescription: productDescription,
  };

  localStorage.setItem("productData", JSON.stringify(productData));

  // Create a new product container
  let productContainer = document.createElement("div");
  productContainer.classList.add("product-container"); // Add a class for styling (optional)
  
  // Add product details to the container
  productContainer.innerHTML = `
    <p><strong>Title:</strong> ${productData.productTitle}</p>
    <p><strong>Price:</strong> ${productData.productPrice}</p>
    <p><strong>Description:</strong> ${productData.productDescription}</p>`;

  // Append the new product container to the productList
  productList.appendChild(productContainer);

  // Clear the input fields
  document.getElementById("productTitle").value = '';
  document.getElementById("productPrice").value = '';
  document.getElementById("productDescription").value = '';
}

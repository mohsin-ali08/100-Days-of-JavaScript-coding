// var model = {};

// var firstName = document.getElementById("firstName");
// var lastName = document.getElementById("lastName");
// var age = document.getElementById("age");
// var cnic = document.getElementById("cnic");
// var phone = document.getElementById("phone");
// var tableBody = document.getElementById("tableBody");
// var errorMsg = document.getElementById("errorMsg");

// function btnClick() {
//   // Validate that none of the fields are empty
//   if (!firstName.value || !lastName.value || !age.value || !cnic.value || !phone.value) {
//     errorMsg.textContent = "All fields are required!";
//     return;
//   }

//   // Clear error message if all fields are valid
//   errorMsg.textContent = "";

//   // Store input values in model object
//   model.firstName = firstName.value;
//   model.lastName = lastName.value;
//   model.age = age.value;
//   model.cnic = cnic.value;
//   model.phone = phone.value;

//   console.log(model);

//   // Create a new row and insert data
//   let newRow = document.createElement("tr");
//   newRow.innerHTML = `
//     <td>${model.firstName}</td>
//     <td>${model.lastName}</td>
//     <td>${model.age}</td>
//     <td>${model.cnic}</td>
//     <td>${model.phone}</td>
//     <td>
//       <button class="btn edit-btn" onclick="editRow(this)">Edit</button>
//       <button class="btn delete-btn" onclick="deleteRow(this)">Delete</button>
//     </td>
//   `;
//   tableBody.appendChild(newRow);

//   // Clear input fields after submission
//   firstName.value = '';
//   lastName.value = '';
//   age.value = '';
//   cnic.value = '';
//   phone.value = '';
// }

// function deleteRow(button) {
//     // Delete the row containing the clicked delete button
//     var row = button.parentNode.parentNode;
//     tableBody.removeChild(row);
//   }

//   function editRow(button) {
//     // Get the row to edit
//     var row = button.parentNode.parentNode;
//     var cells = row.getElementsByTagName('td');

//     // Set the input fields with the current row data
//     firstName.value = cells[0].innerText;
//     lastName.value = cells[1].innerText;
//     age.value = cells[2].innerText;
//     cnic.value = cells[3].innerText;
//     phone.value = cells[4].innerText;

//     // Remove the current row from the table (so the data can be re-added after editing)
//     tableBody.removeChild(row);
//   }




// product card 


var productList = document.getElementById("productList");
    var errorMsg = document.getElementById("errorMsg");

    function addProduct() {
      var productTitle = document.getElementById("productTitle").value;
      var productPrice = document.getElementById("productPrice").value;
      var productDescription = document.getElementById("productDescription").value;
      var productImg = document.getElementById("productImg").value;

      // Validate that none of the fields are empty
      if (!productTitle || !productPrice || !productDescription || !productImg) {
        errorMsg.textContent = "All fields are required!";
        return;
      }

      // Clear error message if all fields are valid
      errorMsg.textContent = "";


      console.log(productList);
      

      // Create a new product card
      let productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${productImg}" alt="${productTitle}" class="product-img">
        <h2>${productTitle}</h2>
        <p>Price: $${productPrice}</p>
        <p>${productDescription}</p>
        <button class="btn add-cart-btn">Add to Cart</button>
        <button class="btn edit-btn" onclick="editProduct(this)">Edit</button>
        <button class="btn delete-btn" onclick="deleteProduct(this)">Delete</button>
      `;

      // Append the new product card to the product list
      productList.appendChild(productCard);

      // Clear input fields after submission
      document.getElementById("productTitle").value = '';
      document.getElementById("productPrice").value = '';
      document.getElementById("productDescription").value = '';
      document.getElementById("productImg").value = '';

      console.log(productCard.value);
      
    }

    function deleteProduct(button) {
      // Delete the product card containing the clicked delete button
      var productCard = button.parentNode;
      productList.removeChild(productCard);
    }

    function editProduct(button) {
      // Get the product card to edit
      var productCard = button.parentNode;
      var productTitle = productCard.querySelector("h2").innerText;
      var productPrice = productCard.querySelector("p:nth-child(3)").innerText.replace('Price: $', '');
      var productDescription = productCard.querySelector("p:nth-child(4)").innerText;
      var productImg = productCard.querySelector("img").src;

      // Set the input fields with the current product data
      document.getElementById("productTitle").value = productTitle;
      document.getElementById("productPrice").value = productPrice;
      document.getElementById("productDescription").value = productDescription;
      document.getElementById("productImg").value = productImg;

      // Remove the current product card from the list (so the data can be re-added after editing)
      productList.removeChild(productCard);
    }
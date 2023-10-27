
// Store Product
const products = [
    {
        id: 1,
        productInfo: { src: "./images/fwh.jpg", pname: "Fortunata Window Hardware - Decorative Hoaldback-Mocha" },
        price:  29.99,
        quantity: 1
    },
    {
        id: 2,
        productInfo: { src: "./images/wtwh.webp", pname: "Woven Trellis Window Hardware - Clip Rings-Brooze" },
        price: 12.99,
        quantity: 1
    },
    // {
    //     id: 3,
    //     productInfo: { pname: "Shoe" },
    //     price: 800,
    //     quantity: 1
    // }
    
];

// Function to calculate subtotal for a single item
function calculateSubtotal(item) {
    return  item.price * item.quantity;
}

// Function to render items and their subtotals
function renderItems() {
    let itemList = document.getElementById("cart-items");
    let totalPrice = 0;

    itemList.innerHTML = ""; // Clear the list

    products.forEach(function (item, index) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${item.productInfo.src}"/><h4>${item.productInfo.pname}</h4></td>
            <td><input type="number" value="${item.quantity}" id="quantity${index}" onchange="updateQuantity(${index})" min="0" /></td>
            <td>${"$" +item.price}</td>
            <td id="subtotal${index}">${"$" + calculateSubtotal(item).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
          `;
        itemList.appendChild(tr);
        totalPrice += calculateSubtotal(item);
    });

    document.getElementById("total").textContent = "$" + totalPrice.toFixed(2);
}

// Function to update quantity and recalculate subtotal
function updateQuantity(index) {
    var quantityInput = document.getElementById(`quantity${index}`);
    products[index].quantity = parseInt(quantityInput.value, 10);
    document.getElementById(`subtotal${index}`).textContent = "$" + calculateSubtotal(products[index]).toFixed(2);
    renderItems();
}

// Function to remove an item from the array and update the display
function removeItem(index) {
    products.splice(index, 1);
    renderItems();
}   

// Initial rendering of items
renderItems();


















// document.addEventListener("DOMContentLoaded", function() {
//     const quantityInputs = document.querySelectorAll(".quantity-input");
//     const quantityInputs1 = document.querySelectorAll(".quantity-input1");
//     const subtotalElements = document.querySelectorAll(".subtotal");    
//     const subtotalElements1 = document.querySelectorAll(".subtotal1");    
//     const subtotalElements2 = document.querySelectorAll(".subtotal2");    
//     const removeButtons = document.querySelectorAll(".remove-button");
//     const removeButtons1 = document.querySelectorAll(".remove-button1");

//     function updateSubtotal() {
//         for (let i = 0; i < quantityInputs.length; i++) {
//             const quantity = quantityInputs[i].value;
//             const price = 29.99; // Replace with the actual price for each item
//             subtotalElements[i].textContent = "$" + (quantity * price).toFixed(2);
//         }
//     }
//     function updateSubtotal1() {
//         for (let i = 0; i < quantityInputs1.length; i++) {
//             const quantity = quantityInputs1[i].value;
//             const price = 12.99; // Replace with the actual price for each item
//             subtotalElements1[i].textContent = "$" + (quantity * price).toFixed(2);
//         }
//     }


// //     function updateSubtotal2(){
// //         subtotalElements2.innerHTML= "$" + (subtotalElements.innerHTML+ subtotalElements1.innerHTML);
  
// //     }
// // updateSubtotal2()
   

//     function removeItem(index) {
//         quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
//         if (parseInt(quantityInputs[index].value) <= 0) {
//             // Remove the row if quantity is zero or negative
//             quantityInputs[index].value = 0;
//             subtotalElements[index].textContent = "$0.00";
//             // You can also remove the entire row from the table here
//         }
//         updateSubtotal();
//     }

//     function removeItem1(index) {
//         quantityInputs1[index].value = parseInt(quantityInputs1[index].value) - 1;
//         if (parseInt(quantityInputs1[index].value) <= 0) {
//             // Remove the row if quantity is zero or negative
//             quantityInputs1[index].value = 0;
//             subtotalElements1[index].textContent = "$0.00";
//             // You can also remove the entire row from the table here
//         }
//         updateSubtotal1();
//     }
        
       
    

//     for (let i = 0; i < removeButtons.length; i++) {
//         removeButtons[i].addEventListener("click", function() {
//             removeItem(i);
//         });
//     }
//     for (let i = 0; i < removeButtons1.length; i++) {
//         removeButtons1[i].addEventListener("click", function() {
//             removeItem1(i);
//         });
//     }

//     for (let i = 0; i < quantityInputs.length; i++) {
//         quantityInputs[i].addEventListener("input", updateSubtotal);
//     }
//     for (let i = 0; i < quantityInputs1.length; i++) {
//         quantityInputs1[i].addEventListener("input", updateSubtotal1);
//     }

//     updateSubtotal();
//     updateSubtotal1();
//     // updateSubtotal2();
// });

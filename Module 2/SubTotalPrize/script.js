document.addEventListener("DOMContentLoaded", function() {
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const quantityInputs1 = document.querySelectorAll(".quantity-input1");
    const subtotalElements = document.querySelectorAll(".subtotal");    
    const subtotalElements1 = document.querySelectorAll(".subtotal1");    
    const subtotalElements2 = document.querySelectorAll(".subtotal2");    
    const removeButtons = document.querySelectorAll(".remove-button");
    const removeButtons1 = document.querySelectorAll(".remove-button1");

    function updateSubtotal() {
        for (let i = 0; i < quantityInputs.length; i++) {
            const quantity = quantityInputs[i].value;
            const price = 29.99; // Replace with the actual price for each item
            subtotalElements[i].textContent = "$" + (quantity * price).toFixed(2);
        }
    }
    function updateSubtotal1() {
        for (let i = 0; i < quantityInputs1.length; i++) {
            const quantity = quantityInputs1[i].value;
            const price = 12.99; // Replace with the actual price for each item
            subtotalElements1[i].textContent = "$" + (quantity * price).toFixed(2);
        }
    }

    // function updateSubtotal2(){
    //     subtotalElements2= "$" + (subtotalElements *  subtotalElements)
    // }
   

    function removeItem(index) {
        quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
        if (parseInt(quantityInputs[index].value) <= 0) {
            // Remove the row if quantity is zero or negative
            quantityInputs[index].value = 0;
            subtotalElements[index].textContent = "$0.00";
            // You can also remove the entire row from the table here
        }
        updateSubtotal();
    }

    function removeItem1(index) {
        quantityInputs1[index].value = parseInt(quantityInputs1[index].value) - 1;
        if (parseInt(quantityInputs1[index].value) <= 0) {
            // Remove the row if quantity is zero or negative
            quantityInputs1[index].value = 0;
            subtotalElements1[index].textContent = "$0.00";
            // You can also remove the entire row from the table here
        }
        updateSubtotal1();
    }
        
       
    

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", function() {
            removeItem(i);
        });
    }
    for (let i = 0; i < removeButtons1.length; i++) {
        removeButtons1[i].addEventListener("click", function() {
            removeItem1(i);
        });
    }

    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("input", updateSubtotal);
    }
    for (let i = 0; i < quantityInputs1.length; i++) {
        quantityInputs1[i].addEventListener("input", updateSubtotal1);
    }

    updateSubtotal();
    updateSubtotal1();
    // updateSubtotal2();
});

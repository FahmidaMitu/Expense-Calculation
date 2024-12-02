const amountInputs = document.querySelectorAll(".Amount");
let totalAmount = 0; // Initialize the total amount

// Function to update the total amount
function updateTotal() {
    totalAmount = 0; // Reset the total amount

    // Loop through all Amount fields to add up the values
    amountInputs.forEach(function(input) {
        const value = parseFloat(input.value);
        
        // Only add valid numbers to the total
        if (!isNaN(value)) {
            totalAmount += value;
        }
    });

    // Update the displayed total amount
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}

// Add event listeners to all 'Amount' inputs
amountInputs.forEach(function(input) {
    input.addEventListener("input", function() {
        // Check if the input is not a valid number
        if (isNaN(input.value) && input.value !== "") {
            // Show pop-up message
            alert("Only numbers are allowed!");

            // Clear the invalid input
            input.value = "";
        }

        // Update the total amount whenever an input changes
        updateTotal();
    });
});

// Initial calculation to display total if any inputs already have values
updateTotal();


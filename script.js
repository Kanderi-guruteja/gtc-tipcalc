// Function to calculate the tip and update the results
function calculateTip() {
  // Check if the bill total and tip percentage inputs contain any non-numeric characters
  if (billTotalInput.value.match(/[^0-9.]/) && tipInput.value.match(/[^0-9.]/)) {
    // Throw an error
    throw new Error("Invalid input. Please enter numbers only.");
  }

  const billTotal = parseFloat(billTotalInput.value);
  const tipPercentage = parseFloat(tipInput.value);

  if (isNaN(billTotal) || isNaN(tipPercentage)) {
    billTotalInput.setCustomValidity("Please enter valid numbers");
    tipAmountInput.value = "0.00"; // Set Tip Amount to 0
    totalWithTipInput.value = "0.00"; // Set Total Bill with Tip to 0
  } else {
    billTotalInput.setCustomValidity(""); // Clear any previous error
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;
    tipPercentageDisplay.textContent = tipPercentage + "%";
    tipAmountInput.value = tipAmount.toFixed(2);
    totalWithTipInput.value = totalWithTip.toFixed(2);
  }
}

// Try/catch block to catch any errors
try {
  // Calculate the tip
  calculateTip();
} catch (error) {
  // Display an error message to the user
  alert("Error: " + error.message);
}

document.addEventListener("DOMContentLoaded", function () {
  const billTotalInput = document.getElementById("bill-total");
  const tipInput = document.getElementById("tip");
  const tipPercentageDisplay = document.getElementById("tip-percentage-display");
  const tipAmountInput = document.getElementById("tip-amount");
  const totalWithTipInput = document.getElementById("total-with-tip");

  // Add input event listeners to the Bill Total and Tip input fields
  billTotalInput.addEventListener("input", calculateTip);
  tipInput.addEventListener("input", calculateTip);

  // Add a submit event listener to the Bill Total input field
  billTotalInput.addEventListener("submit", function (event) {
    // Check if the Bill Total input field contains any non-numeric characters, including alphabets
    if (billTotalInput.value.match(/[^0-9.]/)) {
      event.preventDefault();

      // Display the error message
      const errorMessage = document.createElement("span");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "Please enter a valid number for the Bill Total.";
      errorMessage.style.color = "red";
      errorMessage.style.display = "block";

      billTotalInput.appendChild(errorMessage);
    }
  });

  // Calculate the tip and update the results
  function calculateTip() {
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

  // Initial calculation
  calculateTip();
});

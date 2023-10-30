// Function to calculate the tip and update the results
function calculateTip() {
  const billTotal = parseFloat(document.getElementById("bill-total").value);
  const tipPercentage = parseFloat(document.getElementById("tip").value);

  if (isNaN(billTotal) || isNaN(tipPercentage)) {
    document.getElementById("bill-total").setCustomValidity("Please enter valid numbers");
    document.getElementById("tip-amount").value = "0.00"; // Set Tip Amount to 0
    document.getElementById("total-with-tip").value = "0.00"; // Set Total Bill with Tip to 0
  } else {
    document.getElementById("bill-total").setCustomValidity(""); // Clear any previous error
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;
    document.getElementById("tip-percentage-display").textContent = tipPercentage + "%";
    document.getElementById("tip-amount").value = tipAmount.toFixed(2);
    document.getElementById("total-with-tip").value = totalWithTip.toFixed(2);
  }
}

// Function to open the popup element
function openPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Function to close the popup element
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Update the tip and total amount in the popup element
function updatePopup() {
  const tipAmount = document.getElementById("tip-amount");
  const totalWithTip = document.getElementById("total-with-tip");

  tipAmount.textContent = document.getElementById("tip-amount-input").value;
  totalWithTip.textContent = document.getElementById("total-with-tip-input").value;
}

// Update the popup element when the tip or total amount changes
document.getElementById("tip-amount-input").addEventListener("input", updatePopup);
document.getElementById("total-with-tip-input").addEventListener("input", updatePopup);

// Add a click event listener to the "Calculate Tip" button
document.getElementById("calculate-tip-button").addEventListener("click", openPopup);

// Initial calculation
calculateTip();

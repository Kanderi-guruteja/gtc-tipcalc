document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("bill-total");
    const tipInput = document.getElementById("tip");
    const tipPercentageDisplay = document.getElementById("tip-percentage-display");
    const tipAmountInput = document.getElementById("tip-amount");
    const totalWithTipInput = document.getElementById("total-with-tip");

    // Add input event listeners to the Bill Total and Tip input fields
    billTotalInput.addEventListener("input", calculateTip);
    tipInput.addEventListener("input", calculateTip);

    // Function to calculate the tip and update the results
    function calculateTip() {
        const billTotal = billTotalInput.value;
        const tipPercentage = tipInput.value;
        
        if (!isNumeric(billTotal) || !isNumeric(tipPercentage)) {
            billTotalInput.setCustomValidity("Please enter valid numbers.");
            tipAmountInput.value = "0.00"; // Set Tip Amount to 0
            totalWithTipInput.value = "0.00"; // Set Total Bill with Tip to 0
        } else {
            billTotalInput.setCustomValidity(""); // Clear any previous error
            const tipAmount = (billTotal * tipPercentage) / 100;
            const totalWithTip = parseFloat(billTotal) + tipAmount;
            tipPercentageDisplay.textContent = tipPercentage + "%";
            tipAmountInput.value = tipAmount.toFixed(2);
            totalWithTipInput.value = totalWithTip.toFixed(2);
        }
    }

    // Initial calculation
    calculateTip();

    function isNumeric(value) {
        return !isNaN(value) && isFinite(value);
    }
});

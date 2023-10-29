document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("bill-total");
    const tipInput = document.getElementById("tip");
    const tipPercentageDisplay = document.getElementById("tip-percentage-display");
    const tipAmountInput = document.getElementById("tip-amount");
    const totalWithTipInput = document.getElementById("total-with-tip");

    // Add an input event listener to the Bill Total input field
    billTotalInput.addEventListener("input", calculateTip);

    // Function to calculate the tip and update the results
    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        
        if (isNaN(billTotal)) {
            billTotalInput.setCustomValidity("Please enter a valid number");
        } else {
            billTotalInput.setCustomValidity(""); // Clear any previous error
            const tipPercentage = tipInput.value;
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

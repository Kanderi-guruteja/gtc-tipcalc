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
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipInput.value);
        
        if (isNaN(billTotal) || isNaN(tipPercentage)) {
            billTotalInput.setCustomValidity("Please enter valid numbers");
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

document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("bill-total");
    const tipInput = document.getElementById("tip");
    const tipPercentageDisplay = document.getElementById("tip-percentage-display");
    const tipAmountInput = document.getElementById("tip-amount");
    const totalWithTipInput = document.getElementById("total-with-tip");

    // Add an input event listener to the Bill Total input field
    billTotalInput.addEventListener("input", calculateTip);

    // Add an input event listener to the Tip Percentage range input
    tipInput.addEventListener("input", calculateTip);

    // Function to calculate the tip and update the results
    function calculateTip() {
       billTotalInput.addEventListener("input", function () {
        const billTotal = parseFloat(billTotalInput.value);
        
        if (isNaN(billTotal) || billTotal < 0) {
            alert("ENTER A VALID INPUT");
            return;
        }
   
    });
    }

    // Initial calculation
    calculateTip();
});

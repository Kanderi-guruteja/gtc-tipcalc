document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("bill-total");
    const tipInput = document.getElementById("tip");
    const tipPercentageDisplay = document.getElementById("tip-percentage-display");
    const tipAmountInput = document.getElementById("tip-amount");
    const totalWithTipInput = document.getElementById("total-with-tip");

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = tipInput.value;

        if (!isNaN(billTotal) && !isNaN(tipPercentage)) {
            const tipAmount = (billTotal * tipPercentage) / 100;
            const totalWithTip = billTotal + tipAmount;
            tipAmountInput.value = tipAmount.toFixed(2);
            totalWithTipInput.value = totalWithTip.toFixed(2);
        }
    }

    billTotalInput.addEventListener("input", calculateTip);
    tipInput.addEventListener("input", calculateTip);

    calculateTip();
});

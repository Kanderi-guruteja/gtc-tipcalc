const billTotal = document.getElementById("bill-total");

billTotal.addEventListener("input", () => {
    const billAmount = parseFloat(billTotal.value);
    if (isNaN(billAmount)) {
        alert("Please enter a valid number for the Bill Total.");
        billTotal.value = "";
    }
});

const tipCalculatorForm = document.getElementById("tip-calculator-form");
const tipRange = document.getElementById("tip");
const tipAmount = document.getElementById("tip-amount");
const totalWithTip = document.getElementById("total-with-tip");

tipCalculatorForm.addEventListener("input", () => {
    const billAmount = parseFloat(billTotal.value);
    const tipPercentage = parseFloat(tipRange.value);
    if (!isNaN(billAmount)) {
        const tip = (billAmount * tipPercentage) / 100;
        const total = billAmount + tip;
        tipAmount.value = tip.toFixed(2);
        totalWithTip.value = total.toFixed(2);
    }
});

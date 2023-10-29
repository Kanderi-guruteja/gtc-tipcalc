const billTotal = document.getElementById("bill-total");
const tipRange = document.getElementById("tip");
const tipAmount = document.getElementById("tip-amount");
const totalWithTip = document.getElementById("total-with-tip");
const tipPercentageDisplay = document.getElementById("tip-percentage-display");

tipRange.addEventListener("input", () => {
    tipPercentageDisplay.innerText = tipRange.value + "%";
});

const calculateTip = () => {
    const billAmount = parseFloat(billTotal.value);
    const tipPercentage = parseFloat(tipRange.value);

    if (!isNaN(billAmount)) {
        const tip = (billAmount * tipPercentage) / 100;
        const total = billAmount + tip;
        tipAmount.value = tip.toFixed(2);
        totalWithTip.value = total.toFixed(2);
    }
};

billTotal.addEventListener("input", calculateTip);
tipRange.addEventListener("input", calculateTip);

const billTotal = document.getElementById("bill-total");

billTotal.addEventListener("input", () => {
    const billAmount = parseFloat(billTotal.value);
    if (isNaN(billAmount)) {
        alert("Please enter a valid number for the Bill Total.");
        billTotal.value = "";
    }
});

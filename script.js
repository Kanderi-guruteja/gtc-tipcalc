const bill_total = document.querySelector("#bill-total");
const slider = document.querySelector("#tip");
const tip_percentage = document.querySelector("#tip-percentage");
const tip_amount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

bill_total.addEventListener("change", calculateTip);
slider.addEventListener("input", calculateTip);

function calculateTip() {
  // Check if the Bill Total input field contains any non-numeric characters, including alphabets
  if (bill_total.value.match(/[^0-9.]/)) {
    alert("Please enter a valid number for the Bill Total.");
    return; // Exit the function
  }

  bill_total.value = parseFloat(bill_total.value).toFixed(2);
  let bill = parseFloat(document.getElementById("bill-total").value);
  let tip = document.getElementById("tip").value;

  tip_percentage.value = tip;

  let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));

  tip_amount.value = total_tip;

  total.value = parseFloat(bill + total_tip).toFixed(2);
}

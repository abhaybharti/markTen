// get access to html elements
const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Amount");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfnotes");

const availableNumberOfNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function checkBillAmountAndCashGiven() {
  hideMessage();
  let tempBillAmount = parseInt(billAmount.value, 10);
  let tempCashAmount = parseInt(cashGiven.value, 10);

  if (tempBillAmount > 0) {
    if (tempBillAmount <= tempCashAmount) {
      const amountToBeReturned = tempCashAmount - tempBillAmount;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Cash Amount can not be less than Bill Amount");
    }
  } else {
    showMessage("The Bill Amount should be greater than 0");
  }
});

function hideMessage() {
  errorMessage.style.display = "none";
  errorMessage.innerText = "";
}

function showMessage(txtMessage) {
  errorMessage.style.display = "block";
  errorMessage.innerText = txtMessage;
}

function checkIfGivenInputIsNumber(val) {
  return !isNaN(val);
}

function calculateChange(amountToBeReturned) {
  for (let index = 0; index < availableNumberOfNotes.length; index++) {
    const numberOfNotes = Math.trunc(
      amountToBeReturned / availableNumberOfNotes[index]
    );
    //amountToBeReturned / availableNumberOfNotes[index];
    amountToBeReturned %= availableNumberOfNotes[index];
    noOfNotes[index].innerText = numberOfNotes;
  }
}

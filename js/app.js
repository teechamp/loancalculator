
document.addEventListener("submit", calculateResults);
// Calculating the Results
function calculateResults(e) {
  e.preventDefault();
  const amount = document.getElementById("amount");
  const interest = document.getElementById("percentage");
  const years = document.getElementById("period");
  const monthlyPayment = document.getElementById("monthly-pay");
  const totalPayment = document.getElementById("total-pay");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(percentage.value) / 100 / 12;
  const calculatedyears = parseFloat(period.value);
  // Computed Monthly payment
  //   const x = Math.pow(1 + calculatedInterest, calculatedyears);
  const value = principal * calculatedInterest;
  const noOFmonth = (1 + calculatedInterest) ** calculatedyears;
  const monthlyvalue = value * noOFmonth;
  const monthlypaymentvalue = noOFmonth - 1;
  const monthlyAmount = monthlyvalue / monthlypaymentvalue;
  //   Overall Payment
  const overallPayment = calculatedyears * monthlyAmount;
  // Interest
  const interestOnLoan = overallPayment - principal;
  //   const monthly = (principal * x * calculatedInterest) / (x - 1);
  if (isFinite(monthlyAmount)) {
    console.log(monthlyAmount);
    monthlyPayment.value = monthlyAmount.toFixed(2);
    totalPayment.value = overallPayment.toFixed(2);
    totalInterest.value = interestOnLoan.toFixed(2);
    // totalInterest.value = (monthly * calculatedyears - principal).toFixed(2);
    // Show Results
    document.getElementById("result").style.display = "block";
    // Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check number inputs");
  }
}


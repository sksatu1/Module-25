// deposite  handeler
document.getElementById('deposite-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositeInput = document.getElementById('deposite-input');
    const NewdepositeText = depositeInput.value;
    const NewdepositeAmount = parseFloat(NewdepositeText);
    // console.log(NewdepositeAmount);

    // update deposite total 
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + NewdepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // update balance total 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + NewdepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposite input field 
    depositeInput.value = '';
})


// WITHDRAW handeler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const NewWithdrawAmount = parseFloat(withdrawInputText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + NewWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal - NewWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the withdrawInput field 
    withdrawInput.value = '';
})
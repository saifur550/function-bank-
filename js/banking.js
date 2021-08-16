//function 
function getInputValue (inputId){
    
    // TODO: btn item show in html 
    const inputItem = document.getElementById(inputId);
    const inputAmountText = inputItem.value;
    const amountValue = parseFloat(inputAmountText);
    // TODO: reset input filed here
    inputItem.value = '';
    return amountValue;

}

//TODO:  handle Deposit  button
document.getElementById('deposit-btn').addEventListener('click', function(){
    const amountValue =  getInputValue('deposit-input');

    // TODO: get current deposit amount 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const preDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText =  preDepositTotal +  amountValue ;
    // console.log(depositTotalText);
    // TODO: update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = preBalanceTotal +  amountValue;
})



//TODO:  handle withdraw  button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount =  getInputValue('withdraw-input');

    // TODO: get current withdraw amount 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText =  preWithdrawTotal + withdrawAmount ;


    // TODO: update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = preBalanceTotal -  withdrawAmount;


     // TODO: reset input filed here
     withdrawInput.value = '';

})













// function dobleIt (num){
//     const result = num * 2 ;
//     return result;
// }

// const  fiveDouble = dobleIt();
// console.log(fiveDouble);

function getInputValue (input){
    
    // TODO: btn item show in html 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depostAmount = parseFloat(depositAmountText);
    // TODO: reset input filed here
    depositInput.value = '';
    return depostAmount;

}

//TODO:  handle Deposit  button
document.getElementById('deposit-btn').addEventListener('click', function(){
    console.log('deposit-btn');
    const depostAmount =  getInputValue();

    // TODO: get current deposit amount 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const preDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText =  preDepositTotal +  depostAmount ;
    // console.log(depositTotalText);
    // TODO: upate balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = preBalanceTotal +  depostAmount;
    // TODO: reset input filed here
    depositInput.value = '';
})



//TODO:  handle withdraw  button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    console.log('withdraw-btn');
    const withdrawInput = document.getElementById('withdraw-input');
    console.log('withdrawInput');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmount);


    // TODO: get current withdraw amount 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText =  preWithdrawTotal + withdrawAmount ;


    // TODO: upate balance 
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
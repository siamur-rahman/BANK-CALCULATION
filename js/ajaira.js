
function getInputValue(input) {
   const inputField = document.getElementById(input);
   const inputAmountText = inputField.value;
   const inputAmountValue = parseFloat(inputAmountText);
   inputField.value = '';
   return inputAmountValue;
}

function updateTotalField(totalFeild, newDepositTotal) {
   // debugger;
   const totalElement = document.getElementById(totalFeild);
   const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText);// parseFloat

   // total DEPOSIT hobe (new amount + old amount)... 
   const depositTotalAmount = previousTotal + newDepositTotal;
   totalElement.innerText = depositTotalAmount;

}


function updateTotalAmount(amount, isAdd) {
   const oldBalence = document.getElementById('balance-total');
   const oldBalenceText = oldBalence.innerText;
   const oldBalenceTotal = parseFloat(oldBalenceText);
   if (isAdd == true) {
      const oldBalenceAmountTotal = oldBalenceTotal + amount;
      oldBalence.innerText = oldBalenceAmountTotal;
   }
   else {
      const oldBalenceAmountTotal = oldBalenceTotal - amount;
      oldBalence.innerText = oldBalenceAmountTotal;
   }
}






document.getElementById('diposit-submit').addEventListener('click', function () {
   // DEPOSIT E input ER .value hoccche new amount ...

   /* const depositInput = document.getElementById('deposit-input');
   const newDepositAmount = depositInput.value;
   const newDepositTotal = parseFloat(newDepositAmount);// parseFloat
*/ const newDepositTotal = getInputValue('deposit-input');



   // DEPOSIT E tag ER .innerText hocche old amount ...
   /*const depositText = document.getElementById('deposit-total');
   const oldDepositAmount = depositText.innerText;
   const oldDepositTotal = parseFloat(oldDepositAmount);// parseFloat

   // total DEPOSIT hobe (new amount + old amount)... 
   const depositTotalAmount = oldDepositTotal + newDepositTotal;
   depositText.innerText = depositTotalAmount;*/
   updateTotalField('deposit-total', newDepositTotal);



   // balance ....

   /* const oldBalence = document.getElementById('balance-total');
    const oldBalenceText = oldBalence.innerText;
    const oldBalenceTotal = parseFloat(oldBalenceText);
 
    const oldBalenceAmountTotal = oldBalenceTotal + newDepositTotal;
    oldBalence.innerText = oldBalenceAmountTotal;*/

   updateTotalAmount(newDepositTotal, true);
   // console.log(depositTotalAmount);

})

document.getElementById('withdraw-submit').addEventListener('click', function () {
   /*const withdrawInput = document.getElementById('withdraw-input');
   const withdrawInputAmount = withdrawInput.value;
   const newWithdrawTotal = parseFloat(withdrawInputAmount);*/
   const newWithdrawTotal = getInputValue('withdraw-input');



   /* const withdrawText = document.getElementById('withdraw-total');
    const withdrawTextTotal = withdrawText.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTextTotal);
 
 
    const totalWithdraw = previousWithdrawTotal + newWithdrawTotal;
    const withdrawMoney = parseFloat(totalWithdraw);
    withdrawText.innerText = withdrawMoney;*/
   updateTotalField('withdraw-total', newWithdrawTotal);


   // withdrawInput.value = '';  EITA R LAGBE

   /*const oldBalence = document.getElementById('balance-total');
   const oldBalenceText = oldBalence.innerText;
   const oldBalenceTotal = parseFloat(oldBalenceText);

   const oldBalenceAmountTotal = oldBalenceTotal - newWithdrawTotal;
   oldBalence.innerText = oldBalenceAmountTotal;*/
   updateTotalAmount(newWithdrawTotal, false);




})
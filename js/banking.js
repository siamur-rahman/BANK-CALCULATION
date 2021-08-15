document.getElementById('diposit-submit').addEventListener('click', function () {
   // DEPOSIT E input ER .value hoccche new amount ...
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmount = depositInput.value;
   const newDepositTotal = parseFloat(newDepositAmount);// parseFloat

   // DEPOSIT E tag ER .innerText hocche old amount ...
   const depositText = document.getElementById('deposit-total');
   const oldDepositAmount = depositText.innerText;
   const oldDepositTotal = parseFloat(oldDepositAmount);// parseFloat

   // total DEPOSIT hobe (new amount + old amount)... 
   const depositTotalAmount = oldDepositTotal + newDepositTotal;
   depositText.innerText = depositTotalAmount;


   // balance ....

   const oldBalence = document.getElementById('balance-total');
   const oldBalenceText = oldBalence.innerText;
   const oldBalenceTotal = parseFloat(oldBalenceText);

   const oldBalenceAmountTotal = oldBalenceTotal + newDepositTotal;
   oldBalence.innerText = oldBalenceAmountTotal;


   // console.log(depositTotalAmount);
   depositInput.value = '';
})

document.getElementById('withdraw-submit').addEventListener('click', function () {
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawInputAmount = withdrawInput.value;
   const newWithdrawTotal = parseFloat(withdrawInputAmount);

   const withdrawText = document.getElementById('withdraw-total');
   const withdrawTextTotal = withdrawText.innerText;
   const previousWithdrawTotal = parseFloat(withdrawTextTotal);


   const totalWithdraw = previousWithdrawTotal + newWithdrawTotal;
   const withdrawMoney = parseFloat(totalWithdraw);
   withdrawText.innerText = withdrawMoney;
   withdrawInput.value = '';

   const oldBalence = document.getElementById('balance-total');
   const oldBalenceText = oldBalence.innerText;
   const oldBalenceTotal = parseFloat(oldBalenceText);

   const oldBalenceAmountTotal = oldBalenceTotal - newWithdrawTotal;
   oldBalence.innerText = oldBalenceAmountTotal;





})
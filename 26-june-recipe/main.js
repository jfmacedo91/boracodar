function lessRecipe() {
  let recipeAmount = document.querySelector('.recipe-amount');
  let NumberRecipeAmount = Number(recipeAmount.innerText);

  if(NumberRecipeAmount <= 1) return;

  NumberRecipeAmount -= 1;
  recipeAmount.innerHTML = String(NumberRecipeAmount).padStart(2, '0');

  const amounts = document.querySelectorAll('.amount');
  amounts.forEach(amount => {
    let totalAmount = Number(amount.dataset.amount);
    totalAmount = totalAmount * NumberRecipeAmount;
    amount.innerText = totalAmount;
  })
}

function moreRecipe() {
  let recipeAmount = document.querySelector('.recipe-amount');
  let NumberRecipeAmount = Number(recipeAmount.innerText);

  if(NumberRecipeAmount > 98) return;

  NumberRecipeAmount += 1;
  recipeAmount.innerHTML = String(NumberRecipeAmount).padStart(2, '0');

  const amounts = document.querySelectorAll('.amount');
  amounts.forEach(amount => {
    let totalAmount = Number(amount.dataset.amount);
    totalAmount = totalAmount * NumberRecipeAmount;
    amount.innerText = totalAmount;
  })
}

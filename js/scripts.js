// Budget calculation

// Player expenses
const playerCostButton = document.getElementById("player-cost-button");

playerCostButton.addEventListener("click", function () {
    const totalPlayer = 5;

    const perPlayerCostElement = document.getElementById("perPlayerCost");
    const perPlayerCostString = perPlayerCostElement.value;
    const perPlayerCost = parseFloat(perPlayerCostString);
    
    const playerCostTotal = perPlayerCost * totalPlayer;
    
    const playerExpensesElement = document.getElementById("playerExpenses");
    playerExpensesElement.value = playerCostTotal;
});

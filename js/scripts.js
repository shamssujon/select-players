// Get number from Input
function getNumberFromInput(inputId){
    const element = document.getElementById(inputId); 
    const elementValue = element.value;
    const elementValueNumber = parseFloat(elementValue);
    return elementValueNumber;
}

// Get number from HTML element
function getNumberFromElement(elementId){
    const element = document.getElementById(elementId); 
    const elementValue = element.innerText;
    const elementValueNumber = parseFloat(elementValue);
    return elementValueNumber;
}

// Budget calculation

// Player expenses
const playerCostButton = document.getElementById("player-cost-button");

playerCostButton.addEventListener("click", function () {
    const totalPlayer = 5;
    const perPlayerCost = getNumberFromInput("perPlayerCost");
    const playerCostTotal = perPlayerCost * totalPlayer;
    const playerExpensesElement = document.getElementById("playerExpenses");
    playerExpensesElement.value = playerCostTotal;
});

const totalCostButton = document.getElementById("total-cost-button");

totalCostButton.addEventListener("click", function(){
    const playerCostTotal = getNumberFromInput("playerExpenses");
    const managerCost = getNumberFromInput("managerCost");
    const coachCost = getNumberFromInput("coachCost");
    const totalCost = playerCostTotal + managerCost + coachCost;

    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.value = totalCost;
})
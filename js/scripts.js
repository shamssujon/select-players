const playerCards = document.querySelectorAll(".player-card");
const selectedPlayersCard = document.querySelector("#selected-players-card .card-body");
const ol = document.createElement("ol");

for (const playerCard of playerCards) {
    const button = playerCard.getElementsByClassName("select-btn")[0];
    button.addEventListener("click", function (event) {
        const li = document.createElement("li");
        li.innerText = event.target.parentNode.parentNode.children[0].innerText;

        if (ol.childNodes.length < 5) {
            ol.appendChild(li);
            event.target.classList.add("disabled");
        } else {
            alert("can not select more than 5");
        }
    });

}
selectedPlayersCard.appendChild(ol);
console.log(ol.childNodes.length);

// Player selection
// const selectedPlayersCard = document.querySelector("#selected-players-card .card-body");
// const ol = document.createElement("ol");

// const playerSelectButton = document.querySelectorAll(".select-btn");
// for (const button of playerSelectButton) {
//     button.addEventListener("click", function (event) {
//         const li = document.createElement("li");
//         li.innerText = event.target.parentNode.parentNode.children[0].innerText;

//         if (ol.childNodes.length < 5) {
//             ol.appendChild(li);
//             event.target.classList.add("disabled");
//         } else {
//             alert("can not select more than 5");
//         }

//         // console.log(ol.childNodes.length);
//     });
// }

// selectedPlayersCard.appendChild(ol);

// console.log(ol.childNodes);
// CAN NOT GET THE OL LENGTH !!!

// Get number from Input
function getNumberFromInput(inputId) {
    const element = document.getElementById(inputId);
    const elementValue = element.value;
    const elementValueNumber = parseFloat(elementValue);
    return elementValueNumber;
}

// Get number from HTML element
function getNumberFromElement(elementId) {
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
    const playerExpenseTotal = perPlayerCost * totalPlayer;

    const playerExpensesElement = document.getElementById("playerExpenses");
    playerExpensesElement.value = playerExpenseTotal;
});

const totalCostButton = document.getElementById("total-cost-button");

totalCostButton.addEventListener("click", function () {
    const playerCostTotal = getNumberFromInput("playerExpenses");
    const managerCost = getNumberFromInput("managerCost");
    const coachCost = getNumberFromInput("coachCost");

    const totalCost = playerCostTotal + managerCost + coachCost;

    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.value = totalCost;
});

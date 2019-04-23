console.log("hiiiiiiiii");

foodFactory = (foodItem) => {
    return `<h2>${foodItem.name}</h2>`
}


addFoodToDom = (foodAsHTML) => {
    const el = document.querySelector("#container");
    el.innerHTML += foodAsHTML;
}
function getData(){
    let foodlist = document.querySelector("#foodList");

foodlist.innerHTML = "";

fetch("http://localhost:8088/food")
    .then(FoodResult => {
        console.log(FoodResult)
        return FoodResult;
    })
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML);
    })
})
}

const el = document.querySelector("#container");

const getFoodButton = document.getElementById("food");
getFoodButton.addEventListener("click", () => getData("food"));

const getDrinkButton = document.getElementById("drink");
getDrinkButton.addEventListener("click", () => getData("drink"));

fetch("https://world.openfoodfacts.org/api/v0/product/.json")
    .then(response => response.json())
    .then(productInfo => {
        // Use it here
    })
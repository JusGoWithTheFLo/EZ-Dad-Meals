//
//  GLOBAL VARIABLES
//
let currentRecipe = 0;

//
// HTML SELECTORS
//
const defaultTitle = "EZ Dad Meals | ";
const pageTitle = document.querySelector("title");
const recipeImage = document.querySelector("#image");
const recipeName = document.querySelector("#name");
const difficulty = document.querySelector("#difficulty");
const time = document.querySelector("#time");
const servingSize = document.querySelector("#servingSize");
const ingredientsText = document.querySelector("#ingredientsText");
const procedureText = document.querySelector("#procedureText");
const notesText = document.querySelector("#notesText");

// BUTTONS
const button1 = document.querySelector("#button1");

// INITIALIZE BUTTONS
button1.onclick = show_bbq_chicken_pizza;

//
// UPDATE FUNCTION
//
function update(recipes){
    pageTitle.innerHTML = defaultTitle + recipes.name; //doesnt work yet
    recipeImage.setAttribute("src", recipes.image);
    recipeName.innerText = recipes.name;
    difficulty.innerText = recipes.difficulty;
    time.innerText = recipes.time;
    servingSize.innerText = recipes["serving size"];
    ingredientsText.innerText = recipes["ingredients"].map(function(element){
        return "* " + element}).join("\n");
    procedureText.innerText = recipes.procedure.map(function(element){
        return "* " + element}).join("\n");
    notesText.innerText = recipes.notes.map(function(element){
        return "* " + element}).join("\n");
}

//
// SHOW RECIPE FUNCTION
//
function show_bbq_chicken_pizza(){
    update(recipes[0]);
}

//
// RECIPES
//
const recipes = [
    {
        name: "BBQ Chicken Pizza",
        difficulty: "Easy",
        time: "45min",
        "serving size": "4",
        image: "https://www.bing.com/th?id=AMMS_d6b808cb90c562de06e919e3de3f776d&w=459&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1",
        ingredients: [
            "1 loaf of french bread",
            "3/4 cup bbq sauce, divided",
            "2 cups mozzarella cheese, shredded",
            "1 cup chicken, cooked and shredded",
            "1/4 cup red onion, chopped",
            "1-2 Tbsp cilantro, chopped"
        ],
        procedure: [
            "Preheat your oven to 400 degrees.",
            "Cut your french bread load in half (hot dog style).",
            "Spread bbq sauce evenly over the top of each french bread load (leave 2 Tbsp extra for drizzling at the end).",
            "Sprinkle about 1-1/2 cups of shredded mozzarella cheese evenly over the top of each half.",
            "Spread chicken and red onion evenly over both loaves.",
            "Top with remaining cheese.",
            "Bake in oven for about 12-17 minutes, or until cheese is melted and starts to turn golden.",
            "Remove pizza from oven and let cool for about 2 minutes.",
            "Top pizza wth cilantro and remaining bbq sauce."
        ],
        notes: [
            "Serve with a side salad.",
            "Use rotisserie chicken to make this even qucker!",
            "Keep onions off kids portions if they don't like it."
        ]
    }
]







//
//  GLOBAL VARIABLES
//
let currentRecipe = 0;

//
// HTML SELECTORS
//
const pageTitle = document.querySelector("title");
const recipeImage = document.querySelector("#image");
const recipeName = document.querySelector("#name");
const difficult = document.querySelector("#difficulty");
const time = document.querySelector("#time");
const servingSize = document.querySelector("#servingSize");
const ingredientsText = document.querySelector("#ingredientsText");
const procedureText = document.querySelector("#procedureText");
const notesText = document.querySelector("#notesText");


//
// RECIPES
//
const recipes = [
    {
        name: "BBQ Chicken Pizza",
        title: " | BBQ Chicken Pizza",
        difficulty: "Easy",
        time: "45min",
        servingSize: 4,
        image: "",
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



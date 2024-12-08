//
//  GLOBAL VARIABLES
//
let currentRecipe = 0;

//
// HTML SELECTORS
//
const defaultTitle = "EZ Dad Meals | ";
const pageTitle = document.querySelector("title");
const recipesDiv = document.querySelector("#recipes");
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
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

// INITIALIZE BUTTONS
button1.onclick = show_favorite1;
button2.onclick = show_favorite2;
button3.onclick = show_favorite3;
button4.onclick = show_favorite4;

//
// UPDATE FUNCTION
//
function update(recipes){
    pageTitle.innerHTML = defaultTitle + recipes.name; //doesnt work yet
    recipesDiv.setAttribute("style", "display: block;");
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
    window.location.href = "home.html#recipes"; //redirects user to recipes section
}

//
// SHOW FAVORITE RECIPE FUNCTION
//
function show_favorite1(){
    update(recipes_favorite[0]);
}
function show_favorite2(){
    update(recipes_favorite[1]);
}
function show_favorite3(){
    update(recipes_favorite[2]);
}
function show_favorite4(){
    update(recipes_favorite[3]);
}

//
// RECIPES
//
const recipes_favorite = [
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
    },
    {
        name: "Egg Roll In A Bowl",
        difficulty: "Easy",
        time: "45min",
        "serving size": "4",
        image: "https://th.bing.com/th/id/OIP.ZWFawMt8CxNFKpf1MWOOeAHaHa?pid=ImgDet&rs=1",
        ingredients: [
            "4 cups water",
            "2 cups long grain brown rice",
            "2 Tbsp olive oil, divided",
            "1/2 cup red onion, diced",
            "1 tsp fresh grated ginger",
            "6 green onions, sliced, green and white parts divided",
            "1 lb grounded turkey",
            "1 bag shredded cabbage",
            "1-3 Tbsp soy sauce",
            "1-2 tsp sesame oil",
            "Salt and pepper to taste"
        ],
        procedure: [
            "In a large saucepan, bring water and brown rice to a boil for 2 minutes.  Reduce heat, cover pot, and let simmer for 30-35 minutes until all the water is absorbed.",
            "In a large skillet, heat the oil and add the red onion.  Sauce for about 5 minutes until the onion softens.  Add in the ginger, white part of the green onions, and the turkey.  Cook until the turkey is brown and cooked through, about 7 to 10 minutes.",
            "Add in the remaining oil and shredded cabbage.  Cook  until the cabbage is wilted, about 5 minutes. Remove from head and mix in soy sauce and sesame oil.",
            "Season to taste with salt and pepper.  Divide rice into bowls and serve a helping of the turkey cabbage mixture.  Top with green parts of onion and sesame oil to taste."
        ],
        notes: [
            "Substitute ground pork, ground beef, or ground chicken for turkey.",
            "Try sriracha to spice up the bowl.",
            "Add in other veggies such as water chestnuts and carrots for variety.",
            "Serve with roasted carrots."
        ]
    },
    {
        name: "Korean Bulgogi Bowl",
        difficulty: "Somewhat Hard",
        time: "70min",
        "serving size": "4",
        image: "https://www.bing.com/th?id=AMMS_26ddc8259adb446df760d55461588562&w=306&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1",
        ingredients: [
            "Steak:",
            "1 cup low sodium soy sauce",
            "1/3 cup brown sugar",
            "1 Tbsp Gochujang (or sriracha)",
            "1 Tbsp fresh ginger, grated",
            "4 cloves garlic, minced or grated",
            "2 Tbsp sesame oil",
            "2 lbs flank or skirt steak thinly sliced",
            "2 Tbsp toasted sesame seeds",
            "Spicy Peanut Sauce:",
            "1/3 cup creamy peanut butter or tahini",
            "2 Tbsp Korean Sunchang (or Gochujang, or sriracha)",
            "2 Tbsp rice vinegar",
            "1 Tbsp low sodium soy sauce",
            "Juice of 2 limes",
            "Bowls:",
            "3-4 cups steamed brown rice (or quinoa)",
            "1 cup shredded cabbage",
            "1 mango, thinly sliced",
            "1 cup steamed or roasted broccoli",
            "1 avocado, sliced",
            "large handful of both fresh basil and cilantro",
            "4 fried poached eggs (or soft boiled)",
            "Toasted sesame seeds + kimchi + limes for serving"
        ],
        procedure: [
            "Steak:",
            "In a large bowl or ziplock bag, combine soy sauce, brown sugar, Gochujang (or sriracha), ginger, garlic, and sesame oil.  Add the steak and toss well to coat.  Submerge all of the steak in sauce.  Cover and place in the fridge for <b>1 hour or overnight</b>",
            "Heat a large wok or skillet over high heat.  Add 1 Tbsp sesame oil, remove the steak from the marinade and add it to the hot pan.  Let it get a nice caramelization on one side, then turn and let it caramelize another <b>2 minutes</b>.  Add in a few tablespoons of the marinade and cook <b>2-3 minutes</b> or until the sauce has thickened slightly and coast the steak.  Remove from the heat and stir in a handful of toasted sesame seeds.",
            "Spicy Peanut Sauce:",
            "In a food processor or blender, combine all the ingredients for the sauce along with 1/4 cup water.  Process until smooth and creamy, adding water 1 Tbsp at a time, until your desired consistency is reached.",
            "Bowls:",
            "Divide the rice (or quinoa) among bowls and top with equal amounts of steak.  Toss the cabbage with the mango and a pinch of salt + pepper.  Add the cabbage + mango to the bowls.  Layer on the broccoli, avocado, basil, and cilantro.  Finish each bowl with an egg, chopped green onions, kimchi, toasted sesame seeds, and a good drizzle of the spicy peanut sauce.  Serve with more peanut sauce for drizzling.  ENJOY!"
        ],
        notes: [
            "For increased flavor, you can marinate the chicken for 1-24 hours!",
            "Use rotisserie chicken to make this even quicker!",
            "Keep onions off kids portions if they don't like it."
        ]
    },
    {
        name: "Spinach Lasagna Rolls",
        difficulty: "Very Easy + Kid Friendly",
        time: "70min",
        "serving size": "4",
        image: "https://www.bing.com/th?id=AMMS_13fbb380cb0c303ab5511e4a977d775b&w=306&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1",
        ingredients: [
            "2 cups homemade marinara sauce, plus more for serving",
            "**9 uncooked lasagna noodles, wheat or gluten-free",
            "10 oz package frozen chopped spinach, thawed and squeezed well",
            "15 oz part skim ricotta cheese",
            "1/2 cup grated Parmesan cheese",
            "1 large egg",
            "Kosher salt and pepper",
            "9 Tbsp mozzarella cheese"
        ],
        procedure: [
            "Preheat oven to 350 degrees Fahrenheit.  Ladle about 1 cup sauce on the bottom of a 9 x 12 baking dish.",
            "Cook noodles according to package directions, then drain.",
            "Combine spinach, ricotta Permesan cheese, egg, 1/2 tsp salt and black pepper in a medium bowl and mix.",
            "Place a piece of wax/parchment paper on the counter and lay out lasagna noodles.  Make sure noodles are dry.  Take 1/3 cup of ricotta mixture and spread evenly over noodle.  Roll carefully and place seam side down onto the baking dish.  Repeat with remaining noodles.  Challenge the kiddos to roll it without squishing any of the ricotta mixture out.",
            "Ladle remaining sauce over the noodles and top each one with 1 Tbsp mozzarella cheese.  Put foil over baking dish and bake for <b>40 minutes</b>, or until cheese melts.  Makes 9 rolls.",
            "To serve, ladle a little sauce on the plate and top with lasagna roll."
        ],
        notes: [
            "9 rolls may not go far in your house.  Double the recipe as needed, but be mindful of portions as well."
        ]
    }
]

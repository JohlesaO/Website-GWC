/* .js files add interaction to your website */
//fact generator vars
var factList = [
  "The average household wastes around 30% of the food it buys – that’s like taking $140 out of the bank and putting $42 straight into the bin!",
  "20% of total global direct carbon emissions are linked to food and agriculture.",
  "Eating more plants could help cut greenhouse gas emissions by 30% by 2030.",
  "One of the biggest causes of forest loss is the expansion of agricultural land for animal feed production, such as soy.",
  "Foods grown locally are more flavorful, nutritious,and beneficial to your local economy.",
  "Around 690 million people go hungry every day, nearly two billion are overweight or obese, and poor diets are the leading cause of non-communicable diseases such as diabetes and cardiovascular disease."
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factBtn");
var count = 0;

//pledge vars
var displayName = document.getElementById("displayedText");
var button = document.getElementById("pledgeButton");


//fact gen function
fact.innerHTML = factList[factList.length-1];
factButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

//pledge fuction
button.addEventListener("click", displaySecret);

function displaySecret(){
  var text = document.getElementById("name").value;
  var text2 = document.getElementById("actions").value;
  displayName.innerHTML = "I, " + text + ", pledge to " + text2 + " in order to eat more mindfully this week. In doing this, I am bettering myself, the planet, and the lives of farmers and animals.";
}

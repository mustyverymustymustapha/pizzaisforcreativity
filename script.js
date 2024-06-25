
const toppings = [
  'Pickles',
  'Jellybeans',
  'Pineapple',
  'Lobster',
  'American Cheese',
  'Green Olives',
  'Anchovies',
  'Chicken Nuggets',
  'Ice Cream',
  'Fried Chicken Legs',
  'Lamb',
  'Korean BBQ',
  'Dried Peppers',
  'Caramelised Onions',
  'Blue Cheese',
  'Pear',
  'Mango',
  'Kiwi',
  'Truffle Oil',
  'Cilantro',
  'Butter Chicken',
  'Sweet Potatoes',
  'Smoked Paprika',
  'Cow Liver',
  'Beet Slices',
  'Butter Chicken',
  'Taco Shells',
  'Eggplant',
  'Cilantro',
  'Alligator',
  'Snails',
  'Purple Cauliflower',
  'Broccoli',
  'Cucumber',
  'Maple Syrup',
  'Figs',
  'Walnuts',
  'Marshmallows',
  'Pistachios'

];

function generateTopping() {
  const randomIndex = Math.floor(Math.random() * toppings.length);
  const randomTopping = toppings[randomIndex];
  document.getElementById('topping').textContent = randomTopping;
}
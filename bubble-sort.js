// Bubble Sort to sort an array of strings by their length (ascending order)

// Array of favorite foods
const favoriteFoods = [
  "Pizza",
  "Sushi",
  "Burger",
  "Ice Cream",
  "Pasta",
  "Tacos",
  "Donut"
];

// Bubble sort function
function bubbleSortByLength(arr) {
  let n = arr.length;
  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare length of current and next item
      if (arr[j].length > arr[j + 1].length) {
        // Swap if current is longer than next
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Sort favorite foods by length
const sortedFoods = bubbleSortByLength(favoriteFoods);

console.log("Favorite foods sorted by length:");
console.log(sortedFoods);
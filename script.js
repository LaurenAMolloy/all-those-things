// Create an array called hobbies with 6 hobbies as elements.
//Create a second array called goals and add 3 personal goals as elements.

var hobbies = ["walking", "reading", "running", "yoga", "horse riding", "baking"];
//Use the length property to log out the length of the hobbies array.
console.log(hobbies.length);

//Add a new hobby at the end of the array using push().
hobbies.push("cycling");


//Log out the element at index 2: console.log(hobbies[2]);.
console.log(hobbies[2]);

//Remove the last element using pop().
//hobbies.pop();
//console.log(hobbies);

//After the 2nd element, add two new elements using splice(). Then, log out the array see the modified elements.
hobbies.splice(2, 0, "painting", "Takwondo");
console.log(hobbies);

//Remove the first element using shift().
hobbies.shift();
//console.log(hobbies);

////Add to the start of an array using shift().
hobbies.unshift("sewing");
//console.log(hobbies);

//// Create another array called goals with at least three elements
var goals = ["learning more Javascript", "reading more", "connecting with family"];

//Create a variable called allTheThings and combine arrays using the concat()
var allTheThings = hobbies.concat(goals);
//var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

// Choose an element in the middle of your 'allTheThings' array and find its index using 'indexOf'
console.log(allTheThings.indexOf("horse riding"));

// Using the index you discovered, remove that element
allTheThings.splice(8, 1);

var plans = allTheThings.map(function(item){
    return `I can't wait to start ${item}`;
});
console.log(plans);







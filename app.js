/* Problem 01 : ana to vori */
function anaToVori(ana) {
// error
if (typeof ana != 'number') {
return 'Please give a number, not a word';
}
else if (ana <= 0) {
return 'Please give a positive number';
}
// error end 
const anaForVori = 16;
// calculation 
let vori = ana / anaForVori;
return vori;
}
let gold = 160;
const totalGold = anaToVori(gold);
console.log(totalGold);



/* Problem 02 : panda cost */
function pandaCost(shingara, somusa, jilapi) {
//error
if (typeof shingara != 'number' || typeof somusa != 'number' || typeof jilapi != 'number') {
return 'Please order as number sir.';
}
else if ((shingara || somusa || jilapi) <= 0) {
return 'You have to oder at least 1 item .';
}
// error end 
const perShingara = 7;
const perSomusa = 10;
const perJilapi = 15;
let shingaraCost = perShingara * shingara;
let somusaCost = perSomusa * somusa;
let jilapiCost = perJilapi * jilapi;
//total cost count
let totalTiffinCost = shingaraCost + somusaCost + jilapiCost;
return totalTiffinCost;
}
//salesQuantity
const shingara = 20;
const somusa = 10;
const jilapi = 5;
const pandaCostTotal = (pandaCost(shingara, somusa, jilapi));
console.log(pandaCostTotal);



/* Problem 03 : picnic budget */
function picnicBudget(peopleQuantity) {
//error start
if (typeof peopleQuantity != 'number') {
return 'Please booking as a number sir.';
}
else if (peopleQuantity <= 0) {
return 'Please booking at least 1 ticket.';
}
// error end
const firstTask = 5000;
const secondTask = 4000;
const thirdTask = 3000;
// ticket fee calculation
if (peopleQuantity <= 100) {
const firstCount = peopleQuantity * firstTask;
return firstCount;
}
else if (peopleQuantity <= 200) {
const firstTaskCost = 100 * firstTask;
const overFirstTask = peopleQuantity - 100;
const secondTaskCost = overFirstTask * secondTask;
const secondCount = firstTaskCost + secondTaskCost;
return secondCount;
}
else {
const firstTaskCost = 100 * firstTask;
const secondTaskCost = 100 * secondTask;
const overFirstTask = peopleQuantity - 200;
const thirdTaskCost = overFirstTask * thirdTask;
const thirdCount = firstTaskCost + secondTaskCost + thirdTaskCost;
return thirdCount;
}
}
const totalTicket = picnicBudget(201);
console.log(totalTicket);



/* Problem 04 : odd friend */
function oddFriend(friends) {
// error start
if (typeof friends != 'object') {
return 'Please make sure you are passing an array of friends.!';
}
else if (typeof friends == 'string') {
return 'Please make sure you are not giving a string.';
}
// error end 
let friend = '';
// search odd friend calculation
for (let i = 0; i < friends.length; i++) {
const element = friends[i];
if (element.length % 2 != 0) {
    friend = element;
break;
}
}
return friend;
}
// friends
const friends = ['tipu', 'laden', 'been', 'osama','abdulaziz', 'kodom',  'simran', 'sayem', 'tarek', 'bappi', 'rubayet', 'rahat'];
const firstOddFriend = oddFriend(friends);
console.log(firstOddFriend);
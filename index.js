import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final 
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

fifaData.forEach(function(item) {
    if(item.Year === 2014 && item.Stage === "Final")
    console.log(`${item["Home Team Name"]}`);
});

fifaData.forEach(function(item) {
    if(item.Year === 2014 && item.Stage === "Final")
    console.log(`${item["Away Team Name"]}`);
});

fifaData.forEach(function(item) {
    if(item.Year === 2014 && item.Stage === "Final")
    console.log(`${item["Home Team Goals"]}`);
});

fifaData.forEach(function(item) {
    if(item.Year === 2014 && item.Stage === "Final")
    console.log(`${item["Away Team Goals"]}`);
});

fifaData.forEach(function(item) {
    if(item.Year === 2014 && item.Stage === "Final")
    console.log(`${item["Win conditions"]}`);
});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  let justFinals = [];
    for(let i = 0; i <data.length; i++){
        if(data[i].Stage === "Final"){
            justFinals.push(data[i]);
        }
    }
    return justFinals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let cb = callback(fifaData);
    const totalyears = cb.map((item) => {
        return {'Year' : item.Year}
    })
    return totalyears;
}
console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let cb = callback(fifaData);
    let winners = [];
    for(let i = 0; i <cb.length; i++){
        if(cb[i]["Home Team Goals"] > cb[i]["Away Team Goals"]){
            winners.push(cb[i]["Home Team Goals"]);
        }
        else{
            winners.push(cb[i]["Away Team Goals"]);
        }
    }
    return winners;
};
console.log(getWinners(getFinals));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    let winyear = callback1(getYears);
    let winnername = callback2(getWinners);
    let winnerList = [];

    for(let i = 0; i <winyear.length; i++){
        let result = `In ${winyear[i].Year}, ${winnername[i]["Win conditions"]} won the world cup!`;
        winnerList.push(result);
    }
    console.log(winnerList);
};
console.log(getWinnersByYear(getYears, getWinners));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data){
    let homeTeamGoals = [];
    let awayTeamGoals = [];
    for(let i = 0; i <data.length; i++){
        if(data[i]["Home Team Goals"]){
            homeTeamGoals.push(data[i]);
        }
        else{
            awayTeamGoals.push(data[i]);
        }
    }
    return homeTeamGoals;
};

console.log(getAverageGoals(fifaData));

const average = homeTeamGoals.reduce((total,amount,index,array) => {
    total += amount;
    if(index === array.length-1){
        return total/array.length;
    }else{
        return total;
    }
});

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

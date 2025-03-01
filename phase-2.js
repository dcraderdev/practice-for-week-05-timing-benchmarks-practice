const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let newArr = []
  for(let i = increment; i <= 10*increment; i+=increment){
  newArr.push(addNums(i))
  }
  return newArr
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let answer=[];
  
    for(let i=increment; i<=10*increment; i+=increment){
     answer.push(addManyNums(i));
    }

	return answer;
}

module.exports = [addNums10, addManyNums10];
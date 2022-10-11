const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
let answer=[];
  
    for(let i=increment; i<=10*increment; i+=increment){
      console.time(`Timer for increment ${i}`);

	    let startTime=Date.now();
	    let result = addNums(i);
      let endTime= Date.now();

	    console.timeEnd(`Timer for increment ${i}`);
	    console.log(`Runtime; ${endTime - startTime}ms`);
      
	    answer.push(result);
    }
	return answer;
}


function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  
    // Your code here
     let answer=[];
    
      for(let i=increment; i<=10*increment; i+=increment){
       
       console.time(`Increment Timer: ${i}`)
  
        let startTime= Date.now();
        let result = addManyNums(i);
        let endTime= Date.now();

        console.timeEnd(`Timer for increment ${i}`);
        console.log(`Runtime; ${endTime - startTime}ms`)

        answer.push(result);
      }

    return answer;
  }


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
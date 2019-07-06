
/** ARRAY VALUE */
const array = [ 1, 2, 10 , 16];


//** array.forEach */
const double = [];
const newArray = array.forEach((num)=>{
  double.push(num * 2);
})
console.log(' - forEach :',double);
document.querySelector("#double").innerHTML = double;



/** map, filter, reduce */
/** map */
mapArrayDouble = array.map((item)=>{
     return item * 2
})
console.log(' - map :', mapArrayDouble);
document.querySelector("#mapArrayDouble").innerHTML = mapArrayDouble;

/** filter */
const filterArray = array.filter(num => {
  return num !== 2 && num !== 10;
})
document.getElementById("filterArray").innerHTML = filterArray;
console.log(filterArray);


/** reduce */
const reduceArray = array.reduce((accumulator, num)=>{
  return accumulator + num;
}, 10);
console.log('reduce', reduceArray);
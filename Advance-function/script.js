const first = () => {
  const greet = 'Hi';
  const second = () => {
    //alert(greet);
    console.log('parent variable: ', greet);
  }
  return second;
}

const newFunc = first();
newFunc();

/**
 * CLOSURES : 
 *    a function ran.
 *    the function executed
 *    its never going to execute again
 *    But it going to remember that threre are references to those variables
 *    So the child scope always has access to the parent scope  
 */


 /**
  * CURRING :
  *   
  */
 const multiply = (a,b) => a * b;
 const curriedMulitply = (a) => (b) => a * b;
 console.log(curriedMulitply(3)(9));  
 const getSqureValue = curriedMulitply(5)
 console.log(getSqureValue(10)); 


 /** COMPOSE */
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log('compose value: ',compose(sum, sum)(5));


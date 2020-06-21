/**
 * REFERENCE:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=A%20closure%20is%20the%20combination,scope%20from%20an%20inner%20function.
 * Trying to understand closures
 */

 /**
  * EXAMPLE 1
  */

  function makeAdder(x) {

    // the below anon function has access to makeAdder's scope
      return function(y) {
          return x+y;
      };
  }

  // add5 = the inner function from makeAdder
  // x is set to 5 by the below call.
  
//   let add5 = makeAdder(5);

  // now we're calling that inner anon function 
  // y is set to 2
  // we should see the sum of x and y => 7

//   console.log(add5(2));

//   let add10 = makeAdder(10);

//   console.log(add10(2));


  /**
   * EXAMPLE 2:  Public function that can access private functions and variables.
   */

  var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }

    // returns three functions that can be referenced by the closure.
    // they share the same lexical environment. AKA, they can all access the variables and functions
    // defined in counter
    return {
        increment: function() {
          changeBy(1);
        },
    
        decrement: function() {
          changeBy(-1);
        },

        value: function() {
            return privateCounter;
          }
        };


      })();

    console.log(counter.value());  // 0.

    counter.increment();
    counter.increment();
    console.log(counter.value());  // 2.

    counter.decrement();

    console.log(counter.value());


function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const closureFunction = outer();
closureFunction();
closureFunction();

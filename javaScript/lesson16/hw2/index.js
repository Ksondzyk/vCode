var foo;

export default function bar() {
  if (!foo) {
    var foo = 10;
  }

  return foo;
}

// var foo = bar();
// foo = 1;
// console.log(foo);

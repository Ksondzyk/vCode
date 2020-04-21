let foo = 1;

export default function bar() {
  if (!foo) {
    foo = 10;
  }

  return foo;
}

// foo = bar();

// console.log(foo);

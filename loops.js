let a = 0;
while (a <= 100) {
  console.log(a);
  a += 2;
}

let b = 100;
while (b >= 0) {
  console.log(b);
  b -= 3;
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  let result = "";
  if (i % 3 == 0) {
    result += "Hello";
  }
  if (i % 5 == 0) {
    result += "World";
  }
  console.log(result || i); // If conditions are not met, then the number is displayed.
}

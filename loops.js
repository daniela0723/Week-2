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


for (let i = 1; i <= 100 ; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    } 
}

for (let a = 0; a <= 100; a++) {
    if (a % 3 == 0) {
        console.log('Hello');
     }
     if (a % 5 == 0) {
        console.log('World');
    }
    if (a % 3 == 0 && a % 5 == 0) {
        console.log('HelloWorld');
    }
}

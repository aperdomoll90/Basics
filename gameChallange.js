// FIZZ BUZZ GAME ANY NUMBER DIVISIBLE BY 3 IS FIZZ ANY NUMBER /5 IS BUZZ AND IF /3 AND /5 IS FIZZ BUZZ

// WITH A FOR LOOP

for (let i = 1; i < 20; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('FIZZ BUZZ');
  } else if (i % 3 == 0) {
    console.log('FIZZ');
  } else if (i % 5 == 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
}

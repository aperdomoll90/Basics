//write a loop that outputs 10..9..8.......1..Blast off
console.log('Here we go...')
function countdown(startValue, callback){
  for (let i = startValue; i > 0; i--) {
      console.log(i);
      if (i === 1) {
        callback()
      }
    }
}

countdown(10, () => {
    console.log('BLAST OFF!!!')
})

countdown(3, () => {
    console.log('GO!!!')
})
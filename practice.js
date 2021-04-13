const morseCode = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
};
const toBeTrans = 'nikki';
const fullTranslation = (text) => {
    return text.toUpperCase().split('').map(letter => {
       return morseCode[letter] ? morseCode[letter] : letter
    }).join(' ')
}
console.log(fullTranslation(toBeTrans))
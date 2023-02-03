// Desafio 1

function compareTrue(cozinha, banheiro) {
  if (cozinha && banheiro === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separated = string.split(' ');
  return separated;
}

// Desafio 4
function concatName(names) {
  let lastFirst = names[names.length -1] + ', ' + names[0];
  return lastFirst;
}
// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6

function highestCount (array) {
  let repetitions = 0;
  let highestNum = Math.max.apply(null, array);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNum) {
      repetitions += 1;
    }
  }
  return repetitions;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let win = 0;
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    win = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    win = 'cat2';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    win = 'os gatos trombam e o rato foge';
  }
  return win;
}

// Desafio 8

function fizzBuzz(arr) {
  let fizBuz = [];
  for (let cont of arr) {
    if (cont % 3 === 0 && cont % 5 === 0) {
      fizBuz.push('fizzBuzz');
    } else if (cont % 3 === 0) {
      fizBuz.push('fizz');
    } else if (cont % 5 === 0) {
      fizBuz.push('buzz');
    } else {
      fizBuz.push('bug!');
    }
  } return fizBuz;
}

// Desafio 9
function encode(string) {
  let encoded = string[count].join('');
  for (let count = 0; count < string.length; count += 1) {
    if (count === 'a') {
      string[count] = 1;
    } else if (count === 'e') {
      string[count] = 2;
    } else if (count === 'i') {
      string[count] = 3;
    } else if (string[count] === 'o') {
      string[count] = 4;
    } else if (string[count] === 'u') {
      string[count] = 5;
    }
  }
return encoded;
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

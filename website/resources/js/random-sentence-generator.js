// GENIUS ADVICE CODE

const absCommand = ['Never, UNDER ANY CIRCUMSTANCE', 'Always', 'Don\'t fret the risk:', 'Let your family know before you', 'Be wary of police activity when you attempt to'];
const toDo = ['propel yourself forward with violent hip thrusts', 'shake down elderly women', 'make loud complaints about the coarseness of public toilet paper', 'explain to strangers why you deserve to cut in line', 'vigoursly best your high jump record'];
const place = ['gas station', 'stranger\'s front lawn', 'theme park', 'crowded restroom', 'remote airport'];

const randomNum = () => {
  return Math.floor(Math.random() * 3);
};

const randomSentence = () => {
  let x = randomNum();
  console.log(`${absCommand[randomNum()]} ${toDo[randomNum()]} in a ${place[randomNum()]}.`)

};

randomSentence();

// INTERACTIVE ELEMENTS

const adviceBox = document.getElementById('sage-advice');
const button = document.querySelector('button');

const bar1 = document.getElementsByClassName('bar-1');
const bar2 = document.getElementsByClassName('bar-2');
const bar3 = document.getElementsByClassName('bar-3');

const img1 = document.getElementsByClassName('img-1');
const img2 = document.getElementsByClassName('img-2');
const img3 = document.getElementsByClassName('img-3');


// CODE FOR MAKING INTERACTIVE ELEMENTS INTERACTIVE


button.onclick = function() {
  if (button.style.backgroundColor === 'blue') {
    button.style.backgroundColor = ''
  } else {
    button.style.backgroundColor = 'blue';
  };
}


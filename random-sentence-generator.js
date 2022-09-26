console.clear()

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
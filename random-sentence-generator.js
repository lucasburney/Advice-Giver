console.clear()

const absCommand = ['Never, UNDER ANY CIRCUMSTANCE', 'Always', 'Don\'t fret the risk:', 'Let your family know before you', 'Be wary of police activity when you attempt to'];
const toDo = ['propel yourself forward with violent hip thrusts', 'shake down elderly women', 'make loud complaints about the coarseness of public toilet paper', 'explain to strangers why you deserve to cut in line', 'vigoursly best your high jump record'];
const place = ['gas station', 'stranger\'s front lawn', 'theme park', 'crowded restroom', 'remote airport'];
const creatures = ['24 cowboys', 'a band of squirrels', 'several overly-muscled children', 'your in-laws', 'two kindly old women'];
const presentAction = ['quickly walk in your direction!', 'are scamming tourists.', 'stare at you, dumbfounded.', 'attempt to ignore you.', 'shake down elderly men.', 'arguing with one another.'];

const randomNum = () => {
  return Math.floor(Math.random() * 5);
};

const randomSentence = () => {
  let x = randomNum();
  console.log(`${absCommand[randomNum()]} ${toDo[randomNum()]} in a ${place[randomNum()]} while ${creatures[randomNum()]} ${presentAction[randomNum()]}`)

};

randomSentence();
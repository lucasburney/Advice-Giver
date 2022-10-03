// GENIUS ADVICE CODE

const absCommand = ['Never, UNDER ANY CIRCUMSTANCE', 'Always', 'Don\'t fret the risk:', 'Let your family know before you', 'Be wary of police activity when you attempt to'];
const toDo = ['propel yourself forward with violent hip thrusts', 'shake down elderly women', 'complain of public toilet paper\'s poor quality', 'explain to strangers why you deserve to cut in line', 'vigoursly best your high jump record'];
const place = ['gas station', 'stranger\'s front lawn', 'theme park', 'crowded restroom', 'remote airport'];

const randomNum = () => {
  return Math.floor(Math.random() * 3);
};

const randomSentence = () => {
  let x = randomNum();
  return (`${absCommand[randomNum()]} ${toDo[randomNum()]} in a ${place[randomNum()]}.`)
};

randomSentence();

// INTERACTIVE ELEMENTS

const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');


const adviceBox = document.querySelector('p');
const button = document.querySelector('button');


button.onclick = function() {
  
  img1.hidden = true;
  
  setTimeout(()=>{
    bar1.style.backgroundColor = 'blue';
  }, 700)
  setTimeout(()=>{
    bar1.style.backgroundColor = 'gray';
    bar2.style.backgroundColor = 'blue';
  }, 1400)
  setTimeout(()=>{
    bar2.style.backgroundColor = 'gray';
    bar3.style.backgroundColor = 'blue';
  }, 2100)
  setTimeout(()=>{
    bar3.style.backgroundColor = 'gray';
    adviceBox.innerHTML = randomSentence();
    img2.hidden = true;
  }, 2800)

  setTimeout(()=>{
    img1.hidden = false
    img2.hidden = false
  }, 6000);

};



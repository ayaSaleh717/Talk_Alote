import React, { useState, useEffect } from 'react'


const Change_Txt = () => {
const words = [
['естественная среда ','живой язык','контекст','лайфстайл'],
['контекст','лайфстайл','живой язык'],
['естественная среда ','живой язык','лайфстайл']
];

const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
const [currentArray, setCurrentArray] = useState(words[currentWordIndex]);
const [currentWord, setCurrentWord] = useState("");

const displayWordsWithInterval = () => {
let intervalld;



const startInterval = () => {
  intervalld = setInterval(() => {
    setCurrentWordIndex2((currentWordIndex2) => (currentWordIndex2 + 1) % currentArray.length);
  }, 500);
};

const switchArray = () => {
setCurrentWordIndex((currentWordIndex) => (currentWordIndex + 1) % words.length);
setCurrentWordIndex2 (0) ;
clearInterval (intervalld);
setTimeout (startInterval, 2000);
}
startInterval();
setInterval (switchArray, 6000);
}
useEffect(() => {
setCurrentWord(currentArray[currentWordIndex2]) ;
}, [currentWordIndex2, currentArray]);

useEffect(() => {
  setCurrentArray (words[ currentWordIndex]) ;
}, [words, currentWordIndex]);


useEffect(() => {
displayWordsWithInterval();
},[])

return (
  <h3>{currentWord}</h3>
 
)
}
export default Change_Txt
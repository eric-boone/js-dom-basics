// var firstParagraph = document.getElementById('main');
// console.log(firstParagraph);
//
// var getAllElements = document.getElementsByTagName('ul');
// console.log(getAllElements);
//
// var getStringElements = document.getElementsByTagName('ul')[0];
// console.log(getStringElements);
//
// var allListItems = document.getElementsByTagName('li');
// console.log(allListItems);
//
// for(var i = 0; i < allListItems.length; i++){
//   console.log(allListItems[i]);
// }

// var evenElements = document.getElementsByClassName('even');
// console.log(evenElements);
//
// var oddElements = document.getElementsByClassName('odd');
// console.log(oddElements);
//
// var firstEvenElement = document.getElementsByClassName('even')[0];
// console.log(firstEvenElement);
//
// var firstOddElement = document.getElementsByClassName('odd')[0];
// console.log(firstOddElement);

// var main = document.querySelector('#main');
// console.log(main);

// var firstOddElement = document.querySelector('.odd');
// console.log(firstOddElement);

// var oddAndEvenElements = document.querySelectorAll('.odd, .even');
// console.log(oddAndEvenElements);

var allListItems = document.getElementsByTagName('li');
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

getSingleElement.appendChild(li);
console.log(allListItems);
